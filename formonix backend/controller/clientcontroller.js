const clients=require('../model/clientSchema')

// console.log('inside controller');

// add client detials

exports.addClient=async(req,res)=>{

    console.log(req.files);

    const fileDetails = req.files;


const residence_id = fileDetails.residence_id[0].filename;
const applicant_image = fileDetails.applicant_image[0].filename;
const passport_front = fileDetails.passport_front[0].filename;
const passport_back = fileDetails.passport_back[0].filename;
const passport_full = fileDetails.passport_full[0].filename;
const expirience_cerificate = fileDetails.expirience_cerificate[0].filename;
const pcc = fileDetails.pcc[0].filename;
const bank_statement = fileDetails.bank_statement[0].filename;
const resume = fileDetails.resume[0].filename;


console.log('Residence ID Filename:', residence_id);
console.log('Applicant Image Filename:', applicant_image);
console.log('Passport Front Filename:', passport_front);
console.log('Passport Back Filename:', passport_back);
console.log('Passport Full Filename:', passport_full);
console.log('Experience Certificate Filename:', expirience_cerificate);
console.log('PCC Filename:', pcc);
console.log('Bank Statement Filename:', bank_statement);
console.log('Resume Filename:', resume);


    

    const{applicant_name,dob,address,state,country,country_apply,passport_number,job_category
    }=req.body

    
    
    

    



    try {

        const newClients=new clients({
            applicant_name,
            dob,
            address,
            state,
            country,
            country_apply,
            passport_number,
            job_category,
            residence_id,
            applicant_image,
            passport_front,
            passport_back,
            passport_full,
            expirience_cerificate,
            pcc,
            bank_statement,
            resume
        })
        
    
        await newClients.save()

        res.status(200).json(newClients)
        console.log(newClients);
        console.log('added succesfully');
        

    } catch (error) {
        res.status(401).json(`error occured due to ${error}`)
    }

    

    

}

// get client detials

exports.getclientsDetails=async(req,res)=>{
    try {
        const allclients=await clients.find()
        res.status(200).json(allclients)
        
    } catch (error) {
        res.status(406).json(`error occure due to ${error}`)
        
    }
}




