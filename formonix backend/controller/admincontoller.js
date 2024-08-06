const jwt=require('jsonwebtoken')
const admins=require('../model/adminschema')
const bcrypt=require('bcryptjs')

exports.register=async(req,res)=>{
    // console.log('inside the admin controller')
    try {

        const{name,email}=req.body
        console.log(req.body)
        const existuser=await admins.findOne({email})
        if(existuser){
            res.status(406).json('user already exists')
        }
        else{
            const hashedpswd=await bcrypt.hash(req.body.pswd,8)
            const newuser=new admins({
                name,
                email,
                pswd:hashedpswd
            })
            await newuser.save()
            res.status(200).json(newuser)   
        }  
    } catch (error) {
        res.status(401).json(`error occured due to ${error}`)    
    }
  
}

exports.login=async(req,res)=>{
    const {email,pswd}=req.body
    try{
        const existingadmin=await admins.findOne({email})
        console.log(existingadmin);
        if(existingadmin){
            const isMatching= await bcrypt.compare(pswd,existingadmin.pswd)
            if(isMatching){
                const token= jwt.sign({userId:existingadmin._id},'secretkey') 
                res.status(200).json({existingadmin,token})
            }
            else{
                res.status(401).json('invalid password')
            }
            
        }
        else{
            res.status(401).json('invalid email or password')
        }
    }catch(err){
        res.status(401).json(`register request failed due to${err}`)
    }
}