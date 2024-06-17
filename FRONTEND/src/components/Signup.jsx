import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

const Signup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <div id="my_modal_3" className="flex h-screen items-center justify-center ">
      <div className="border md:p-4 shadow-md rounded">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)} method="dialog">
            <h3 className="font-bold text-lg">Registartion</h3>

            <div className="mt-2 space-y-2">
              <span>Name</span>
              <br />
               <input
                  type="name"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded outline-none"
                  {...register("name", { required: true })}
                />
                  <br />
                  {errors.email && <span className="text-sm text-red-500">This field is required</span>}
            </div>
            <div className="mt-4=2 space-y-2">
              <br />
              <span>Email</span>
              <br />
              <input
                  type="email"
                  placeholder="Enter your password"
                  className="w-80 px-3 border rounded outline-none"
                  {...register("email", { required: true })}
                />
                <br/>
                  {errors.email && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            <div className="mt-4=2 space-y-2">
              <br />
              <span>Password</span>
              <br />
              <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 border rounded outline-none"
                  {...register("password", { required: true })}
                />
                <br/>
                  {errors.password && <span className="text-sm text-red-500">This field is required</span>}

            </div>
            <div className="flex justify-around mt-4">
              <button className="bg-pink-500 text-white px-3 py-1 rounded duration-300 hover:bg-pink-700 cursor-pointer">
                Login
              </button>
              <p>
                Have Account?
                <Link to="/">
                  <span className="text-blue-500 cursor-pointer underline">
                    Login
                  </span>
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
