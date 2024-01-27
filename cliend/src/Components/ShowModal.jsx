import { useEffect } from "react";
import { base_url } from "../services/base_url";
import { saveAs } from "file-saver";
import DownloadButton from "./Download";
function ShowModal(props) {
  useEffect(() => {
    document.getElementById("my_modal_1").showModal();
  }, [props.Clientdata]);

  const { Clientdata } = props;

  return (
    <div>
      <dialog id="my_modal_1" className="modal w-full">
        <div className="modal-box w-11/12 max-w-7xl text-center ">
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn btn-sm btn-circle btn-ghost absolute right-4 top-4"
                onClick={() => {
                  window.location.reload();
                }}
              >
                ✕
              </button>
            </form>
          </div>
          <h3 className="font-bold text-sm sm:text-lg uppercase">
            {Clientdata.applicant_name}
          </h3>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 mt-8 ">
            {/*  User Details */}
            <div className="text-start sm:ms-14 font-medium text-xs sm:text-lg gap-5 flex flex-col">
              <p>
                <span className="font-bold">Applicant Name :</span>
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
                <span className="font-bold">Contact: </span>
                {Clientdata.contact}
              </p>
              <p>
                <span className="font-bold"> Email : </span>
                {Clientdata.email}
              </p>
              <p>
                <span className="font-bold">Address :</span>
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

              {Clientdata.residence_id ?<div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 sm:text-md font-semibold ">
                <label className="sm:text-base text-sm">
                  Residence ID{" "}
                </label>
                <div>
                  <a href={`${Clientdata.residence_id}`} target="_blank">
                    <button className="btn sm:btn-sm  btn-xs">view</button>
                  </a>

                  <DownloadButton
                    fileUrl={Clientdata.residence_id}
                    fileName={`${Clientdata.applicant_name}-residence_id`}
                    fileType="application/pdf"
                  />
                </div>
              </div>:""}

              {/* Applicant Image */}
              <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                <label className="sm:text-base text-sm">
                  Applicant Image{" "}
                </label>
                <div>
                  <a href={`${Clientdata.applicant_image}`} target="_blank">
                    {" "}
                    <button className="btn sm:btn-sm  btn-xs">view</button>
                  </a>
                  <DownloadButton
                    fileUrl={Clientdata.applicant_image}
                    fileName={`${Clientdata.applicant_name}-applicant_image`}
                    fileType="application/pdf"
                  />
                </div>
              </div>

              {/* Passport Front Side */}
              <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                <label>Passport Front Side </label>
                <div>
                  <a href={`${Clientdata.passport_front}`} target="_blank">
                    <button className="btn sm:btn-sm  btn-xs">view</button>
                  </a>

                  <DownloadButton
                    fileUrl={Clientdata.passport_front}
                    fileName={`${Clientdata.applicant_name}-passport_front`}
                    fileType="application/pdf"
                  />
                </div>
              </div>

              {/* Passport Back Side */}
              <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                <label>Passport Back Side </label>
                <div>
                  <a href={`${Clientdata.passport_back}`} target="_blank">
                    <button className="btn sm:btn-sm  btn-xs">view</button>
                  </a>

                  <DownloadButton
                    fileUrl={Clientdata.passport_back}
                    fileName={`${Clientdata.applicant_name}-passport_back`}
                    fileType="application/pdf"
                  />
                </div>
              </div>

              {/* Full Passport */}
              <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                <label>Full Passport </label>
                <div>
                  <a href={`${Clientdata.passport_full}`} target="_blank">
                    <button className="btn sm:btn-sm  btn-xs">view</button>
                  </a>

                  <DownloadButton
                    fileUrl={Clientdata.passport_full}
                    fileName={`${Clientdata.applicant_name}-passport_full`}
                    fileType="application/pdf"
                  />
                </div>
              </div>

              {/* Experience Certificate */}
              {Clientdata.expirience_cerificate ? 
              <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                <label>Experience Certificate </label>
                <div>
                  <a
                    href={`${Clientdata.expirience_cerificate}`}
                    target="_blank"
                  >
                    <button className="btn sm:btn-sm  btn-xs">view</button>
                  </a>
                  <DownloadButton
                    fileUrl={Clientdata.expirience_cerificate}
                    fileName={`${Clientdata.applicant_name}-expirience_cerificate`}
                    fileType="application/pdf"
                  />
                </div>
              </div>:""}

              {/* PCC */}
              { Clientdata.pcc ? <div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                <label>PCC </label>
                <div>
                  <a href={`${Clientdata.pcc}`} target="_blank">
                    <button className="btn sm:btn-sm  btn-xs">view</button>
                  </a>
                  <DownloadButton
                    fileUrl={Clientdata.pcc}
                    fileName={`${Clientdata.applicant_name}-pcc`}
                    fileType="application/pdf"
                  />
                </div>
              </div>:""}

              {/* Bank Statement */}
              {Clientdata.bank_statement ?<div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                <label>Bank Statement </label>
                <div>
                  <button className="btn sm:btn-sm  btn-xs">
                    <a href={`${Clientdata.bank_statement}`} target="_blank">
                      view
                    </a>
                  </button>

                  <DownloadButton
                    fileUrl={Clientdata.bank_statement}
                    fileName={`${Clientdata.applicant_name}-bank_statement`}
                    fileType="application/pdf"
                  />
                </div>
              </div>:""}

              {/* resume */}
              {Clientdata.resume ?<div className="py-2 shadow-md hover:shadow-lg rounded-md flex justify-between px-4 text-md font-semibold">
                <label>resume </label>
                <div>
                  <a href={`${Clientdata.resume}`} target="_blank">
                    <button className="btn sm:btn-sm  btn-xs">view</button>
                  </a>
                  <DownloadButton
                    fileUrl={Clientdata.resume}
                    fileName={`${Clientdata.applicant_name}-resume`}
                    fileType="application/pdf"
                  />
                </div>
              </div>:""}
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button
                className="btn"
                onClick={() => {
                  window.location.reload();
                }}
              >
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </div>
  );
}
export default ShowModal;
