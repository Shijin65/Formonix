import React from "react";
import resume from "../assets/Image.png";
function ShowData() {
  const data = [
    {
      id: "1",

      number: "91-xxxxxxxxx",
      Applicant_Name: "shijin",
      Dob: "12/25/2002",
      passport_number: "331116546",
      Address: "house(h),city,000000",
      State: "palakkad",
      Country: "india",
      Country_to_apply: "italy",
      Job_Category: "developer",
      Residence_ID:
        "https://i.pinimg.com/736x/c2/18/c6/c218c60c350f127291c627b07476c0f2.jpg",
      applicant_image:
        "https://i.pinimg.com/564x/17/35/a3/1735a3ef48e59b7ce95b2e4499c7df36.jpg",
      Passport_front_side:
        "https://i.pinimg.com/564x/76/d4/8f/76d48ffe34ac2440d8db94161eb90245.jpg",
      Passport_back_side:
        "https://i.pinimg.com/564x/d8/85/5c/d8855c21ea93d702bc8306d5fb628381.jpg",
      Full_Passport:
        "https://i.pinimg.com/564x/81/06/6a/81066a6a4c354b77de4b7c80cc3e24b4.jpg",
      Experience_Certificate:
        "https://i.pinimg.com/564x/81/06/6a/81066a6a4c354b77de4b7c80cc3e24b4.jpg",
      PCC: "https://i.pinimg.com/564x/81/06/6a/81066a6a4c354b77de4b7c80cc3e24b4.jpg",
      Bank_Statement:
        "https://i.pinimg.com/236x/57/19/25/571925c2c855b7646956e3777f7d0619.jpg",
    },
    {
      id: "2",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User2",
      number: "91-xxxxxxxxx",
      Applicant_Name: "shijin",
      Dob: "12/25/2002",
      passport_number: "331116546",
      Address: "house(h),city,000000",
      State: "palakkad",
      Country: "india",
      Country_to_apply: "italy",
      Job_Category: "developer",
    },
    {
      id: "3",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User3",
      number: "91-xxxxxxxxx",
      Applicant_Name: "shijin",
      Dob: "12/25/2002",
      passport_number: "331116546",
      Address: "house(h),city,000000",
      State: "palakkad",
      Country: "india",
      Country_to_apply: "italy",
      Job_Category: "developer",
    },
    {
      id: "4",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User4",
      number: "91-xxxxxxxxx",
      Applicant_Name: "shijin",
      Dob: "12/25/2002",
      passport_number: "331116546",
      Address: "house(h),city,000000",
      State: "palakkad",
      Country: "india",
      Country_to_apply: "italy",
      Job_Category: "developer",
    },
    {
      id: "5",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User5",
      number: "91-xxxxxxxxx",
      Applicant_Name: "shijin",
      Dob: "12/25/2002",
      passport_number: "331116546",
      Address: "house(h),city,000000",
      State: "palakkad",
      Country: "india",
      Country_to_apply: "italy",
      Job_Category: "developer",
    },
  ];
  return (
    <div className="m-10">
      <h1 className="font-bold text-center text-2xl">User Data</h1>
      <h3 className="text-start mt-5 font-semibold text-slate-500">
        Total : {data.length}
      </h3>
      <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2  ">
        {/* cards */}
        {data.map((item, index) => (
          <>
            <div className="card card-side bg-base-100 shadow-xl max-h-48">
              <figure>
                <img
                  className="max-h-32 rounded-full"
                  src={item.applicant_image}
                  alt="Movie"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.Applicant_Name}</h2>
                <h2 className="card-title">{item.number}</h2>
                <div className="card-actions justify-center w-full">
                  <button
                    className="btn btn-primary lg: md:btn-md sm:btn-sm w-full"
                    onClick={() =>
                      document.getElementById("my_modal_1").showModal()
                    }
                  >
                    view details
                  </button>
                </div>
              </div>
            </div>

            {/* MODAL --------------------------------------------*/}

            <dialog id="my_modal_1" className="modal w-full">
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
                      src={item.applicant_image}
                      alt="Movie"
                    />
                  </figure>
                </div>

                <h3 className="font-bold text-lg uppercase">{item.name}</h3>

                <div className="grid md:grid-cols-2 sm:grid-cols-1 ">
                  {/*  User Details */}
                  <div className="text-start ms-14 font-medium text-lg">
                    <p>
                      <span className="font-bold">Applicant Name :</span>{" "}
                      {item.Applicant_Name}
                    </p>
                    <p>
                      <span className="font-bold">Date of birth : </span>
                      {item.Dob}
                    </p>
                    <p>
                      <span className="font-bold">passport number : </span>
                      {item.passport_number}
                    </p>
                    <p>
                      <span className="font-bold">Address :</span>{" "}
                      {item.Address}
                    </p>
                    <p>
                      <span className="font-bold">State : </span>
                      {item.State}
                    </p>
                    <p>
                      <span className="font-bold">Country : </span>
                      {item.Country}
                    </p>
                    <p>
                      <span className="font-bold">Country To Apply : </span>
                      {item.Country_to_apply}
                    </p>
                    <p>
                      <span className="font-bold">Job Category : </span>
                      {item.Job_Category}
                    </p>
                  </div>

                  {/* Document */}
                    {/* Residence ID */}
                  <div className="mt-3 flex flex-col gap-4">
                    <div className="py-2 shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
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
                              <img src={item.Residence_ID} alt="residenceID" />
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
                          download={item.Applicant_Name + "-Residence_ID"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>


                    {/* Applicant Image */}
                    <div className="py-2 shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
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
                                src={item.applicant_image}
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
                          download={item.Applicant_Name + "-applicant_image"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>

                    <div className="py-2 shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Passport Front Side : </label>
                      <div>
                        <a href={item.Passport_front_side}>
                          <button className="btn btn-sm">view</button>
                        </a>
                        <a
                          href={resume}
                          download={
                            item.Applicant_Name + "-Passport_front_side"
                          }
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>

                    <div className="py-2 shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Passport Back Side : </label>
                      <div>
                        <a href={item.Passport_back_side}>
                          <button className="btn btn-sm">view</button>
                        </a>
                        <a
                          href={resume}
                          download={item.Applicant_Name + "-Passport_back_side"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>

                    <div className="py-2 shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Full Passport : </label>
                      <div>
                        <a href={item.Full_Passport}>
                          <button className="btn btn-sm">view</button>
                        </a>
                        <a
                          href={resume}
                          download={item.Applicant_Name + "-Full_Passport"}
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>

                    <div className="py-2 shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Experience Certificate : </label>
                      <div>
                        <a href={item.Experience_Certificate}>
                          <button className="btn btn-sm">view</button>
                        </a>
                        <a
                          href={resume}
                          download={
                            item.Applicant_Name + "Experience_Certificate"
                          }
                        >
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>

                    <div className="py-2 shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">PCC : </label>
                      <div>
                        <a href={item.PCC}>
                          <button className="btn btn-sm">view</button>
                        </a>
                        <a href={resume} download={item.Applicant_Name + "PCC"}>
                          {" "}
                          <button className="btn btn-sm">Download</button>
                        </a>
                      </div>
                    </div>

                    <div className="py-2 shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                      <label htmlFor="">Bank Statement : </label>
                      <div>
                        <a href={item.Bank_Statement}>
                          <button className="btn btn-sm">view</button>
                        </a>
                        <a
                          href={resume}
                          download={item.Applicant_Name + "Bank Statement"}
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
          </>
        ))}
      </div>
    </div>
  );
}

export default ShowData;
