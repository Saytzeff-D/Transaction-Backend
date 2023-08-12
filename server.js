const express = require('express')
const app = express()
const mongoose = require('mongoose')
require('dotenv').config()
const cors = require('cors')
const bodyParser = require('body-parser');
const TransactionRouter = require('./routes/transaction.route')
app.use(cors({origin: '*'}))
app.use(bodyParser.urlencoded({extended: true, limit: '50mb'}))
app.use(bodyParser.json({limit:'50mb'}));
app.use('/transact', TransactionRouter)

mongoose.connect(process.env.URI).then(()=>{
    console.log('Mongo Database Connected Successfully')
}).catch(err=>{
    console.log(err)
})

app.listen(process.env.PORT, (req, res)=> console.log(`Transaction Server is now listening on PORT ${process.env.PORT}`))