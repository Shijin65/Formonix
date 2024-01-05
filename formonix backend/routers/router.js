

const express=require('express')

const router=new express.Router()


// import controller

const clientcontroller=require('../controller/clientcontroller')
const multerconfig = require('../middlewares/multermiddleware')

// add client

router.post('/clients/add',multerconfig.any([
    {name:'residence_id',maxCount:1},
    {name:'applicant_image',maxCount:1},
    {name:'passport_front',maxCount:1},
    {name:'passport_back',maxCount:1},
    {name:'passport_full',maxCount:1},
    {name:'expirience_cerificate',maxCount:1},
    {name:'pcc',maxCount:1},
    {name:'bank_statement',maxCount:1},
    {name:'resume',maxCount:1}
    

]),clientcontroller.addClient)

