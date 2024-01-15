const cloudinary=require('cloudinary')

// dotenv already imported in index.js
const dotenv=require('dotenv')

dotenv.config()

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUDINARY_API_KEY,
    api_secret:process.env.CLOUDINARY_APY_SECRET

})

exports.documents=(file,folder)=>{
    return new Promise (resolve=>{
        cloudinary.uploader.upload(file,(result)=>{
            resolve({
                url:result.url,
                id:result.public_id
            })
        },{
            resource_type:"raw",
            folder:folder
        }) 
    })
}