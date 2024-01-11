import React, { useEffect, useState } from "react";
import ShowModal from "../Components/ShowModal"
import { getclient } from '../services/allApi'
import { base_url } from "../services/base_url";
import {BeatLoader} from "react-spinners"
function ShowData() {
  const [modalShow, setModalShow] = useState(false);
  const [itemdata,setitemdata]=useState()
  const [Clientdata,setClientdata]=useState()
  const [isLoading, setIsLoading] = useState(true);



  useEffect(()=>{
    async function getdata(){
      try {
        const result=await getclient()
        console.log(result)

        setClientdata(result)
        
      } catch (error) {
        console.log(error)

      }finally {
        setIsLoading(false);
      }}
      getdata()
  },[])
  if (isLoading) {
    return <div className=" h-screen flex items-center justify-center  -pt-10"><BeatLoader color="#484f4d" /></div>;
  }
  
  return (
    <div className="m-10">
      <h1 className="font-bold text-center text-2xl">Client Data</h1>
      <h3 className="text-start mt-5 font-semibold text-slate-500 mb-4">
        Total : {Clientdata.length}
      </h3>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2  ">
        {/* cards */}
        {Clientdata && Clientdata.map((item,index) => {
          
          return(
          
            <div className="card card-side bg-base-100 shadow-xl max-h-48" key={item.id}>
              <figure className="w-40">
                <img
                  className="max-w-  ms-"
                  src={`${base_url}/documents/${item.applicant_image}`}
                  alt="client image "
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title uppercase">{item.applicant_name}</h2>
                <h2 className="text-lg font-semibold">{item.passport_number}</h2>
                <div className="card-actions justify-center w-full">
                  <button
                    className="btn bg-slate-800 text-white lg: md:btn-md sm:btn-sm w-full"
                    onClick={() => {
                      setitemdata(item)
                      setModalShow(true)
                      
                    }
                    }
                  >
                    view details
                  </button>



                </div>
              </div>
            </div>

          
        )
        }
        )}
        {modalShow ? <ShowModal
              show={modalShow}
              // onHide={() => setModalShow(false)}
              Clientdata={itemdata}
            />:""}

      </div>
    </div>
  );
}

export default ShowData;
