import img1 from "../../../assets/images/banner/1.jpg";
import img2 from "../../../assets/images/banner/2.jpg";
import img3 from "../../../assets/images/banner/3.jpg";
import img4 from "../../../assets/images/banner/4.jpg";
import img5 from "../../../assets/images/banner/5.jpg";
const Banner = () => {
  return (
    <div className="carousel w-full h-[600px] mt-3">
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img1} className="w-full " />
        <div className="absolute top-1/2  flex -translate-y-1/2 transform text-white  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full">
          <div className="space-y-4 md:ml-20 ml-10">
            <h2 className="text-5xl font-bold mt-[200px]">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-warning mr-4 ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-5  flex -translate-y-1/2 transform ">
          <a
            href="#slide6"
            className="btn btn-outline btn-warning btn-circle mr-2"
          >
            ❮
          </a>
          <a href="#slide2" className="btn btn-outline btn-warning btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide2" className="carousel-item relative w-full">
        <img src={img2} className="w-full " />
        <div className="absolute top-1/2  flex -translate-y-1/2 transform text-white  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full">
          <div className="space-y-4 md:ml-20 ml-10">
            <h2 className="text-5xl font-bold mt-[200px]">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-warning mr-4 ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-5  flex -translate-y-1/2 transform ">
          <a
            href="#slide4"
            className="btn btn-outline btn-warning btn-circle mr-2"
          >
            ❮
          </a>
          <a href="#slide1" className="btn btn-outline btn-warning btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide3" className="carousel-item relative w-full">
        <img src={img3} className="w-full " />
        <div className="absolute top-1/2  flex -translate-y-1/2 transform text-white  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full">
          <div className="space-y-4 md:ml-20 ml-10">
            <h2 className="text-5xl font-bold mt-[200px]">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-warning mr-4 ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-5  flex -translate-y-1/2 transform ">
          <a
            href="#slide2"
            className="btn btn-outline btn-warning btn-circle mr-2"
          >
            ❮
          </a>
          <a href="#slide4" className="btn btn-outline btn-warning btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img4} className="w-full " />
        <div className="absolute top-1/2  flex -translate-y-1/2 transform text-white  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full">
          <div className="space-y-4 md:ml-20 ml-10">
            <h2 className="text-5xl font-bold mt-[200px]">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-warning mr-4 ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-5  flex -translate-y-1/2 transform ">
          <a
            href="#slide3"
            className="btn btn-outline btn-warning btn-circle mr-2"
          >
            ❮
          </a>
          <a href="#slide5" className="btn btn-outline btn-warning btn-circle">
            ❯
          </a>
        </div>
      </div>
      <div id="slide1" className="carousel-item relative w-full">
        <img src={img5} className="w-full " />
        <div className="absolute top-1/2  flex -translate-y-1/2 transform text-white  bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)] w-full h-full">
          <div className="space-y-4 md:ml-20 ml-10">
            <h2 className="text-5xl font-bold mt-[200px]">
              Affordable <br /> Price For <br /> Car Servicing
            </h2>
            <p>
              There are many variations of passages of available, but <br /> the
              majority have suffered alteration in some form
            </p>
            <div>
              <button className="btn btn-outline btn-warning mr-4 ">
                Discover More
              </button>
              <button className="btn btn-outline btn-warning">
                Latest Project
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 right-5  flex -translate-y-1/2 transform ">
          <a
            href="#slide4"
            className="btn btn-outline btn-warning btn-circle mr-2"
          >
            ❮
          </a>
          <a href="#slide6" className="btn btn-outline btn-warning btn-circle">
            ❯
          </a>
        </div>
      </div>
    </div>
  );
};

export default Banner;
