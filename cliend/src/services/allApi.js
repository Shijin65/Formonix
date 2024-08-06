import { base_url } from "./base_url"
import { commonApi } from "./commonApi"


// add client
export const addClients=async(reqbody,reqHeader)=>{
    return await commonApi('POST',`${base_url}/clients`,reqbody,reqHeader)
}

// get clients

export const getclient=async()=>{
    return await commonApi('GET',`${base_url}/admin/clients`,'')
}

// admin login

export const adminLogin=async(reqbody)=>{
    return await commonApi('POST',`${base_url}/admin/login`,reqbody)
}