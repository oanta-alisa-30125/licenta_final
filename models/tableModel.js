const mongoose = require("mongoose");

const tableSchema = mongoose.Schema({
    name:{ type: String, require },
    bookings: []
}, {
    timestamps: true,
})

module.exports = mongoose.model('tables', tableSchema)