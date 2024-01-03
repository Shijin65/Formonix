import React from "react";

function ShowData() {
  const data = [
    {
      id: "1",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User1",
      number: "91-xxxxxxxxx",
      Applicant_Name:"shijin",
      Dob:"12/25/2002",
      passport_number:"331116546",
      Address:"house(h),city,000000",
      State:"palakkad",
      Country:"india",
      Country_to_apply:"italy",
      Job_Category:"developer"
    },
    {
      id: "2",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User2",
      number: "91-xxxxxxxxx",
      Applicant_Name:"shijin",
      Dob:"12/25/2002",
      passport_number:"331116546",
      Address:"house(h),city,000000",
      State:"palakkad",
      Country:"india",
      Country_to_apply:"italy",
      Job_Category:"developer"
    },
    {
      id: "3",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User3",
      number: "91-xxxxxxxxx",
      Applicant_Name:"shijin",
      Dob:"12/25/2002",
      passport_number:"331116546",
      Address:"house(h),city,000000",
      State:"palakkad",
      Country:"india",
      Country_to_apply:"italy",
      Job_Category:"developer"
    },
    {
      id: "4",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User4",
      number: "91-xxxxxxxxx",
      Applicant_Name:"shijin",
      Dob:"12/25/2002",
      passport_number:"331116546",
      Address:"house(h),city,000000",
      State:"palakkad",
      Country:"india",
      Country_to_apply:"italy",
      Job_Category:"developer"
    },
    {
      id: "5",
      img: "https://i.pinimg.com/736x/94/c7/36/94c736e6f72560a412ba42f2faf38b5f.jpg",
      name: "User5",
      number: "91-xxxxxxxxx",
      Applicant_Name:"shijin",
      Dob:"12/25/2002",
      passport_number:"331116546",
      Address:"house(h),city,000000",
      State:"palakkad",
      Country:"india",
      Country_to_apply:"italy",
      Job_Category:"developer"
    }
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
                <img className="max-h-32" src={item.img} alt="Movie" />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
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
                    <img className="max-h-52 " src={item.img} alt="Movie" />
                  </figure>
                </div>

                <h3 className="font-bold text-lg uppercase">{item.name}</h3>

                    <div className="grid grid-cols-2 ">

                      {/*  User Details */}
                      <div className="text-start ms-14 font-medium text-lg">
                        <p><span className="font-bold">Applicant Name :</span> {item.Applicant_Name}</p>
                        <p><span className="font-bold">Date of birth : </span>{item.Dob}</p>
                        <p><span className="font-bold">passport number : </span>{item.passport_number}</p>
                        <p><span className="font-bold">Address :</span> {item.Address}</p>
                        <p><span className="font-bold">State : </span>{item.State}</p>
                        <p><span className="font-bold">Country : </span>{item.Country}</p>
                        <p><span className="font-bold">Country To Apply : </span>{item.Country_to_apply}</p>
                        <p><span className="font-bold">Job Category : </span>{item.Job_Category}</p>
                      </div>

                      {/* Document */}
                      <div>

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
