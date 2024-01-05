import React, { useState } from "react";
import Button from "react-bootstrap/esm/Button";
import ShowModal from "../Components/ShowModal"
function ShowData() {
  const [modalShow, setModalShow] = useState(false);
  const [itemdata,setitemdata]=useState([])
  console.log(itemdata)
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
        "https://i.pinimg.com/564x/47/23/c9/4723c9078b4beeaff46e3d4f5d585f5d.jpg",
      PCC: "https://i.pinimg.com/564x/4a/93/95/4a9395b25981a1b623aa08dfb6cd866f.jpg",
      Bank_Statement:
        "https://i.pinimg.com/236x/57/19/25/571925c2c855b7646956e3777f7d0619.jpg",
      resume: "",
    },
    {
      id: "2",
      img: "",
      
      number: "91-xxxxxxxxx",
      Applicant_Name: "hafish",
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
      
      number: "91-xxxxxxxxx",
      Applicant_Name: "amith",
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
      number: "91-xxxxxxxxx",
      Applicant_Name: "ajin",
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
      Applicant_Name: "badhu",
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
                <h2 className="card-title uppercase">{item.Applicant_Name}</h2>
                <h2 className="card-title">{item.number}</h2>
                <div className="card-actions justify-center w-full">
                  <button
                    className="btn btn-primary lg: md:btn-md sm:btn-sm w-full"
                    onClick={() => {
                      setModalShow(true)
                      setitemdata(item)
                    }
                    }
                  >
                    view details
                  </button>



                </div>
              </div>
            </div>

          </>
        ))}
        {modalShow ? <ShowModal
              show={modalShow}
              // onHide={() => setModalShow(false)}
              data={itemdata}
            />:""}

      </div>
    </div>
  );
}

export default ShowData;
