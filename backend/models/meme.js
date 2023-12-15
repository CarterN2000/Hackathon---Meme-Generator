const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MemeSchema = new Schema ({
    image: {type: String},
    title: {type: String},
    favs: [String]
},{
    timestamps: true
});

module.exports = mongoose.model('Meme', MemeSchema);