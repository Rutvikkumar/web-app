import React from 'react';
import { useForm } from 'react-hook-form';


const login = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-3 .bg-semi-transparent shadow-md sm:p-10">
        <h1 className="text-2xl font-bold text-center">Login</h1>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
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
            <label className="block text-sm">Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              className="w-full px-4 py-2 mt-2 border rounded-md focus:ring focus:ring-opacity-75 focus:ring-blue-400"
            />
            {errors.password && <p className="text-red-500 text-xs">Password is required</p>}
          </div>
          <div>
            <button type="submit" className="w-full px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-opacity-75">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default login;
