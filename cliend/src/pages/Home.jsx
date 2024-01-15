import React from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";
import ClientNavbar from "../Components/ClientNavbar";
import image from "../assets/carousel-3.jpg"
function Home() {
  const Navigate = useNavigate();

  return (
    <>
      <ClientNavbar />

      {/* Carousel Start */}
      <div className="container-fluid p-0">
        <div
          id="header-carousel"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            
            <div className="carousel-item">
              <img
                className="w-screen min-h-96 max-h-screen image-full"
                src={image}
                // src="https://images.pexels.com/photos/1004584/pexels-photo-1004584.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Image"
              />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: "900px" }}>
                  <h4 className="text-white text-uppercase mb-md-3">
                    Study Abroad
                  </h4>
                  <h1 className="display-3 text-white mb-md-4">
                    Discover Amazing Places With Us
                  </h1>
                  <a
                    href=""
                    className="btn btn-primary py-md-3 px-md-5 mt-2"
                    onClick={() => {
                      Navigate("/form", { replace: true });
                    }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
      {/* Carousel End */}

      {/* Footer Start */}
      <div className="container-fluid bg-dark text-white-50 pt-5 px-sm-3 px-lg-5 " style={{fontFamily:"-moz-initial"}}>
        <div className="row ">
          <div className="col-lg-6 col-md-12 mb-3">
            <a href="/" className="navbar-brand">
              <h1 className="m-0 text-indigo-900">
                <span className="text-white">EURO</span>PASS
              </h1>
            </a>
            <p style={{fontFamily:"-moz-initial"}}>
              Sed ipsum clita tempor ipsum ipsum amet sit ipsum lorem amet
              labore rebum lorem ipsum dolor. No sed vero lorem dolor dolor
            </p>
            <h6
              className="text-white text-uppercase mt-4 mb-3"
              style={{ letterSpacing: "5px" }}
            >
              Follow Us
            </h6>
            <div className="d-flex justify-content-start">
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a className="btn btn-outline-primary btn-square mr-2" href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a className="btn btn-outline-primary btn-square" href="#">
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>

          <div className="col-lg-3 col-md-6 mb-5">
            <h5
              className="text-white text-uppercase mb-4"
              style={{ letterSpacing: "5px" }}
            >
              Contact Us
            </h5>
            <p style={{fontFamily:"-moz-initial"}}>
              <i className="fa fa-map-marker-alt mr-2" ></i>123 Street, New York,
              USA
            </p>
            <p style={{fontFamily:"-moz-initial"}}>
              <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
            </p>
            <p style={{fontFamily:"-moz-initial"}}> 
              <i className="fa fa-envelope mr-2"></i>info@example.com
            </p>
          </div>
        </div>
      </div>
      {/* Footer End */}
    </>
  );
}

export default Home;
