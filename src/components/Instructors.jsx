import React, { useState } from "react";

function Instructors({ instructors = [] }) {
  const [selectedInstructor, setSelectedInstructor] = useState(null);

  return (
    <section>
      <h1 className="text-3xl font-bold text-center pt-6 text-blue-950">
        Our Instructors
      </h1>
      <p className="text-center font-bold">Learn from Industry Experts</p>
      <div className="flex flex-wrap justify-center gap-6 pt-4">
        {instructors.map((inst, index) => (
          <div
            key={index}
            className="max-w-xs text-center bg-white shadow-gray-200 shadow-2xl p-4"
          >
            <img
              src={inst.image}
              alt={inst.name}
              className="mx-auto rounded-lg w-60 h-60 gap-10 object-cover"
            />
            <h2 className="text-xl font-bold pt-4">{inst.name}</h2>
            <p className="">{inst.bio}</p>
            <div className="pt-3">
              <button
                type="button"
                onClick={() => setSelectedInstructor(inst)}
                className="bg-blue-950 text-white px-4 py-2 rounded hover:bg-blue-500"
              >
                {inst.buttonText || "View Profile"}
              </button>
            </div>
          </div>
        ))}
      </div>

      {selectedInstructor && (
        <div
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/50 p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="instructor-profile-title"
        >
          <div className="w-full max-w-md rounded-lg bg-white p-6 text-center shadow-2xl">
            <img
              src={selectedInstructor.image}
              alt={selectedInstructor.name}
              className="mx-auto h-40 w-40 rounded-lg object-cover"
            />
            <h2
              id="instructor-profile-title"
              className="mt-4 text-2xl font-bold text-blue-950"
            >
              {selectedInstructor.name}
            </h2>
            <p className="mt-2 font-semibold">{selectedInstructor.bio}</p>
            {selectedInstructor.about && (
              <p className="mt-3">{selectedInstructor.about}</p>
            )}
            {selectedInstructor.experience && (
              <p className="mt-3">
                <span className="font-bold">Experience:</span>{" "}
                {selectedInstructor.experience}
              </p>
            )}
            {selectedInstructor.email && (
              <p className="mt-2">
                <span className="font-bold">Email:</span>{" "}
                {selectedInstructor.email}
              </p>
            )}
            <button
              type="button"
              onClick={() => setSelectedInstructor(null)}
              className="mt-5 rounded bg-gray-800 px-4 py-2 text-white hover:bg-gray-600"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Instructors;
