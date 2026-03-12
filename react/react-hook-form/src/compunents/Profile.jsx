import React from "react";
import { useSelector } from "react-redux";

function Profile() {
  const userData = useSelector((state) => state.auth.userData);

  if (!userData) {
    return (
      <div className="text-center mt-10 text-gray-500">
        No user data available
      </div>
    );
  }

  const { name, password, email } = userData;

  return (
    <div className="flex justify-center mt-10">
      <div className="w-72 bg-gray-800 text-white p-5 rounded-xl shadow-lg">
        <h2 className="text-xl font-bold mb-4 text-center">User Profile</h2>

        <p className="mb-2">
          <span className="font-semibold">Name:</span> {name}
        </p>

        <p className="mb-2">
          <span className="font-semibold">Email:</span> {email}
        </p>

        <p className="mb-2">
          <span className="font-semibold">password:</span> {password}
        </p>
      </div>
    </div>
  );
}

export default Profile;