import React, { useState } from "react";

function Search({ searchhandler }) {
  const [input, setinput] = useState("");

  return (
    <div className="flex justify-end pt-8 items-center gap-2 lg:me-8">
      <span>
        <input
          type="text"
          placeholder="Search here"
          className="input input-bordered w-full max-w-lg lg:w-80 "
          value={input}
          onChange={(e) => {
            setinput(e.target.value);
            searchhandler(e.target.value);
          }}
        />
      </span>
      <span>
        <button
          className="btn bg-slate-800 text-white"
          onClick={() => {
            setinput("");
            searchhandler("")
          }}
        >CLEAR
          {/* <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 26 26"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
            />
          </svg> */}
        </button>
      </span>
    </div>
  );
}

export default Search;
