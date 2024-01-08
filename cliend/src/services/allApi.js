
// add client
export const addClients=async(reqbody)=>{
    return await commonApi('POST',`${base_url}/clients`,reqbody)
}