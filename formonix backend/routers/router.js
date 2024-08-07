const express=require('express')

// import controller
const clientcontroller=require('../controller/clientcontroller')
const admincontroller=require('../controller/admincontoller')

// import multer
const multerconfig = require('../middlewares/multermiddleware')
const jwt=require('../middlewares/jwt')

const router=new express.Router()

// add client
router.post('/clients',multerconfig.fields([
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

// get clients
router.get('/admin/clients',clientcontroller.getclientsDetails)

// adminregister
router.post('/admin/register',admincontroller.register)

// adminlogin
router.post('/admin/login',admincontroller.login)



module.exports=router

