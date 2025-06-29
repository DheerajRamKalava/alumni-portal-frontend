import React, { useState } from 'react';

function ProfilePage() {
  const personal = {
    name: 'Dheeraj Ram Kalava',
    email: '142301015@smail.iitpkd.ac.in',
    department: 'Data Science',
  };

  const [professional, setProfessional] = useState({
    jobTitle: 'Software Engineer',
    company: 'XYZ',
    location: 'Hyderabad',
  });

  const [showForm, setShowForm] = useState(false);

  const handleUpdate = () => {
    alert('Details updated (dummy action)');
    setShowForm(false);
  };

  const handleRequestVerification = () => {
    alert('Verification request sent (dummy alert)');
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start pt-10">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-2xl text-center">
        <h2 className="text-2xl font-bold mb-4">Alumni Profile</h2>

{/* Just to fill some details, i have chosen myself, this is just for an example */}

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="/assets/profile.jpg"
            alt="Profile"
            className="w-32 h-32 rounded-full object-cover border-4 border-blue-500 shadow-md"
          />
        </div>

        {/* Personal Details */}
        <div className="mb-6 text-left">
          <h3 className="text-lg font-semibold mb-2">Personal Details</h3>
          <p><strong>Name:</strong> {personal.name}</p>
          <p><strong>Email:</strong> {personal.email}</p>
          <p><strong>Department:</strong> {personal.department}</p>
        </div>

        {/* Professional Details */}
        <div className="mb-6 text-left">
          <h3 className="text-lg font-semibold mb-2">Professional Details</h3>
          <p><strong>Job Title:</strong> {professional.jobTitle}</p>
          <p><strong>Company:</strong> {professional.company}</p>
          <p><strong>Location:</strong> {professional.location}</p>
        </div>

        {/* Buttons */}
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => setShowForm(!showForm)}
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            {showForm ? 'Cancel' : 'Update Details'}
          </button>
          <button
            onClick={handleRequestVerification}
            className="bg-green-600 text-white py-2 px-4 rounded hover:bg-green-700"
          >
            Request Verification
          </button>
        </div>

        {/* Update Form */}
        {showForm && (
          <div className="mt-6 text-left">
            <h3 className="text-lg font-semibold mb-2">Update Form</h3>
            <input
              type="text"
              placeholder="Job Title"
              value={professional.jobTitle}
              onChange={(e) => setProfessional({ ...professional, jobTitle: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <input
              type="text"
              placeholder="Company"
              value={professional.company}
              onChange={(e) => setProfessional({ ...professional, company: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-3"
            />
            <input
              type="text"
              placeholder="Location"
              value={professional.location}
              onChange={(e) => setProfessional({ ...professional, location: e.target.value })}
              className="w-full border px-3 py-2 rounded mb-4"
            />
            <button
              onClick={handleUpdate}
              className="bg-indigo-600 text-white py-2 px-4 rounded hover:bg-indigo-700"
            >
              Submit Update
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default ProfilePage;
