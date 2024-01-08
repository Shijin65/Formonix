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




export const commonApi = async (httpMethod, url, reqBody) => {
  try {
    const response = await axios({
      method: httpMethod,
      url: url,
      data: reqBody,
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    return response.data;
  } catch (error) {
    // Log or handle the error
    console.error("Error in commonApi:", error);

    // Rethrow the error to be caught by the caller
    throw error;
  }
};
