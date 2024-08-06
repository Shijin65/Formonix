const mongoose=require('mongoose')


const adminSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true

    },
   
    email:{
        type:String,
        require:true,
        unique:true,
        validator(value){
            if(!validator.isEmail(value)){
                throw new Error('invalid email')
            }
        }

    },
    pswd:{
        type:String,
        require:true
        
    }



})

adminSchema.methods.toJSON=function(){
    const admins=this
    const adminObject=admins.toObject()
    delete adminObject.pswd
    return adminObject
}

const admindetails=mongoose.model("admindetails",adminSchema)

module.exports=admindetails