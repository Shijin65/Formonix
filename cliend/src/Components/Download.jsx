import React, { useState } from "react";
import axios from "axios";
const DownloadButton = ({ fileUrl, fileName, fileType }) => {
  
const [load,setload]=useState(false)
  const downloadFile = async () => {
    try {
      const response = await axios.get(fileUrl, { responseType: "blob" });
      setload()
      saveAs(response.data, `${fileName}`);
    } catch (error) {
      console.error("Error downloading file", error);
    }
  };

  return (
    <button onClick={downloadFile} className="btn sm:btn-sm  btn-xs ">
      Download
       {fileType === "application/pdf" ? "PDF" : "Image"}
    </button>
  );
};

export default DownloadButton;
