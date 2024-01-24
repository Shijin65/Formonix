const clients = require('../model/clientSchema');
const cloudinary = require('../cloudinary/cloudinary');

exports.addClient = async (req, res) => {
    try {
        const fileDetails = req.files;

        // Upload images to Cloudinary and get URLs
        const residence_id_url = await cloudinary.documents(fileDetails.residence_id[0].path, 'residence_id');
        const applicant_image_url = await cloudinary.documents(fileDetails.applicant_image[0].path, 'applicant_image');
        const passport_front_url = await cloudinary.documents(fileDetails.passport_front[0].path, 'passport_front');
        const passport_back_url = await cloudinary.documents(fileDetails.passport_back[0].path, 'passport_back');
        const passport_full_url = await cloudinary.documents(fileDetails.passport_full[0].path, 'passport_full');
        const expirience_cerificate_url = await cloudinary.documents(fileDetails.expirience_cerificate[0].path, 'expirience_cerificate');
        const pcc_url = await cloudinary.documents(fileDetails.pcc[0].path, 'pcc');
        const bank_statement_url = await cloudinary.documents(fileDetails.bank_statement[0].path, 'bank_statement');
        const resume_url = await cloudinary.documents(fileDetails.resume[0].path, 'resume');

        const https_residence_url=residence_id_url.url
        // Extract other fields from req.body
        const { applicant_name, dob,contact,email, address, state, country, country_apply, passport_number, job_category } = req.body;

        // Create a new client instance with the Cloudinary URLs
        const newClient = new clients({
            applicant_name,
            dob,
            address,
            contact,
            email,
            state,
            country,
            country_apply,
            passport_number,
            job_category,
            residence_id: residence_id_url.url,
            applicant_image: applicant_image_url.url,
            passport_front: passport_front_url.url,
            passport_back: passport_back_url.url,
            passport_full: passport_full_url.url,
            expirience_cerificate: expirience_cerificate_url.url,
            pcc: pcc_url.url,
            bank_statement: bank_statement_url.url,
            resume: resume_url.url,
        });

        // Save the new client to MongoDB
        await newClient.save();

        // Respond with the new client details
        res.status(200).json(newClient);
        console.log('Client added successfully:', newClient);
    } catch (error) {
        // Handle errors
        console.error('Error adding client:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};


exports.getclientsDetails=async(req,res)=>{
    try {
        const allclients=await clients.find()
        res.status(200).json(allclients)
        
    } catch (error) {
        res.status(406).json(`error occured due to ${error}`)
        
    }
}

