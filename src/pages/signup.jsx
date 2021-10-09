import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import Logo from '../components/Logo';

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="relative">
      <div className="absolute top-6 left-6">
        <Logo />
      </div>
      <div className="flex w-screen justify-center">
        <div className="w-full md:max-w-screen-lg">
          <div className="w-full flex justify-center items-center h-screen">
            <div className="w-full px-6 md:px-0 md:w-1/2">
              <h1 className="text-4xl font-bold mb-14">Sign Up</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control space-y-8 mb-2">
                  <div>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className={`input input-info input-bordered w-80 md:w-96 ${
                        errors.fullName ? 'input-error' : ''
                      }`}
                      {...register('fullName', {
                        required: true,
                        pattern: /^[A-Za-z ]+$/i,
                      })}
                    />
                    {errors.fullName?.type === 'required' && (
                      <p className="text-red-600 text-sm font-medium pl-2 pt-2">
                        Name is required
                      </p>
                    )}
                    {errors.fullName?.type === 'pattern' && (
                      <p className="text-red-600 text-sm font-medium pl-2 pt-2">
                        Enter a valid name
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="email"
                      placeholder="Email"
                      className={`input input-info input-bordered w-80 md:w-96 ${
                        errors.email?.type === 'required' ? 'input-error' : ''
                      }`}
                      {...register('email', { required: true })}
                    />
                    {errors.email?.type === 'required' && (
                      <p className="text-red-600 text-sm font-medium pl-2 pt-2">
                        Email is required
                      </p>
                    )}
                  </div>
                  <div>
                    <input
                      type="password"
                      placeholder="Password"
                      className={`input input-info input-bordered w-80 md:w-96 ${
                        errors.password ? 'input-error' : ''
                      }`}
                      {...register('password', {
                        required: true,
                        minLength: 6,
                      })}
                    />
                    {errors.password?.type === 'required' && (
                      <p className="text-red-600 text-sm font-medium pl-2 pt-2">
                        Password is required
                      </p>
                    )}
                    {errors.password?.type === 'minLength' && (
                      <p className="text-red-600 text-sm font-medium pl-2 pt-2">
                        Password must have to be atleast 6 character long
                      </p>
                    )}
                  </div>
                </div>
                <button
                  type="submit"
                  className="btn btn-info btn-md mb-5 mt-12"
                >
                  Sign Up
                </button>
              </form>

              <div className="pl-1 font-semibold">
                <span>Already have a account</span>
                <Link to="/signin">
                  <span className="text-blue-500 pl-1">Sign in</span>
                </Link>
              </div>
            </div>

            <div className="hidden md:block md:w-1/2">
              <img
                src="https://i.ibb.co/BZJqqY5/signup-removebg-preview.png"
                alt="loading"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
