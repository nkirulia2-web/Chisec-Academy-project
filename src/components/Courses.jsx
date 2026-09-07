import React from "react";
function Courses({ icon, caption, text }) {
  return (
    <div className="  px-2 mb-6">
      <div className="w-full shadow-2xl text-center shadow-gray-600 gap-5 rounded-lg p-6 bg-white">
        <div className="flex justify-center text-7xl mb-4">{icon}</div>
        <h4 className="font-bold text-blue-950 mb-2">{caption}</h4>
        <p className="text-sm text-gray-700">{text}</p>
      </div>
    </div>
  );
}

export default Courses;
