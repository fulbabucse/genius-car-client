import React from "react";
import "./Banner.css";

const Banner = () => {
  return (
    <div>
      {/* <div
        id="carouselExampleCrossfade"
        className="carousel slide carousel-fade relative"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCrossfade"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/041.webp"
              className="block w-full"
              alt="Wild Landscape"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/042.webp"
              className="block w-full"
              alt="Camera"
            />
          </div>
          <div className="carousel-item float-left w-full">
            <img
              src="https://mdbcdn.b-cdn.net/img/new/slides/043.webp"
              className="block w-full"
              alt="Exotic Fruits"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCrossfade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div> */}

      <div>
        <div
          id="carouselExampleCaptions"
          className="carousel slide carousel-fade relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
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

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>

            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="4"
              aria-label="Slide 5"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide-to="5"
              aria-label="Slide 6"
            ></button>
          </div>
          <div className="carousel-inner relative w-full overflow-hidden">
            <div className="carousel-item active relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://i.ibb.co/bPNPw7v/5.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>
              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Affordable Price For Car Servicing
                </h5>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-secondary btn-outline rounded-sm normal-case tracking-wider text-lg">
                    Latest Project
                  </button>
                  <button className="btn btn-secondary rounded-sm normal-case tracking-wider text-lg">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://i.ibb.co/9nfbYzY/3.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Affordable Price For Car Servicing
                </h5>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-secondary btn-outline rounded-sm normal-case tracking-wider text-lg">
                    Latest Project
                  </button>
                  <button className="btn btn-secondary rounded-sm normal-case tracking-wider text-lg">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://i.ibb.co/99x8mYR/2.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Affordable Price For Car Servicing
                </h5>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-secondary btn-outline rounded-sm normal-case tracking-wider text-lg">
                    Latest Project
                  </button>
                  <button className="btn btn-secondary rounded-sm normal-case tracking-wider text-lg">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://i.ibb.co/mC1Hv3z/1.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Affordable Price For Car Servicing
                </h5>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-secondary btn-outline rounded-sm normal-case tracking-wider text-lg">
                    Latest Project
                  </button>
                  <button className="btn btn-secondary rounded-sm normal-case tracking-wider text-lg">
                    Discover More
                  </button>
                </div>
              </div>
            </div>

            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://i.ibb.co/1vy4K6Z/4.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Affordable Price For Car Servicing
                </h5>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-secondary btn-outline rounded-sm normal-case tracking-wider text-lg">
                    Latest Project
                  </button>
                  <button className="btn btn-secondary rounded-sm normal-case tracking-wider text-lg">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <div className="carousel-images">
                <img
                  src="https://i.ibb.co/bHp0QSw/6.jpg"
                  className="carousel-img"
                  alt="..."
                />
              </div>

              <div className="carousel-caption hidden md:block absolute lg:top-40 space-y-3 w-full lg:w-2/4">
                <h5 className="text-xl lg:text-6xl font-bold">
                  Affordable Price For Car Servicing
                </h5>
                <p className="text-lg">
                  There are many variations of passages of available, but the
                  majority have suffered alteration in some form
                </p>
                <div className="flex gap-3">
                  <button className="btn btn-secondary btn-outline rounded-sm normal-case tracking-wider text-lg">
                    Latest Project
                  </button>
                  <button className="btn btn-secondary rounded-sm normal-case tracking-wider text-lg">
                    Discover More
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
