import React from 'react'

function FormPage() {
  return (
    <div className="md:mx-14 my-8 mx-8 text-center">
    <h1 className="text-center text-2xl font-bold ">FORM</h1>
    <form className="mt-5 mx-5">
      <div className="space-y-12 ">
        <div className=" border-gray-900/10 pb-12">
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Personal Information
          </h2>

          <div className="mt-10 grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-4 content-center border-b-2 pb-8">
            {/* applicant name */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm  font-semibold leading-6 text-gray-900"
              >
                Applicant Name
              </label>
              <div className="mt-2">
                <input
                  placeholder="Type here"
                  type="text"
                  name="applicant-name"
                  id="applicant-name"
                  autoComplete="given-name"
                  className="input input-bordered w-full max-w-md "
                  required
                />
              </div>
            </div>

            {/* Date of birth */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Date of birth
              </label>
              <div className="mt-2">
                <input
                  required
                  placeholder="Type here"
                  type="date"
                  name="dob"
                  id="dob"
                  autoComplete="given-name"
                  className="input input-bordered w-full max-w-md "
                />
              </div>
            </div>

            {/* passport_number*/}
            <div className="text-left">
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
                />
              </div>
            </div>

            {/* Address */}
            <div className="text-left">
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
                  required
                  className="input input-bordered w-full max-w-md "
                />
              </div>
            </div>

            {/* State */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                State
              </label>
              <div className="mt-2">
                <input
                  required
                  placeholder="Type here"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="input input-bordered w-full max-w-md "
                />
              </div>
            </div>

            {/* Country */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country
              </label>
              <div className="mt-2">
                <select
                  required
                  id="country"
                  name="country"
                  autoComplete="country-name"
                  className=" input input-bordered w-full max-w-md "
                >
                  <option value="">Select</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            {/* Country To Apply */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Country To Apply
              </label>
              <div className="mt-2">
                <select
                  required
                  id="countrytoapply"
                  name="countrytoapply"
                  autoComplete="countrytoapply"
                  className=" input input-bordered w-full max-w-md "
                >
                  <option value="">Select</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                </select>
              </div>
            </div>

            {/* Job Category */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Job Category
              </label>
              <div className="mt-2">
                <select
                  required
                  id="Category"
                  name="Category"
                  autoComplete="Category"
                  className=" input input-bordered w-full max-w-md "
                >
                  <option value="">Select</option>
                  <option>Software tester</option>
                  <option>Developer</option>
                  <option>Electriction</option>
                </select>
              </div>
            </div>
          </div>

          <h1 className="my-5 text-base font-semibold leading-7 text-gray-900">
            Document Section
          </h1>

          <div className=" grid lg:grid-cols-3 md:grid-cols-2 gap-x-5 gap-y-4 content-center">
            {/* Residence_ID
             */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Residence ID
              </label>
              <div className="mt-2">
                <input
                  placeholder="Type here"
                  
                  name="Residence_id"
                  id="Residence_id"
                  autoComplete="Residence_id"
                  type="file"
                  className="file-input w-full max-w-xs "
                />
              </div>
            </div>

            {/* Applicant Image */}
            <div className="text-left">
              <label
                htmlFor="Applicant_Image"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Applicant Image
              </label>
              <div className="mt-2">
                <input
                  placeholder="Type here"
                  required
                  name="Applicant_Image"
                  id="Applicant_Image"
                  autoComplete="Applicant_Image"
                  type="file"
                  className="file-input w-full max-w-xs "
                />
              </div>
            </div>

            {/* Passport front side */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Passport front side
              </label>
              <div className="mt-2">
                <input
                  placeholder="Type here"
                  required
                  name="Passport_front_side"
                  id="Passport_front_side"
                  autoComplete="Passport_front_side"
                  type="file"
                  className="file-input w-full max-w-xs "
                />
              </div>
            </div>

            {/* Passport back side */}
            <div className="text-left">
              <label
                htmlFor="Passport back side"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Passport Back side
              </label>
              <div className="mt-2">
                <input
                  placeholder="Type here"
                  required
                  name="Passport_back_side"
                  id="Passport_back_side"
                  autoComplete="Passport_back_side"
                  type="file"
                  className="file-input w-full max-w-xs "
                />
              </div>
            </div>

            {/* Full_Passport */}
            <div className="text-left">
              <label
                htmlFor="Full_Passport"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Full Passport
              </label>
              <div className="mt-2">
                <input
                  placeholder="Type here"
                  required
                  name="Full_Passport"
                  id="Full_Passport"
                  autoComplete="Full_Passport"
                  type="file"
                  className="file-input w-full max-w-xs "
                />
              </div>
            </div>

            {/* Experience_Certificate */}
            <div className="text-left">
              <label
                htmlFor="first-name"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Experience Certificate
              </label>
              <div className="mt-2">
                <input
                  placeholder="Type here"
                  
                  name="Experience_Certificate"
                  id="Experience_Certificate"
                  autoComplete="Experience_Certificate"
                  type="file"
                  className="file-input w-full max-w-xs "
                />
              </div>
            </div>

            {/* PCC */}
            <div className="text-left">
              <label
                htmlFor="PCC"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                PCC
              </label>
              <div className="mt-2">
                <input
                  
                  placeholder="Type here"
                  name="PCC"
                  id="PCC"
                  autoComplete="PCC"
                  type="file"
                  className="file-input w-full max-w-xs "
                />
              </div>
            </div>

            {/* Bank_Statement */}
            <div className="text-left">
              <label
                htmlFor="Bank_Statement"
                className="block text-sm font-medium leading-6 text-gray-900"
              >
                Bank Statement
              </label>
              <div className="mt-2">
                <input
                  placeholder="Type here"
                  name="Bank_Statement"
                  id="Bank_Statement"
                  autoComplete="Bank_Statement"
                  type="file"
                  className="file-input w-full max-w-xs "
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-end gap-x-6">
          <button type="submit" className="btn glass bg-green-600">
            Submit
          </button>
          <button type="button" className="btn glass text-sm bg-red-500">
            Cancel
          </button>
        </div>
      </div>
    </form>
  </div>
  )
}

export default FormPage