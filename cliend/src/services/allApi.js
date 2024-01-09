import { base_url } from "./base_url"
import { commonApi } from "./commonApi"


// add client
export const addClients=async(reqbody)=>{
    return await commonApi('POST',`${base_url}/clients`,reqbody)
}

// get clients

export const getclient=async()=>{
    return await commonApi('GET',`${base_url}/admin/clients`)
}