import React from 'react';

export default function Profile({ handleEdit, data }) {
  return (
    <div className="p-8 max-w-lg mx-auto bg-white shadow-lg rounded-lg">
      {/* Profile Picture */}
      <div className="flex flex-col items-center">
        <img
          className="w-36 h-36 rounded-full border-4 border-blue-500"
          src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
          alt="Profile"
        />
        <h2 className="text-2xl font-semibold text-gray-800 mt-4">{data.name || 'Mohsin'}</h2>
        <hr className="w-20 border-t-2 border-gray-300 mt-2" />
      </div>

      {/* Contact Information */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600 border-b-2 border-blue-500 pb-1 mb-4">
          Contact Information
        </h3>
        <table className="w-full text-sm text-gray-600">
          <tbody>
            <tr>
              <td className="py-2 font-medium">Email ID:</td>
              <td>{data.email || 'xyz@gmail.com'}</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">Phone:</td>
              <td>{data.phone || '786786786'}</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">Address:</td>
              <td>{data.address || 'BTM 5th Stage'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Basic Information */}
      <div className="mt-6">
        <h3 className="text-xl font-semibold text-blue-600 border-b-2 border-blue-500 pb-1 mb-4">
          Basic Information
        </h3>
        <table className="w-full text-sm text-gray-600">
          <tbody>
            <tr>
              <td className="py-2 font-medium">Gender:</td>
              <td>{data.gender || 'Male'}</td>
            </tr>
            <tr>
              <td className="py-2 font-medium">Date of Birth:</td>
              <td>{data.dob || '25-12-2001'}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between mt-8">
        <button
          className="bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition-all"
          onClick={handleEdit}
        >
          Edit
        </button>
        <button className="bg-green-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-green-600 transition-all">
          Save Information
        </button>
      </div>
    </div>
  );
}
