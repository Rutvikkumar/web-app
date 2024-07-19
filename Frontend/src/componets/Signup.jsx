import React from 'react';
import { useForm } from 'react-hook-form';
import toast from 'react-hot-toast';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const password = watch("password");
  const navigate = useNavigate();  // Create navigate instance

  const onSubmit = async (data) => {
    const userinfo = {
      fullname: data.fullname,
      email: data.email,
      number: data.number,
      password: data.password,
      confirmPassword: data.confirmPassword
    };

    try {
      const response = await axios.post("http://localhost:5000/api/register", userinfo);
      console.log(response.data);
      toast.success('Successfully signed up!');
      navigate('/');  // Redirect to login page
    } catch (error) {
      console.log(error);
      toast.error('Signup failed! Please try again.');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 bg-white rounded-lg shadow-md sm:p-10">
        <h1 className="text-2xl font-bold text-center">Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
          <div>
            <label className="block text-sm">Name</label>
            <input
              type="text"
              {...register('fullname', { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400"
            />
            {errors.fullname && <p className="text-red-500 text-xs">Name is required</p>}
          </div>
          <div>
            <label className="block text-sm">Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400"
            />
            {errors.email && <p className="text-red-500 text-xs">Email is required</p>}
          </div>
          <div>
            <label className="block text-sm">Number</label>
            <input
              type="tel"
              {...register('number', { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400"
            />
            {errors.number && <p className="text-red-500 text-xs">Number is required</p>}
          </div>
          <div>
            <label className="block text-sm">Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-xs">Password is required</p>}
          </div>
          <div>
            <label className="block text-sm">Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', {
                required: true,
                validate: value => value === password || "Passwords do not match"
              })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400"
            />
            {errors.confirmPassword && <p className="text-red-500 text-xs">{errors.confirmPassword.message}</p>}
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Sign Up
            </button>
          </div>
        </form>
        <p className="text-sm text-center mt-4">
          If you are already registered, then <a href="/login" className="text-blue-500 underline">login here</a>
        </p>
      </div>
    </div>
  );
};

export default Signup;
