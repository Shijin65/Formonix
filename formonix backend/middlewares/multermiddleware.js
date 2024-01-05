// import multer

const multer=require('multer')

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

    if(file.mimetype===`image/png` || file.mimetype===`image/jpg` || file.mimetype===`image/jpeg` || file.mimetype===`image/pdf` ){
        callback(null,true)

    }else{
        callback(null,false)
        return callback(new Error('only png,jpg,jpeg and pdf are allowed'))
    }

}




// multerconfig

const multerconfig=multer({
    storage,
    fileFilter
})


module.exports=multerconfig