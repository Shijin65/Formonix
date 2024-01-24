const mongoose=require('mongoose')


const clientSchema=new mongoose.Schema({
    applicant_name:{
        type:String,
        require:true
    },
    dob:{
        type:String,
        require:true
    },
    contact:{
        type:String,
        require:true

    },
    email:{
        type:String,
        require:true

    },
    address:{
        type:String,
        require:true
    },
    state:{
        type:String,
        require:true
    },
    country:{
        type:String,
        
    },
    country_apply:{
        type:String,
        require:true
    },
    passport_number:{
        type:String,
        require:true
    },
    job_category:{
        type:String,
        require:true
    },
    residence_id:{
        type:String,
        
    },
    applicant_image:{
        type:String,
        require:true
    },
    passport_front:{
        type:String,
        require:true
    },
    passport_back:{
        type:String,
        require:true
    },
    passport_full:{
        type:String,
        require:true
    },
    expirience_cerificate:{
        type:String,
       
    },
    pcc:{
        type:String,
       
    },
    bank_statement:{
        type:String,
        
    },
    resume:{
        type:String,
        
    }



})

const clientdetails=mongoose.model("clientdetails",clientSchema)

module.exports=clientdetails