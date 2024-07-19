import React, { useState } from "react";
import toast from 'react-hot-toast';
import axios from 'axios';

function Form() {
  const initialFormData = {
    address: "",
    fileNumber: "",
    vehicleNumber: "",
    vehicleType: "",
    mobileNumber: "",
    carProblem: "",
    driverName: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    for (let key in formData) {
      if (!formData[key]) {
        setError(`${key} is required`);
        return false;
      }
    }
    setError(null);
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      const response = await axios.post('http://localhost:5000/api/form', formData);
      console.log('Success:', response.data);
      toast.success('Successfully created!');
      setFormData(initialFormData); // Clear the form fields
    } catch (error) {
      console.error('Error:', error);
      setError('Failed to submit the form. Please try again.');
      toast.error('This is an error!');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-6 bg-white rounded-lg">
        <h2 className="mb-4 text-xl text-black font-bold">Form Title</h2>
        {error && <p className="mb-4 text-red-500">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Address:
            </label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              File Number:
            </label>
            <input
              type="text"
              name="fileNumber"
              value={formData.fileNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Car Number:
            </label>
            <input
              type="text"
              name="vehicleNumber"
              value={formData.vehicleNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Car Type (Model):
            </label>
            <input
              type="text"
              name="vehicleType"
              value={formData.vehicleType}
              onChange={handleChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Mobile Number:
            </label>
            <input
              type="text"
              name="mobileNumber"
              value={formData.mobileNumber}
              onChange={handleChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Car Problems:
            </label>
            <select
              name="carProblem"
              value={formData.carProblem}
              onChange={handleChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a problem</option>
              <option value="jumpStart">Jump Start</option>
              <option value="ambica">AMBICA</option>
              <option value="bds">BDS</option>
            </select>
          </div>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-bold text-gray-700">
              Driver Name:
            </label>
            <select
              name="driverName"
              value={formData.driverName}
              onChange={handleChange}
              className="w-full px-3 py-2 text-white border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a driver</option>
              <option value="jayesh bhai">Jayesh Bhai</option>
              <option value="ajay bhai">Ajay Bhai</option>
              <option value="mohit bhai">Mohit Bhai</option>
            </select>
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
