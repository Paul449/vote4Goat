const { Schema, model } = require('mongoose')

const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        match: [
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 
            'Please enter a valid email.',
        ],
    },
    password: {
        type: String,
        required: true,
    },
    yourPlayer: {
        type: Schema.Types.ObjectId,
        ref: 'Player'
    }
})
userSchema.pre('save', async function(next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    next();
});

const User = model('user', userSchema)

module.exports = User