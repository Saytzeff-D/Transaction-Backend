const UserModel = require("../models/user.model")

const register = (req, res)=>{
    const payload = req.body
    let form = new UserModel(payload)
    form.save().then(res=>{
        res.status(200).json({message: 'Success'})
    }).catch(err=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}
const login = (req, res)=>{
    const payload = req.body
    UserModel.find(payload).then(result=>{
        if (result.length !== 0) {
            res.status(200).json({message: 'Logged In'})
        } else {
            res.status(500).json({message: 'Internal Server Error'})
        }
    }).catch(err=>{
        res.status(500).json({message: 'Internal Server Error'})
    })
}

module.exports = { register, login }