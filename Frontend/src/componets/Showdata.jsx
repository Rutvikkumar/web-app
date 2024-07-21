import React, { useEffect, useState } from "react";
import axios from "axios";

function ShowData() {
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://web-app-uk9h.onrender.com/api/data"
        );
        setData(response.data.reverse());
      } catch (error) {
        setError("Failed to fetch data. Please try again.");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h2 className="mb-4 text-xl text-black font-bold">Data Table</h2>
      {error && <p className="mb-4 text-red-500">{error}</p>}
      <div className="w-full max-w-4xl p-2 bg-white rounded-lg shadow-md overflow-x-auto">
        <div className="max-h-96 overflow-y-auto">
          <table className="w-full table-auto">
            <thead className="bg-gray-200">
              <tr>
                <th className="px-4 py-2 text-blue-500">Address</th>
                <th className="px-4 py-2 text-blue-500">File Number</th>
                <th className="px-4 py-2 text-blue-500">Vehicle Number</th>
                <th className="px-4 py-2 text-blue-500">Vehicle Type</th>
                <th className="px-4 py-2 text-blue-500">Mobile Number</th>
                <th className="px-4 py-2 text-blue-500">Car Problem</th>
                <th className="px-4 py-2 text-blue-500">Driver Name</th>
              </tr>
            </thead>
            <tbody className="bg-white">
              {data.map((item) => (
                <tr key={item._id} className="border-b">
                  <td className="px-4 py-2 text-black">{item.address}</td>
                  <td className="px-4 py-2 text-black">{item.fileNumber}</td>
                  <td className="px-4 py-2 text-black">{item.vehicleNumber}</td>
                  <td className="px-4 py-2 text-black">{item.vehicleType}</td>
                  <td className="px-4 py-2 text-black">{item.mobileNumber}</td>
                  <td className="px-4 py-2 text-black">{item.carProblem}</td>
                  <td className="px-4 py-2 text-black">{item.driverName}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default ShowData;
