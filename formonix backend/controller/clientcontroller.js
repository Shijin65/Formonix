const clients=require('../model/clientSchema')


// add client detials

exports.addClient=async(req,res)=>{

    const{applicant_name,dob,address,state,country,country_apply,passport_number,job_category,residence_id,applicant_image,passport_front,passport_back,passport_full,expirience_cerificate,pcc,bank_statement,resume
    }=req.body
    const residenceIdFile = req.files.residence_id[0];
    const applicantImageFile = req.files.applicant_image[0];

    console.log('inside project controller');

    res.status(200).json('successfill')




    // try {

    //     const newClients=new clients({
    //         applicant_name,
    //         dob,
    //         address,
    //         state,
    //         country,
    //         country_apply,
    //         passport_number,
    //         job_category,
    //         residence_id,
    //         applicant_image,
    //         passport_front,
    //         passport_back,
    //         passport_full,
    //         expirience_cerificate,
    //         pcc,
    //         bank_statement,
    //         resume
    //     })
    //     console.log('added succesfully');
    
    //     await newClients.save()

    //     res.status(200).json(newClients)
        

    // } catch (error) {
    //     res.status(406).json(`error occured due to ${error}`)
    // }

    

    

}




