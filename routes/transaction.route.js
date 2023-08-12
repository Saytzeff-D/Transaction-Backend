const express = require('express')
const { getTransactions } = require('../controllers/transaction.controller')
const TransactionRouter = express.Router()

TransactionRouter.get('/all', getTransactions)

module.exports = TransactionRouter