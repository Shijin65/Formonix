import React from "react";

function Table(props) {
  const data = props.data;
  const arr = [1, 1, 1, 1];
  console.log(data);
  return (
    <div>
      <div className="overflow-x-auto m-5">
        <table className="table table-xs ">
          <thead>
            <tr className="font-semibold text-black">
              <th>Name</th>
              <th>dob</th>
              <th>passport number</th>
              <th>Contact</th>
              <th>Email</th>
              <th>Address</th>
              <th>State </th>
              <th>Country</th>
              <th>Country To Apply</th>
              <th>Job Category</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr>
                <td>{item.applicant_name}</td>
                <td>{item.dob}</td>
                <td>{item.passport_number}</td>
                <td>{item.contact}</td>
                <td>{item.email}</td>
                <td>{item.address}</td>
                <td>{item.state}</td>
                <td>{item.country}</td>
                <td>{item.country_apply}</td>
                <td>{item.job_category}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Table;
