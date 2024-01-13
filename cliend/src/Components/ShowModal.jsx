import { useEffect } from 'react';
import { base_url } from '../services/base_url';
import {saveAs} from "file-saver"
function ShowModal(props) {

   useEffect(()=>{
    document.getElementById("my_modal_1").showModal();
   },[props.Clientdata])
    

const {Clientdata}=props
    
    return (
<div>
<dialog id="my_modal_1"  className="modal w-full">
              <div className="modal-box w-11/12 max-w-7xl text-center ">
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4" onClick={()=>{window.location.reload()}}>
                      ✕
                    </button>
                  </form>
                </div>
                <div className="w-full  flex justify-center">
                  <figure >
                    <img
                      className="max-h-52 rounded-full "
                      src={`${base_url}/documents/${Clientdata.applicant_image}`}      
                      alt="applicant image"
                    />
                  </figure>
                </div>
                <h3 className="font-bold text-lg uppercase">{Clientdata.name}</h3>

<div className="grid md:grid-cols-2 sm:grid-cols-1 mt-8 ">
  {/*  User Details */}
  <div className="text-start ms-14 font-medium text-lg gap-5 flex flex-col">
    <p>
      <span className="font-bold">Applicant Name :</span>{" "}
      {Clientdata.applicant_name}
    </p>
    <p>
      <span className="font-bold">Date of birth : </span>
      {Clientdata.dob}
    </p>
    <p>
      <span className="font-bold">passport number : </span>
      {Clientdata.passport_number}
    </p>
    <p>
      <span className="font-bold">Address :</span>{" "}
      {Clientdata.address}
    </p>
    <p>
      <span className="font-bold">State : </span>
      {Clientdata.state}
    </p>
    <p>
      <span className="font-bold">Country : </span>
      {Clientdata.country}
    </p>
    <p>
      <span className="font-bold">Country To Apply : </span>
      {Clientdata.country_apply}
    </p>
    <p>
      <span className="font-bold">Job Category : </span>
      {Clientdata.job_category}
    </p>
  </div>

  {/* Document */}
  <div className="mt-3 flex flex-col gap-4">
    {/* Residence ID */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold ">
      <label htmlFor="">Residence ID </label>
      <div>
        <button
          className="btn btn-sm"
          onClick={() =>
            document.getElementById("Residence_ID").showModal()
          }
        >
          view
        </button>
        <dialog id="Residence_ID" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              <img src={`${base_url}/documents/${Clientdata.residence_id}`} alt="residenceID" />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
          {" "}
          <button className="btn btn-sm" onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.residence_id}`, `${Clientdata.applicant_name}-residence_id`)}}>Download</button>
        
      </div>
    </div>

    {/* Applicant Image */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
      <label htmlFor="">Applicant Image </label>
      <div>
        <button
          className="btn btn-sm"
          onClick={() =>
            document
              .getElementById("applicant_image")
              .showModal()
          }
        >
          view
        </button>
        <dialog id="applicant_image" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              <img
                src={`${base_url}/documents/${Clientdata.applicant_image}`}
                alt="client image"
              />
            </p>
            <div className="modal-action">
              <form method="dialog">
                
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
       
          {" "}
          <button className="btn btn-sm" onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.applicant_image}`, `${Clientdata.applicant_name}-applicant_image`)}}>Download</button>
        
      </div>
    </div>
    {/* Passport Front Side */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
      <label htmlFor="">Passport Front Side  </label>
      <div>
        <button
          className="btn btn-sm"
          onClick={() =>
            document
              .getElementById("Passport_front_side")
              .showModal()
          }
        >
          view
        </button>
        <dialog id="Passport_front_side" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              <img
                src={`${base_url}/documents/${Clientdata.passport_front}`}
                alt="Passport_front_side"
              />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
          {" "}
          <button className="btn btn-sm" onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.passport_front}`, `${Clientdata.applicant_name}-Passport_front_side`)}}>Download</button>
       
      </div>
    </div>
    {/* Passport Back Side */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
      <label htmlFor="">Passport Back Side  </label>
      <div>
        <button
          className="btn btn-sm"
          onClick={() =>
            document
              .getElementById("Passport_back_side")
              .showModal()
          }
        >
          view
        </button>
        <dialog id="Passport_back_side" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">
              <img
                src={`${base_url}/documents/${Clientdata.passport_back}`}
                alt="passport_back"
              />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
          {" "}
          <button className="btn btn-sm" onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.passport_back}`, `${Clientdata.applicant_name}-passport_back`)}}>Download</button>
        
      </div>
    </div>
    {/* Full Passport */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
      <label htmlFor="">Full Passport  </label>
      <div>
        <button
          className="btn btn-sm"
          onClick={() =>
            document.getElementById("Full_Passport").showModal()
          }
        >
          view
        </button>
        <dialog id="Full_Passport" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Full_Passport</h3>
            <p className="py-4">
              <img src={`${base_url}/documents/${Clientdata.passport_full}`} alt="passport_full" />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
          {" "}
          <button className="btn btn-sm" onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.passport_full}`, `${Clientdata.applicant_name}-passport_full`)}}>Download</button>
        
      </div>
    </div>
    {/* Experience Certificate */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
      <label htmlFor="">Experience Certificate </label>
      <div>
        <button
          className="btn btn-sm"
          onClick={() =>
            document
              .getElementById("Experience_Certificate")
              .showModal()
          }
        >
          view
        </button>
        <dialog id="Experience_Certificate" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">
              Experience_Certificate
            </h3>
            <p className="py-4">
              <img
                src={`${base_url}/documents/${Clientdata.expirience_cerificate }`}
                alt="expirience_cerificate  "
              />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
          {" "}
          <button className="btn btn-sm" onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.expirience_cerificate}`, `${Clientdata.applicant_name}-expirience_cerificate`)}}>Download</button>
       
      </div>
    </div>
    {/* PCC */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
      <label htmlFor="">PCC  </label>
      <div>
        <button
          className="btn btn-sm"
          onClick={() =>
            document.getElementById("PCC").showModal()
          }
        >
          view
        </button>
        <dialog id="PCC" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">PCC</h3>
            <p className="py-4">
              <img src={`${base_url}/documents/${Clientdata.pcc}`} alt="residenceID" />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
        
          <button className="btn btn-sm" onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.pcc}`, `${Clientdata.applicant_name}-pcc`)}}>Download</button>
       
      </div>
    </div>
    {/* Bank Statement */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
      <label htmlFor="">Bank Statement </label>
      <div>
        <button
          className="btn btn-sm"
          // onClick={() =>
          //   document
          //     .getElementById("Bank_Statement")
          //     .showModal()
          // }
        >
          <a href={`${base_url}/documents/${Clientdata.bank_statement}`} target="_blank">view</a>
        </button>
        <dialog id="Bank_Statement" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">bank_statement</h3>
            <p className="py-4">
              <img
                src={`${base_url}/documents/${Clientdata.bank_statement}`}
                alt="bank_statement"
              />
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
       
          <button className="btn btn-sm"onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.bank_statement}`, `${Clientdata.applicant_name}-bank_statement`)}}>Download</button>
        
      </div>
    </div>
    {/* resume */}
    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
      <label htmlFor="">resume </label>
      <div>
        <button
          className="btn btn-sm"
          // onClick={() =>
          //   document.getElementById("resume").showModal()
          // }
        >
          <a href={`${base_url}/documents/${Clientdata.resume}`} target="_blank">view</a>
          
        </button>
        <dialog id="resume" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">resume</h3>
            <p className="py-4">
              {/* <img src={`${base_url}/documents/${Clientdata.resume}`} alt="resume" /> */}
            </p>
            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>
    
          <button className="btn btn-sm" onClick={()=>{saveAs(`${base_url}/documents/${Clientdata.resume}`, `${Clientdata.applicant_name}-resume`)}}>Download</button>
        
      </div>
    </div>
  {/* </div> */} 
</div>
  
  
</div>
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn" onClick={()=>{window.location.reload()}}>Close</button>
                  </form>
                </div>
              </div>
            </dialog>
</div>
  );
}
export default ShowModal