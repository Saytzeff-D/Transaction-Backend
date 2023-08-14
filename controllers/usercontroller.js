const UserModel = require("../models/user.model")

const register = (req, res)=>{
    const payload = req.body    
    let form = new UserModel(payload)
    UserModel.find({email: payload.email}).then(result=>{
        if (result.length == 0) {
            form.save().then(()=>{
                res.status(200).json({message: 'Success'})
            }).catch(err=>{
                console.log(err)
                res.status(500).json({message: 'Internal Server Error', err})
            })
        } else {
           res.status(500).json({message: 'Email Already Registered'})
        }
    }).catch(err=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}
const login = (req, res)=>{
    const payload = req.body
    UserModel.find({email: payload.email}).then(result=>{
        console.log(result)
        if (result.length !== 0) {
            res.status(200).json({message: 'Logged In'})
        } else {
            res.status(500).json({message: 'Invalid User Login'})
        }
    }).catch(err=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}

module.exports = { register, login }