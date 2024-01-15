require('dotenv').config()

const express=require('express')

const cors=require('cors')

const router=require('./routers/router')


// body parser
const bodyparse=require('body-parser')





require('./DB/connection')


const profoserver=express()

profoserver.use(cors())

profoserver.use(express.json())

profoserver.use(router)

// body parser

profoserver.use(bodyparse.urlencoded({extended:false}))

profoserver.use(bodyparse.json())

// access the document folder

profoserver.use('/documents',express.static('./documents'))

const PORT= process.env.PORT || 4010

profoserver.listen(PORT,()=>{
   console.log(`server is successfully running to port number:${PORT}`);
})