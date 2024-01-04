import Container from 'react-bootstrap/Container';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import resume from "../assets/Image.png";
import { useEffect } from 'react';

function ShowModal(props) {

   useEffect(()=>{
    document.getElementById("my_modal_1").showModal();
   },[props.data])
    
    
    
    return (
<div>
<dialog id="my_modal_1"  className="modal w-full">
              <div className="modal-box w-11/12 max-w-7xl text-center ">
                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4">
                      ✕
                    </button>
                  </form>
                </div>
                <div className="w-full  flex justify-center">
                  <figure>
                    <img
                      className="max-h-52 "
                      src={props.data.applicant_image}
                      alt="applicant image"
                    />
                  </figure>
                </div>

                <h3 className="font-bold text-lg uppercase">{props.data.name}</h3>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-8 ">
                  {/*  User Details */}
                  <div className="text-start ms-14 font-medium text-lg gap-5 flex flex-col">
                    <p>
                      <span className="font-bold">Applicant Name :</span>{" "}
                      {props.data.Applicant_Name}
                    </p>
                    <p>
                      <span className="font-bold">Date of birth : </span>
                      {props.data.Dob}
                    </p>
                    <p>
                      <span className="font-bold">passport number : </span>
                      {props.data.passport_number}
                    </p>
                    <p>
                      <span className="font-bold">Address :</span>{" "}
                      {props.data.Address}
                    </p>
                    <p>
                      <span className="font-bold">State : </span>
                      {props.data.State}
                    </p>
                    <p>
                      <span className="font-bold">Country : </span>
                      {props.data.Country}
                    </p>
                    <p>
                      <span className="font-bold">Country To Apply : </span>
                      {props.data.Country_to_apply}
                    </p>
                    <p>
                      <span className="font-bold">Job Category : </span>
                      {props.data.Job_Category}
                    </p>
                  </div>

                  {/* Document */}

                  {/* Residence ID */}
                  <div className="mt-3 flex flex-col gap-4">
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
                              <img src={props.data.Residence_ID} alt="residenceID" />
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                        <a
                          href={resume}
                          download={props.data.Applicant_Name + "-Residence_ID"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
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
                                src={props.data.applicant_image}
                                alt="residenceID"
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
                        <a
                          href={resume}
                          download={props.data.Applicant_Name + "-applicant_image"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>
                    {/* Passport Front Side */}
                    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Passport Front Side : </label>
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
                                src={props.data.Passport_front_side}
                                alt="residenceID"
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
                        <a
                          href={resume}
                          download={
                            props.data.Applicant_Name + "-Passport_front_side"
                          }
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>
                    {/* Passport Back Side */}
                    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Passport Back Side : </label>
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
                                src={props.data.Passport_back_side}
                                alt="residenceID"
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
                        <a
                          href={resume}
                          download={props.data.Applicant_Name + "-Passport_back_side"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>
                    {/* Full Passport */}
                    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Full Passport : </label>
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
                              <img src={props.data.Full_Passport} alt="residenceID" />
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                        <a
                          href={resume}
                          download={props.data.Applicant_Name + "-Full_Passport"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>
                    {/* Experience Certificate */}
                    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Experience Certificate : </label>
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
                                src={props.data.Experience_Certificate}
                                alt="residenceID"
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
                        <a
                          href={resume}
                          download={
                            props.data.Applicant_Name + "Experience_Certificate"
                          }
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>
                    {/* PCC */}
                    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">PCC : </label>
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
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">
                              <img src={props.data.PCC} alt="residenceID" />
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                        <a href={resume} download={props.data.Applicant_Name + "PCC"}>
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>
                    {/* Bank Statement */}
                    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Bank Statement : </label>
                      <div>
                        <button
                          className="btn btn-sm"
                          onClick={() =>
                            document
                              .getElementById("Bank_Statement")
                              .showModal()
                          }
                        >
                          view
                        </button>
                        <dialog id="Bank_Statement" className="modal">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">
                              <img
                                src={props.data.Bank_Statement}
                                alt="residenceID"
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
                        <a
                          href={resume}
                          download={props.data.Applicant_Name + "Bank Statement"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>
                    {/* resume */}
                    <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">resume : </label>
                      <div>
                        <button
                          className="btn btn-sm"
                          onClick={() =>
                            document.getElementById("resume").showModal()
                          }
                        >
                          view
                        </button>
                        <dialog id="resume" className="modal">
                          <div className="modal-box">
                            <h3 className="font-bold text-lg">Hello!</h3>
                            <p className="py-4">
                              <img src={props.data.resume} alt="residenceID" />
                            </p>
                            <div className="modal-action">
                              <form method="dialog">
                                {/* if there is a button in form, it will close the modal */}
                                <button className="btn">Close</button>
                              </form>
                            </div>
                          </div>
                        </dialog>
                        <a
                          href={resume}
                          download={props.data.Applicant_Name + "resume"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
</div>
  );
}
export default ShowModal