const TransactionModel = require("../models/transaction.model")

const getTransactions = (req, res)=>{
    TransactionModel.find().then(result=>{
        res.status(200).json({transactions: result})
    }).catch(err=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}
const addTransaction = (req, res)=>{
    const payload = req.body
    payload.created_at = new Date().toISOString()
    let form = new TransactionModel(payload)
    form.save().then(()=>{
        res.status(200).json({message: 'Success'})
    }).catch(()=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}

module.exports = { getTransactions,addTransaction }