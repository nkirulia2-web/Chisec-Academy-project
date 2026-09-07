import React from "react";

function Values({ values = [] }) {
  return (
    <section>
      <h1 className="text-3xl font-bold text-center pt-6 text-blue-950">
        Our Values
      </h1>
      <div className="flex flex-wrap justify-center gap-6 pt-4 mb-4 ">
        {values.map((value, index) => (
          <div
            key={index}
            className="max-w-xs text-center bg-white shadow-gray-400 shadow-2xl p-4 h-30"
          >
            <div className="flex justify-center text-4xl mb-3">
              {value.icon}
            </div>
            <h4 className="font-bold text-blue-950">{value.caption}</h4>
            <p className="text-sm">{value.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Values;
