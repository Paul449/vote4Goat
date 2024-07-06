const { Player, User } = require('../models/index');

const resolvers = {
  Query: {
    players: async () => {
      try {
        const players = await Player.find(); // Find all players
        return players;
      } catch (error) {
        console.error("Error fetching players:", error);
        throw error;
      }
    },
    playerImg: async () => {
      try {
        const playersWithImages = await Player.find({ photoUrl: { $exists: true, $ne: null } });
        return playersWithImages;
      } catch (error) {
        console.error("Error fetching players with images:", error);
        throw error;
      }
    },
    voteCount: async () => {
      try {
        const playersWithVotes = await Player.find({ votes: { $exists: true } });
        return playersWithVotes;
      } catch (error) {
        console.error("Error fetching players with votes:", error);
        throw error;
      }
    },
  },

  Mutation: {
    updateVote: async (parent, { id, voteCount }) => {
      return await Player.findOneAndUpdate(
        { _id: id },
        { votes: voteCount }, // Ensure the field being updated is correct
        { new: true }
      )
    },
    register: async (parent, { username, password }) => {
      const existingUser = await User.findOne({ username });
      if (existingUser) throw new Error('User already exists');

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({ username, password: hashedPassword });
      await user.save();

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      return { token, user };
    },
    login: async (parent, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error('Invalid credentials');

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch) throw new Error('Invalid credentials');

      const payload = { user: { id: user.id } };
      const token = jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: '1h' });

      return { token, user };
    },
  }
};

module.exports = resolvers;
