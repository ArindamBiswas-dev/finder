import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useHistory } from 'react-router-dom';
import { SetUserContext } from '../App';
import Logo from '../components/Logo';
import { axiosInstance } from '../util/axiosInstance';

function Signin() {
  const history = useHistory();
  const setUser = useContext(SetUserContext);
  const [loading, setLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    // console.log(data);
    try {
      setLoading(true);
      const res = await axiosInstance.post('/auth/login', data);
      setUser(res.data.user.id);
      console.log(res.data.user.id);
      toast.success('Sign In successful');
      setTimeout(() => {
        return history.push('/freecourse');
      }, 3000);
    } catch (error) {
      let errorMessage = '';

      switch (error.response.status) {
        case 406:
          errorMessage = 'This email is not verified';
          break;
        case 401:
          errorMessage = 'Email / Password is wrong';
          break;
        default:
          errorMessage = 'Internal Server Error';
      }

      toast.error(errorMessage);
      console.log(errorMessage);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative">
      <div className="absolute top-6 left-6">
        <Logo />
      </div>
      <div className="flex h-full justify-center">
        <div className="w-full md:max-w-screen-lg">
          <div className="w-full flex justify-center items-center h-screen">
            <div className="w-full px-6 md:px-0 md:w-1/2">
              <h1 className="text-4xl font-bold mb-14">Sign In</h1>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control space-y-8 mb-2">
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
                        errors.password?.type === 'required'
                          ? 'input-error'
                          : ''
                      }`}
                      {...register('password', { required: true })}
                    />
                    {errors.password?.type === 'required' && (
                      <p className="text-red-600 text-sm font-medium pl-2 pt-2">
                        Password is required
                      </p>
                    )}
                  </div>
                </div>

                <div className="pl-1 font-semibold mb-12">
                  <span>Forget Password</span>
                  <a className="pl-1 text-blue-500" link href="#reset">
                    Reset it
                  </a>
                </div>
                <button
                  type="submit"
                  className={`btn btn-info btn-md mb-5 ${loading && 'loading'}`}
                >
                  {loading ? 'Signing In' : 'Sign In'}
                </button>
              </form>

              <div className="pl-1 font-semibold">
                <span>Don't have a account?</span>
                <Link to="/signup">
                  <span className="text-blue-500 pl-1">Create account</span>
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

export default Signin;
