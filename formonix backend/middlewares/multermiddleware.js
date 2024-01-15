// import multer

const multer=require('multer')

console.log('inside multer');

// creating storage place
const storage=multer.diskStorage({
    destination:(req,file,callback)=>{
       callback(null,'./documents') 
    },
    filename:(req,file,callback)=>{
        const filename=`image-${Date.now()}-${file.originalname}`
        callback(null,filename)
    }
})


const fileFilter=(req,file,callback)=>{

    if(file.mimetype===`application/pdf` ){
        callback(null,true)

    }else{
        callback(null,false)
        return callback(new Error('only  pdf files are allowed'))
    }

}




// multerconfig

const multerconfig=multer({
    storage,
    fileFilter
    
    
})


module.exports=multerconfig