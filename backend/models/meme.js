const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemeSchema = new Schema({
    blank: String
},{
    timestamps: true
});

module.exports = mongoose.model('Meme', MemeSchema);