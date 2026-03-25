import React from 'react';
import { Mail, Phone, MapPin, Calendar, User, Shield } from 'lucide-react';

const UserProfile = ({ data }) => {
   if (!data || !data.name) return <div className="p-10 text-center">Loading...</div>;

  return (
    <div className="max-w-2xl mx-auto m-10  bg-white rounded-xl shadow-md overflow-hidden border border-gray-200 font-sans">
      {/* Header / Banner Area */}
      <div className="bg-gradient-to-r from-blue-500 to-indigo-600 h-32" />
      
      <div className="relative px-6 pb-6">
        {/* Profile Image */}
        <div className="absolute -top-12 left-6">
          <img 
            className="w-24 h-24 rounded-full border-4 border-white shadow-lg" 
            src={data.picture.large} 
            alt={data.name.first} 
          />
        </div>

        {/* Name and Basic Info */}
        <div className="pt-14">
          <h2 className="text-2xl font-bold text-gray-800">
            {data.name.title} {data.name.first} {data.last}
          </h2>
          <p className="text-gray-500 flex items-center gap-1">
            <User size={16} /> @{data.login.username} • {data.gender}
          </p>
        </div>

        {/* Grid Content */}
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Contact Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 uppercase text-xs tracking-wider">Contact Information</h3>
            <div className="flex items-center gap-3 text-gray-600">
              <Mail size={18} className="text-blue-500" />
              <span className="text-sm">{data.email}</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Phone size={18} className="text-blue-500" />
              <span className="text-sm">{data.phone} (Home)</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600 pl-7">
              <span className="text-sm text-gray-400 italic">Cell: {data.cell}</span>
            </div>
          </div>

          {/* Location Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 uppercase text-xs tracking-wider">Location</h3>
            <div className="flex items-start gap-3 text-gray-600">
              <MapPin size={18} className="text-red-500 mt-0.5" />
              <div className="text-sm">
                <p>{data.location.street.number} {data.location.street.name}</p>
                <p>{data.location.city}, {data.location.state}</p>
                <p>{data.location.country} ({data.location.postcode})</p>
              </div>
            </div>
          </div>

          {/* Personal Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 uppercase text-xs tracking-wider">Personal Details</h3>
            <div className="flex items-center gap-3 text-gray-600">
              <Calendar size={18} className="text-green-500" />
              <span className="text-sm">Age: {data.dob.age} (Born: {new Date(data.dob.date).toLocaleDateString()})</span>
            </div>
            <div className="flex items-center gap-3 text-gray-600">
              <Shield size={18} className="text-purple-500" />
              <span className="text-sm">Member for {data.registered.age} years</span>
            </div>
          </div>

          {/* Security/ID Section */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-700 uppercase text-xs tracking-wider">Security</h3>
            <div className="bg-gray-50 p-2 rounded border border-gray-100">
              <p className="text-[10px] text-gray-400 font-mono break-all">UUID: {data.login.uuid}</p>
              <p className="text-[10px] text-gray-400 font-mono mt-1">MD5: {data.login.md5}</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default UserProfile;