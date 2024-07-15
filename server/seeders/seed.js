const db = require('../config/connection');
const { Player } = require('../models');
const playerSeeds = require('./playerSeed.json');
const cleanDB = require('./cleanDB');

db.once('open', async () => {
  await cleanDB('Player');
  await Player.deleteMany({})
  await Player.create(playerSeeds);

  console.log('all done!');
  process.exit(0);
});
