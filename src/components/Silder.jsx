import React from "react";
import imagen1 from "../Img/Banner/ofertaAMPLIADA.png";

const Silder = () => {
  return (
    <>
      <div className="banner py-4 mt-5 ">
        <div
          id="carouselExampleCaptions"
          className=" container   carousel slide  "
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
          </div>
          <div className="carousel-inner h-50">
            <div className="carousel-item active h-50">
              <img src={imagen1} className="d-block w-100 " alt="banner" />
              <div className="carousel-caption d-none d-md-block">
                {/* <h5>PRIMER SLIDER</h5>
              <p></p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img src={imagen1} className="d-block w-100" alt="..." />
              <div className="carousel-caption d-none d-md-block">
                {/*   <h5>Segundo SLIDER</h5>
              <p></p> */}
              </div>
            </div>
            <div className="carousel-item">
              <img src={imagen1} className="d-block w-100" alt="" />
              <div className="carousel-caption d-none d-md-block">
                {/*  <h5>TERCER SLIDER</h5>
              <p></p> */}
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </>
  );
};

export default Silder;
