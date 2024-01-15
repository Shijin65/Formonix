import React, { useEffect, useState } from "react";
import ShowModal from "../Components/ShowModal"
import { getclient } from '../services/allApi'
import { base_url } from "../services/base_url";
import {BeatLoader} from "react-spinners"
import { useNavigate } from "react-router-dom";

function ShowData() {
  const [modalShow, setModalShow] = useState(false);
  const [itemdata,setitemdata]=useState()
  const [Clientdata,setClientdata]=useState()
  const [isLoading, setIsLoading] = useState(true);
  const Navigate = useNavigate();


  useEffect(()=>{
    async function getdata(){
      try {
        const result=await getclient()
        console.log(result)

        setClientdata(result)
        
      } catch (error) {
        Navigate("/", { replace: true });
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
    <div className="sm:m-10 m-2">
      <h1 className="font-bold text-center text-lg sm:text-2xl sm:mt-5">Client Data</h1>
      <h3 className="text-start sm:mt-5 text-sm sm:text-lg ms-2 font-semibold text-slate-500 mb-4">
        Total : {Clientdata.length}
      </h3>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2  ">
        {/* cards */}
        {Clientdata && Clientdata.map((item,index) => {
          
          return(
          
            <div className="card card-side bg-base-100 shadow-xl max-h-48 min-h-28" key={item.id}>
              {/* <figure className="w-40">
                <img
                  className="max-w-  ms-"
                  src={`${item.applicant_image}`}
                  alt="client image "
                />
              </figure> */}
              <div className="card-body">
                <h2 className="uppercase text-xs sm:text-lg">{item.applicant_name}</h2>
                <h2 className=" text-xs sm:text-lg font-semibold">{item.passport_number}</h2>
                <div className="card-actions justify-center w-full">
                  <button
                    className="btn bg-slate-800 text-white md:btn-md sm:btn-sm btn-xs w-full"
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
