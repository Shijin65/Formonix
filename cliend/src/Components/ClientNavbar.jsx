import React from "react";
import image from "../assets/europass-logo.png";
function ClientNavbar() {
  return (
    <div>
      {" "}
      {/* Topbar Start */}
      <div className="container-fluid bg-light pt-3 d-none d-lg-block">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 text-center text-lg-left mb-2 mb-lg-0">
              <div className="d-inline-flex align-items-center">
                <p>
                  <i className="fa fa-envelope mr-2"></i>info@example.com
                </p>
                <p className="text-body px-3">|</p>
                <p>
                  <i className="fa fa-phone-alt mr-2"></i>+012 345 6789
                </p>
              </div>
            </div>
            <div className="col-lg-6 text-center text-lg-right">
              <div className="d-inline-flex align-items-center">
                {/* Social media icons */}
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}
      {/* Navbar Start */}
      <div className="container-fluid position-relative nav-bar p-0">
        <div
          className="container-lg position-relative p-0 px-lg-3"
          style={{ zIndex: 9 }}
        >
          <nav className="navbar navbar-expand-lg bg-light navbar-light shadow-lg  py-lg-0 p-lg-2 ">
            <img
              src={image}
              alt=""
              className="h-32 me-3"
              style={{ height: "50px" }}
            />
            <a href="/" className="navbar-brand ">
              <h1 className="m-0 text-indigo-900 ">
                <span className="text-dark">EURO</span>PASS
              </h1>
            </a>
            {/* <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
        <span className="navbar-toggler-icon"></span>
      </button> */}
            <div className="navbar-end flex  ml-auto py-0">
              <a href="/" className="nav-item nav-link active font-semibold">
                HOME
              </a>
              <a href="form" className="nav-item nav-link font-semibold">
                FORM
              </a>
            </div>
          </nav>
        </div>
      </div>
      {/* Navbar End */}
    </div>
  );
}

export default ClientNavbar;
