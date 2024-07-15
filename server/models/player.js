const { Schema, model } = require('mongoose')

const playerSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    photoUrl: {
        type: String,
    },
    votes: {
        type: Number
    }
})

const Player = model('player', playerSchema)

module.exports = Player
