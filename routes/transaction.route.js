const express = require('express')
const { getTransactions, addTransaction, deleteTransaction } = require('../controllers/transaction.controller')
const TransactionRouter = express.Router()

TransactionRouter.get('/all', getTransactions)
TransactionRouter.post('/add', addTransaction)
TransactionRouter.patch('/delete', deleteTransaction)

module.exports = TransactionRouter