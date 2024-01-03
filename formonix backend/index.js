require('dotenv').config()

const express=require('express')

const cors=require('cors')

const router=require('./routers/router')

require('./DB/connection')


const profoserver=express()

profoserver.use(cors())

profoserver.use(express.json())

const PORT=4010|| process.env

profoserver.listen(PORT,()=>{
   console.log(`server is successfully running to port number:${PORT}`);
})