// import axios
import axios from "axios"

// export const commonApi=async(httprequest,url,reqBody)=>{
//     const reqConfig={
//         method:httprequest,
//         url,
//         data:reqBody,
//         headers:{'Content-Type':'multipart/form-data'}
//     }
//     return await axios(reqConfig).then((result)=>{
//         return result
//     }).catch((err)=>{
//         return err
//     })

// }



// export const commonApi = async (httpRequest, url, reqBody) => {
//   const reqConfig = {
//     method: httpRequest,
//     url,
//     data: reqBody,
//     // Omit the Content-Type header when using FormData
//   };

//   return await axios(reqConfig)
//     .then((result) => {
//       return result;
//     })
//     .catch((err) => {
//       return err;
//     });
// };




// export const commonApi = async (httpMethod, url, reqBody) => {
//   try {
//     const response = await axios({
//       method: httpMethod,
//       url: url,
//       data: reqBody,
//       headers: { 'Content-Type': 'multipart/form-data' },
//     });

//     return response.data;
//   } catch (error) {
//     console.error("Error in commonApi:", error);
//     alert("Unable to reach server ")
//     throw error;
//   }
// };

export const commonApi=async(httprequest,url,reqBody,reqHeader)=>{
    const reqConfig={
        method:httprequest,
        url,
        data:reqBody,
        headers:reqHeader?reqHeader:{'Content-Type':'application/json'}
    }
    return await axios(reqConfig).then((result)=>{
        return result
    }).catch((err)=>{
        return err
    })

}
