const mongoose = require('mongoose')
const {Schema} = mongoose

const productSchema = new Schema({
    inputVal: String,
    result: String,
})
const historyModel = mongoose.model('histories',productSchema)

module.exports = historyModel