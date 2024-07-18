const mongoose = require ("mongoose")

const seriesSchema = mongoose.Schema ({
    date: { type: String, required: true },
    purpose: { type: String, required: true },
    amount: { type: Number, required: true }
}, {timestamps: true})

const Series = mongoose.model("series", seriesSchema)

module.exports = Series;