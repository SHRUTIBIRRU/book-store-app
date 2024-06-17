import React from "react";
import BannerImg from "../../public/BannerImg.png";

const Banner = () => {

  return (
    <>
      <div className="  dark:bg-slate-900 dark:text-white max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row mt-5 my-10">
        <div className="md:w-1/2 space-y-6 mr-4 order-2 md:order-1 md:mt-20 ">
          <h1 className="text-4xl font-bold">
            Welcome Here, Let's learn something{" "}
            <span className="text-pink-500">new everyday!!!</span>
          </h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ipsa
            ex nam voluptates impedit nihil quae deserunt eum repellat, iusto
            dolore. Illo numquam ex sequi eligendi tempora est provident
            adipisci repudiandae qui. Explicabo eligendi molestiae quia ducimus
            culpa enim perferendis quos in non quod rem
          </p>
          <label className="input input-bordered flex items-center gap-4  dark:bg-slate-700 dark:text-white ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              fill="currentColor"
              className="w-4 h-4 opacity-70"
            >
              <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
              <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
            </svg>
            <input type="text" className="grow" placeholder="Email" />
          </label>
          <button className="btn btn-secondary mt-3 cursor-pointer">Send</button>
        </div>
        <div className=" bg-gradient-to-blw-full md:w-1/2 order-1 dark:bg-slate-900">
          <img src={BannerImg} alt="BookImg" className="w-92 h-92 dark:bg-gradient-to-bl" />
        </div>
      </div>
    </>
  );
};

export default Banner;
