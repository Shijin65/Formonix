require('dotenv').config()

const express=require('express')

const cors=require('cors')

const router=require('./routers/router')



require('./DB/connection')


const profoserver=express()

profoserver.use(cors())

profoserver.use(express.json())

profoserver.use(router)

// access the document folder

profoserver.use('/documents',express.static('./documents'))

const PORT=4010|| process.env

profoserver.listen(PORT,()=>{
   console.log(`server is successfully running to port number:${PORT}`);
})