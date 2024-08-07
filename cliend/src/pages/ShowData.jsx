import React, { useEffect, useState } from "react";
import ShowModal from "../Components/ShowModal";
import { getclient } from "../services/allApi";
import { base_url } from "../services/base_url";
import { BeatLoader } from "react-spinners";
import { Route, Routes, useNavigate } from "react-router-dom";
import Search from "../Components/Search";
import Table from "../Components/Table";

function ShowData() {
  const [modalShow, setModalShow] = useState(false);
  const [itemdata, setitemdata] = useState();
  const [clientdata, setClientdata] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [search, setsearch] = useState("");
  const [searchresult, setsearchresult] = useState([]);
  const Navigate = useNavigate();
  const [table, settable] = useState(false);

  useEffect(() => {
    async function getdata() {
      try {
        const result = await getclient();
        console.log(result.data);

        setClientdata(result.data);
      } catch (error) {
        Navigate("/", { replace: true });
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    }
    getdata();
  }, []);

  const searchhandler = (searchterm) => {
    setsearch(searchterm);
    if (searchterm !== "") {
      const newclientdata = clientdata.filter((client) => {
        return Object.values(client)[1]
          .toLowerCase()
          .includes(searchterm.toLowerCase());
      });
      console.log(newclientdata);
      setsearchresult(newclientdata);
    }
  };

  if (isLoading) {
    return (
      <div className=" h-screen flex items-center justify-center  -pt-10">
        <BeatLoader color="#484f4d" />
      </div>
    );
  }

  return (
    <>
      <Search searchhandler={searchhandler} />

      <h1 className="font-bold text-center text-lg sm:text-2xl sm:mt-5">
        Client Data
      </h1>
      <div className="flex justify-end me-8">
        {!table ? (
          <button
            className="btn btn-primary"
            onClick={() => {
              settable(true);
            }}
          >
            show table
          </button>
        ) : (
          <button
            className="btn btn-primary"
            onClick={() => {
              settable(false);
            }}
          >
            show card
          </button>
        )}
      </div>

      <h3 className="text-start sm:mt-5 text-sm sm:text-lg ms-2 font-semibold text-slate-500 mb-4">
        Total : {search.length !== 0 ? searchresult.length : clientdata.length}
      </h3>
      {table ? (
        <Table data={search.length !== 0 ? searchresult:clientdata}/>
      ) : (
        <>
          <div className="sm:m-10 m-2">
            <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2">
              {/* cards */}
              {search.length !== 0
                ? searchresult.map((item, index) => {
                    return (
                      <div
                        className="card card-side bg-base-100 shadow-xl max-h-48 min-h-28"
                        key={item.id}
                      >
                        <div className="card-body">
                          <h2 className="uppercase text-xs sm:text-lg">
                            {item.applicant_name}
                          </h2>
                          <h2 className=" text-xs sm:text-lg font-semibold">
                            {item.passport_number}
                          </h2>
                          <div className="card-actions justify-center w-full">
                            <button
                              className="btn bg-slate-800 text-white md:btn-md sm:btn-sm btn-xs w-full"
                              onClick={() => {
                                setitemdata(item);
                                setModalShow(true);
                              }}
                            >
                              view details
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })
                : clientdata.map((item, index) => {
                    return (
                      <div
                        className="card card-side bg-base-100 shadow-xl max-h-48 min-h-28"
                        key={item.id}
                      >
                        <div className="card-body">
                          <h2 className="uppercase text-xs sm:text-lg">
                            {item.applicant_name}
                          </h2>
                          <h2 className=" text-xs sm:text-lg font-semibold">
                            {item.passport_number}
                          </h2>
                          <div className="card-actions justify-center w-full">
                            <button
                              className="btn bg-slate-800 text-white md:btn-md sm:btn-sm btn-xs w-full"
                              onClick={() => {
                                setitemdata(item);
                                setModalShow(true);
                              }}
                            >
                              view details
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}

              {modalShow ? (
                <ShowModal
                  show={modalShow}
                  // onHide={() => setModalShow(false)}
                  Clientdata={itemdata}
                />
              ) : (
                ""
              )}
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default ShowData;
