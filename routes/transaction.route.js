const express = require('express')
const { getTransactions, addTransaction } = require('../controllers/transaction.controller')
const TransactionRouter = express.Router()

TransactionRouter.get('/all', getTransactions)
TransactionRouter.post('/add', addTransaction)

module.exports = TransactionRouter