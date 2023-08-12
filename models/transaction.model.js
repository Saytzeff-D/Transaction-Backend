const mongoose = require('mongoose')

const TransactionSchema = mongoose.Schema({
    customerName: String,
    type: String,
    amount: String,
    created_at: String
})

const TransactionModel = mongoose.model('transaction_tbs', TransactionSchema)
module.exports = TransactionModel