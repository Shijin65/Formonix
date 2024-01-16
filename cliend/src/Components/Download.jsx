import React from 'react';
import axios from 'axios';

const DownloadButton = ({ fileUrl, fileName, fileType }) => {
  const downloadFile = async () => {
    try {
      const response = await axios.get(fileUrl, { responseType: 'blob' });

      // Create a blob from the response
      const blob = new Blob([response.data], { type: fileType });

      // Create a link element
      const link = document.createElement('a');

      // Set the href attribute with the object URL of the blob
      link.href = window.URL.createObjectURL(blob);

      // Set the download attribute with the desired file name
      link.download = fileName;

      // Append the link to the document
      document.body.appendChild(link);

      // Trigger a click on the link to start the download
      link.click();

      // Remove the link from the document
      document.body.removeChild(link);
    } catch (error) {
      console.error('Error downloading file', error);
    }
  };

  return (
    <button onClick={downloadFile} className='btn sm:btn-sm  btn-xs '>
      Download {fileType === 'application/pdf' ? 'PDF' : 'Image'}
    </button>
  );
};

export default DownloadButton;