import React, { useState } from "react";
import { addClients } from "../services/allApi";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import ClientNavbar from "../Components/ClientNavbar";

function FormPage() {
  const countries = [
    { name: "UAE", job: ["Electrician", "plumber", "welder", "Steel fabrication", "Auto mechanic", "Denter", "Spray painter"] },
    { name: "Malaysia", job: ["Restuarant helper"] },
    { name: "Croatia", job: ["Factory work", "Helpers", "Packing"] },
    { name: "Poland", job: ["Warehouse work", "Construction work", "Food delivery", "salesman", "taxi driver"] },
    { name: "HUNGARY ", job: ["Factory work", "Helpers", "Packing"] },
    { name: "Malta", job: ["Office work for ladies", "Taxi drivers", "salesman", "delivery boy"] },
    // Add more countries and their job as needed
  ];
  const Navigate = useNavigate();
  const [loading, setloading] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [job, setStates] = useState([]);
  const [clientdetails, setClientdetails] = useState({});
  const [errorMessages, setErrorMessages] = useState({});

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files[0];
    const maxSizeInBytes = 2 * 1024 * 1024; // 2 MB size limit

    if (file && file.size > maxSizeInBytes) {
      setErrorMessages(prevErrors => ({
        ...prevErrors,
        [fieldName]: `${fieldName.replace('_', ' ')} file size exceeds the 2 MB limit.`,
      }));
      setClientdetails(prevDetails => ({
        ...prevDetails,
        [fieldName]: null,
      }));
    } else {
      setErrorMessages(prevErrors => ({
        ...prevErrors,
        [fieldName]: '',
      }));
      setClientdetails(prevDetails => ({
        ...prevDetails,
        [fieldName]: file,
      }));
    }
  };
  console.log(clientdetails);
  const handleCountryChange = (e) => {
    setClientdetails({
      ...clientdetails,
      country_apply: e.target.value,
    });
    const countryName = e.target.value;
    const selectedCountry = countries.find(
      (country) => country.name === countryName
    );
    setSelectedCountry(countryName);
    setStates(selectedCountry ? selectedCountry.job : []);
  };

  const isSubmitDisabled = () => {
    // Array of file fields to check
    const fileFields = ['residence_id', 'applicant_image', 'passport_front', 'passport_back', 'passport_full', 'expirience_cerificate', 'pcc', 'bank_statement', 'resume'];

    return fileFields.some(field => clientdetails[field] === null);
  };
  const handleadd = async (e) => {
    e.preventDefault();

    const {
      applicant_name,
      dob,
      contact,
      email,
      address,
      state,
      country,
      country_apply,
      passport_number,
      job_category,
      residence_id,
      applicant_image,
      passport_front,
      passport_back,
      passport_full,
      expirience_cerificate,
      pcc,
      bank_statement,
      resume,
    } = clientdetails;

    if (
      !applicant_name ||
      !dob ||
      !contact ||
      !email ||
      !address ||
      !passport_number ||
      !country_apply ||
      !job_category ||
      !applicant_image ||
      !passport_front ||
      !passport_back ||
      !passport_full
    ) {
      alert("please fill the form");
    } else {
      setloading(true);
      const reqbody = new FormData();

      // Append form values to FormData
      reqbody.append("applicant_name", applicant_name);
      reqbody.append("dob", dob);
      reqbody.append("contact", contact);
      reqbody.append("email", email);
      reqbody.append("address", address);
      reqbody.append("state", state);
      reqbody.append("country", country);
      reqbody.append("country_apply", country_apply);
      reqbody.append("passport_number", passport_number);
      reqbody.append("job_category", job_category);
      reqbody.append("residence_id", residence_id);
      reqbody.append("applicant_image", applicant_image);
      reqbody.append("passport_front", passport_front);
      reqbody.append("passport_back", passport_back);
      reqbody.append("passport_full", passport_full);
      reqbody.append("expirience_cerificate", expirience_cerificate);
      reqbody.append("pcc", pcc);
      reqbody.append("bank_statement", bank_statement);
      reqbody.append("resume", resume);
      const reqHeader = {
        "Content-Type": "multipart/form-data",

      }

      const result = await addClients(reqbody, reqHeader);
      console.log(result);

      if (result.status === 200) {
        setloading(false);
        swal({
          title: "successfully uploaded",
          text: "your details haS been successfully uploaded",
          icon: "success",
          button: "ok",
        });
        Navigate("/", { replace: true });
      } else if (!result) {
        alert("Data Not Send");
      } else {
        alert("Some Thing Went Wrong");
      }
    }
  };

  return (
    <>
      <ClientNavbar />
      <div
        className="mt-5 my-8  text-center"
        style={{ opacity: loading ? "50%" : "" }}
      >
        <h1 className="text-center text-2xl font-bold ">REGISTER</h1>
        <form className="mt-5 sm:mx-5  lg:ms-10" onSubmit={handleadd}>
          <div className="space-y-12 ">
            <div className=" border-gray-900/10 pb-12 ">
              <h2 className="text-base font-semibold leading-7 text-gray-900">
                Personal Information
              </h2>

              <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-4 content-center border-b-2 pb-8  contents-center justify-center ">
                {/* applicant name */}

                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="first-name"
                    className="block text-sm  font-semibold leading-6 text-gray-900"
                  >
                    Applicant Name <span className="opacity-50">(As per the Passport)</span>
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      type="text"
                      name="applicant-name"
                      id="applicant-name"
                      autoComplete="given-name"
                      className="input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          applicant_name: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Date of birth */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Date of birth
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      type="date"
                      name="dob"
                      id="dob"
                      autoComplete="given-name"
                      className="input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          dob: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* phone number */}

                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="contact"
                    className="block text-sm  font-semibold leading-6 text-gray-900"
                  >
                    Contact Number
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      type="text"
                      name="contact"
                      id="contact"
                      autoComplete="given-name"
                      className="input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          contact: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* email */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="email"
                    className="block text-sm  font-semibold leading-6 text-gray-900"
                  >
                    Email
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      type="text"
                      name="email"
                      id="email"
                      autoComplete="given-name"
                      className="input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          email: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* passport_number*/}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    passport number
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      type="text"
                      name="passport_number"
                      id="passport_number"
                      autoComplete="given-name"
                      className="input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          passport_number: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Address */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Address
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      type="text"
                      name="Address"
                      id="Address"
                      className="input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          address: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Country */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country
                  </label>
                  <div className="mt-2">
                    <select
                      id="country"
                      name="country"
                      autoComplete="country-name"
                      className=" input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          country: e.target.value,
                        })
                      }
                    >
                      <option value="">Select</option>
                      <option>United job</option>
                      <option>Canada</option>
                      <option>Mexico</option>
                      <option>India</option>
                    </select>
                  </div>
                </div>
                {/* State */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    State
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      type="text"
                      name="first-name"
                      id="first-name"
                      autoComplete="given-name"
                      className="input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          state: e.target.value,
                        })
                      }
                    />
                  </div>
                </div>

                {/* Country To Apply */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Country To Apply
                  </label>
                  <div className="mt-2">
                    <select
                      id="countrytoapply"
                      name="countrytoapply"
                      autoComplete="countrytoapply"
                      className=" input input-bordered w-full max-w-md "
                      onChange={handleCountryChange}
                    >
                      {selectedCountry ? "" : <option value="">Select a country</option>}
                      {countries.map((country) => (
                        <option key={country.name} value={country.name}>
                          {country.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Job Category */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="first-name"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Job Category
                  </label>
                  <div className="mt-2">
                    <select
                      id="Category"
                      name="Category"
                      autoComplete="Category"
                      className=" input input-bordered w-full max-w-md "
                      onChange={(e) =>
                        setClientdetails({
                          ...clientdetails,
                          job_category: e.target.value,
                        })
                      }
                    >
                      <option value="">{selectedCountry ? "" : "select country first"}</option>
                      {job.map((state) => (
                        <option key={state} value={state}>
                          {state}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>

              <h1 className=" text-base font-semibold leading-7 text-gray-900">
                Document Section
              </h1>
              <p className=" text-base font-semibold leading-7 text-gray-600" >(All documents should be less than 2 mb <u>PDF</u> files)</p>

              <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-4 content-center">
                {/* residence_id
                 */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="residence_id"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Residence ID
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="residence_id"
                      id="residence_id"
                      autoComplete="residence_id"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'residence_id')}
                    />
                    {errorMessages.residence_id && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.residence_id}
                      </p>
                    )}
                  </div>
                </div>


                {/* Applicant Image */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="applicant_image"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Applicant Image
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="applicant_image"
                      id="applicant_image"
                      autoComplete="applicant_image"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'applicant_image')}
                    />
                    {errorMessages.applicant_image && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.applicant_image}
                      </p>
                    )}
                  </div>
                </div>


                {/* Passport front side */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="passport_front"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Passport Front Side
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="passport_front"
                      id="passport_front"
                      autoComplete="passport_front"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'passport_front')}
                    />
                    {errorMessages.passport_front && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.passport_front}
                      </p>
                    )}
                  </div>
                </div>


                {/* Passport back side */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="passport_back"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Passport Back Side
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="passport_back"
                      id="passport_back"
                      autoComplete="passport_back"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'passport_back')}
                    />
                    {errorMessages.passport_back && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.passport_back}
                      </p>
                    )}
                  </div>
                </div>


                {/* passport_full */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="passport_full"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Full Passport
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="passport_full"
                      id="passport_full"
                      autoComplete="passport_full"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'passport_full')}
                    />
                    {errorMessages.passport_full && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.passport_full}
                      </p>
                    )}
                  </div>
                </div>


                {/* expirience_cerificate */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="expirience_cerificate"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Experience Certificate
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="expirience_cerificate"
                      id="expirience_cerificate"
                      autoComplete="expirience_cerificate"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'expirience_cerificate')}
                    />
                    {errorMessages.expirience_cerificate && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.expirience_cerificate}
                      </p>
                    )}
                  </div>
                </div>


                {/* pcc */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="pcc"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    PCC
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="pcc"
                      id="pcc"
                      autoComplete="pcc"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'pcc')}
                    />
                    {errorMessages.pcc && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.pcc}
                      </p>
                    )}
                  </div>
                </div>


                {/* Bank_Statement */}
                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="bank_statement"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Bank Statement
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="bank_statement"
                      id="bank_statement"
                      autoComplete="bank_statement"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'bank_statement')}
                    />
                    {errorMessages.bank_statement && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.bank_statement}
                      </p>
                    )}
                  </div>
                </div>


                {/* resume */}

                <div className="text-left sm:w-96 md:w-auto">
                  <label
                    htmlFor="resume"
                    className="block text-sm font-medium leading-6 text-gray-900"
                  >
                    Resume
                  </label>
                  <div className="mt-2">
                    <input
                      placeholder="Type here"
                      name="resume"
                      id="resume"
                      autoComplete="resume"
                      type="file"
                      className="file-input w-full max-w-xs"
                      onChange={(e) => handleFileChange(e, 'resume')}
                    />
                    {errorMessages.resume && (
                      <p className="mt-2 text-sm text-red-600">
                        {errorMessages.resume}
                      </p>
                    )}
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-6 flex items-center justify-end gap-x-6">
              <button
                type="submit"
                className="btn glass bg-green-600"
                disabled={isSubmitDisabled()}
              >
                Submit
              </button>
              <button
                type="button"
                className="btn glass text-sm bg-red-500"
                onClick={() => {
                  Navigate("/", { replace: true });
                }}
              >
                Cancel
              </button>
            </div>
          </div>
        </form>
      </div>

      {loading ? (
        <dialog open className="modal shadow-2xl">
          <div className="modal-box text-center">
            <h3 className="font-bold text-lg">Processing</h3>
            <span className="loading loading-dots loading-lg mt-4"></span>
            <p>please wait, your details are getting uploaded</p>
          </div>
        </dialog>
      ) : (
        ""
      )}
    </>
  );
}

export default FormPage;
