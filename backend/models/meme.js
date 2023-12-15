const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const memeSchema = new Schema ({
    image: String,
    title: String,
    favorites: [{type: Schema.Types.ObjectId, ref: "Meme"}]
},{
    timestamps: true
})

module.exports = mongoose.model('Meme', memeSchema);