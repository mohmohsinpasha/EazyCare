import React, { useState } from 'react';
import { useContext, createContext } from 'react';

export let data = createContext();

export default function Profile({ handleEdit,data }) {

  return (
    <div className="p-8">

      <img
        className="w-36 rounded"
        src="https://t4.ftcdn.net/jpg/02/29/75/83/360_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
        alt="Profile"
      />

      <h2 className="bg-gray-50 text-3xl font-medium max-w-60 mt-4 text-neutral-800">{data.name}</h2>
      <hr className="bg-zinc-400 h-[1px] border-none" />

      <h3 className="text-neutral-500 underline mt-3">CONTACT INFORMATION</h3>
      <table border={0}>
        <tbody>
          <tr>
            <td>Email Id:</td>
            <td>{data.email}</td>
          </tr>
          <tr>
            <td>Phone:</td>
            <td>{data.phone}</td>
          </tr>
          <tr>
            <td>Address:</td>
            <td>{data.address}</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-neutral-500 underline mt-3">BASIC INFORMATION</h3>
      <table border={0}>
        <tbody>
          <tr>
            <td>Gender:</td>
            <td>{data.gender}</td>
          </tr>
          <tr>
            <td>DOB:</td>
            <td>{data.dob}</td>
          </tr>
        </tbody>
      </table>

      <div className="mt-10">
        <button
          className="border border-primary px-8 py-2 rounded-full hover:te"
          onClick={() => {return handleEdit()}}
        >
          Edit
        </button>
        <button className="border border-primary px-8 py-2 rounded-full">
          Save Information
        </button>
      </div>
    </div>
  );
}
