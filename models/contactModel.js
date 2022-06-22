const mongoose = require("mongoose");

const contactSchema = mongoose.Schema({
    name: { type: String, require },
    email: { type: String, require },
    mesaj: { type: String, require }
}, {
    timestamps: true,
})

module.exports = mongoose.model('contacts', contactSchema)