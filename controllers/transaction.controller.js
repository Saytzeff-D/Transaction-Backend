const TransactionModel = require("../models/transaction.model")

const getTransactions = (req, res)=>{
    TransactionModel.find().then(result=>{
        res.status(200).json({transactions: result})
    }).catch(err=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}

module.exports = { getTransactions }