import React, { useState } from "react";
import Navbar from "./Navbar";

function Home() {
  const [showPopup, setShowPopup] = useState(false);
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <Navbar />
      <div className="flex flex-row items-center  justify-center min-h-screen  bg-gray-100">
        <div className="space-x-6">
          {" "}
          <button
            onClick={togglePopup}
            className="px-10 py-5 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
          >
            Show Form
          </button>
          <button className="px-10 py-5 font-semibold text-white w-100 bg-blue-500 rounded-lg hover:bg-blue-700">
            All Data
          </button>
        </div>
        {showPopup && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="w-full max-w-md p-6 bg-white rounded-lg">
              <h2 className="mb-4 text-xl font-bold">Form Title</h2>
              <form>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Address:
                  </label>
                  <input
                    type="text"
                    name="address"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Pincode:
                  </label>
                  <input
                    type="text"
                    name="pincode"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Car Number:
                  </label>
                  <input
                    type="text"
                    name="carNumber"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Car Type (Model):
                  </label>
                  <input
                    type="text"
                    name="carType"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Mobile Number:
                  </label>
                  <input
                    type="text"
                    name="mobileNumber"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label className="block mb-2 text-sm font-bold text-gray-700">
                    Car Problems:
                  </label>
                  <select
                    name="carProblems"
                    className="w-full px-3 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="jumpStart">Jump Start</option>
                    <option value="ambica">AMBICA</option>
                    <option value="bds">BDS</option>
                  </select>
                </div>
                <button
                  type="submit"
                  className="w-full px-4 py-2 font-semibold text-white bg-blue-500 rounded-lg hover:bg-blue-700"
                >
                  Submit
                </button>
              </form>
              <button
                onClick={togglePopup}
                className="w-full px-4 py-2 mt-4 font-semibold text-white bg-red-500 rounded-lg hover:bg-red-700"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Home;
