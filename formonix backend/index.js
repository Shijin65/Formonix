require('dotenv').config()

const express=require('express')

const cors=require('cors')

const router=require('./routers/router')

const path = require('path');

// body parser
const bodyparse=require('body-parser')

require('./DB/connection')

const profoserver=express()

const corsOptions = {
   origin: '*', // Allow all origins
   methods: ['GET', 'POST', 'PUT', 'DELETE'],
   allowedHeaders: ['Content-Type', 'Authorization']
};

profoserver.use(cors(corsOptions));

profoserver.use(express.json())

profoserver.use(router)

// body parser

profoserver.use(bodyparse.urlencoded({extended:false}))

profoserver.use(bodyparse.json())

// access the document folder

profoserver.use('/documents',express.static('./documents'))

profoserver.use(express.static(path.join(__dirname, '../cliend/build')));

profoserver.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../cliend/build', 'index.html'));
});

const PORT= process.env.PORT || 4010 

profoserver.listen(PORT,()=>{
   console.log(`server is successfully running to port number:${PORT}`);
})