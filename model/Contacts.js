const mongoose = require ('mongoose');

const ContactShema = mongoose.Schema ({
    name: String,
    message: String
});

module.exports = mongoose.model('contact',ContactShema);