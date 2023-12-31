const TransactionModel = require("../models/transaction.model")

const getTransactions = (req, res)=>{
    TransactionModel.find().then(result=>{
        const today = new Date().toLocaleDateString()
        filterResult = result.filter(each=>new Date(each.created_at).toLocaleDateString() == today)
        console.log(filterResult)
        res.status(200).json({transactions: filterResult})
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
const deleteTransaction = (req, res)=>{
    const payload = req.body  
    console.log(payload)  
    TransactionModel.findByIdAndDelete(payload.id).then(result=>{
        console.log(result)
        res.status(200).json({message: 'Success'})
    }).catch(err=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}

module.exports = { getTransactions,addTransaction, deleteTransaction }