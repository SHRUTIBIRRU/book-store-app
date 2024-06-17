import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form"

const Login = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => console.log(data)
  return (
    <>
      <div>
        {/* You can open the modal using document.getElementById('ID').showModal() method */}

        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <form onSubmit={handleSubmit(onSubmit)} method="dialog">
              {/* if there is a button in form, it will close the modal */}
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2 cursor-pointer">
                ✕
              </button>

              <h3 className="font-bold text-lg">Login</h3>

              <div className="mt-2 space-y-2">
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 border rounded outline-none"
                  {...register("email", { required: true })}
                />
                  <br />
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
                  Not Registered?
                  <Link to="/signup">
                    <span className="text-blue-500 cursor-pointer underline">
                      Signup
                    </span>
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </dialog>
      </div>
    </>
  );
};

export default Login;
