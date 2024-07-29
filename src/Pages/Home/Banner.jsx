import React from "react";
import banner1 from "../../assets/images/banner/1.jpg";
import banner2 from "../../assets/images/banner/2.jpg";
import banner3 from "../../assets/images/banner/3.jpg";
import banner4 from "../../assets/images/banner/4.jpg";
import banner5 from "../../assets/images/banner/5.jpg";
import { IoMdArrowBack } from "react-icons/io";
import { IoMdArrowForward } from "react-icons/io";

const Banner = () => {
  return (
    <div className="carousel w-full">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={banner1} className="w-full rounded-lg" />

        <div className="absolute left-0 top-0 bottom-0 flex  gap-2 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
          <div className="w-1/2 pl-24 pt-24 space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="btn bg-transparent text-white hover:bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn bg-transparent text-white hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
          </div>
        </div>

        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide4"
            className="btn btn-circle text-xl bg-[#FFFFFF33] hover:bg-[#FF3811] text-white"
          >
            <IoMdArrowBack />
          </a>
          <a
            href="#slide2"
            className="btn btn-circle text-xl bg-[#FFFFFF33] hover:bg-[#FF3811] text-white"
          >
            <IoMdArrowForward />
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={banner2} className="w-full rounded-lg" />

        <div className="absolute left-0 top-0 bottom-0 flex  gap-2 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
          <div className="w-1/2 pl-24 pt-24 space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="btn bg-transparent text-white hover:bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn bg-transparent text-white hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide1"
            className="btn btn-circle text-xl bg-[#FFFFFF33] hover:bg-[#FF3811] text-white"
          >
            <IoMdArrowBack />
          </a>
          <a
            href="#slide3"
            className="btn btn-circle text-xl bg-[#FFFFFF33] hover:bg-[#FF3811] text-white"
          >
            <IoMdArrowForward />
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={banner3} className="w-full rounded-lg" />
        <div className="absolute left-0 top-0 bottom-0 flex  gap-2 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
          <div className="w-1/2 pl-24 pt-24 space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="btn bg-transparent text-white hover:bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn bg-transparent text-white hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide2"
            className="btn btn-circle text-xl bg-[#FFFFFF33] hover:bg-[#FF3811] text-white"
          >
            <IoMdArrowBack />
          </a>
          <a
            href="#slide4"
            className="btn btn-circle text-xl bg-[#FFFFFF33] hover:bg-[#FF3811] text-white"
          >
            <IoMdArrowForward />
          </a>
        </div>
      </div>
      <div id="slide4" className="carousel-item relative w-full">
        <img src={banner4} className="w-full rounded-lg" />
        <div className="absolute left-0 top-0 bottom-0 flex  gap-2 text-white bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] rounded-lg">
          <div className="w-1/2 pl-24 pt-24 space-y-7">
            <h1 className="text-6xl font-bold">
              Affordable Price For Car Servicing
            </h1>
            <p className="text-lg">
              There are many variations of passages of available, but the
              majority have suffered alteration in some form
            </p>
            <div className="space-x-5">
              <button className="btn bg-transparent text-white hover:bg-[#FF3811]">
                Discover More
              </button>
              <button className="btn bg-transparent text-white hover:bg-[#FF3811]">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute left-5 right-5 bottom-0 flex -translate-y-1/2 transform justify-end gap-5">
          <a
            href="#slide3"
            className="btn btn-circle text-xl bg-[#FFFFFF33] hover:bg-[#FF3811] text-white"
          >
            <IoMdArrowBack />
          </a>
          <a
            href="#slide1"
            className="btn btn-circle text-xl bg-[#FFFFFF33] hover:bg-[#FF3811] text-white"
          >
            <IoMdArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
