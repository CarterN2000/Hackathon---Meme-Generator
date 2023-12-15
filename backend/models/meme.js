const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
    image: String
},{
    timestamps: true
});

module.exports = mongoose.model('Meme', MemeSchema);