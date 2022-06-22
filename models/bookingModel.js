const mongoose = require("mongoose");

const bookingSchema = mongoose.Schema({
    name: { type: String, require },
    email: { type: String, require },
    phone: { type: String, require },
    date: { type:String, require },
    hour: { type: String, require },
    table:{ type: String, require }
}, {
    timestamps: true,
})

module.exports = mongoose.model('books', bookingSchema)