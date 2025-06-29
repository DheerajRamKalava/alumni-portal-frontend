import React, { useState } from 'react';

const initialAlumni = [
  {
    name: 'Ravi Sharma',
    email: '111901001@iitpkd.ac.in',
    batch: '2019',
    department: 'CSE',
  },
  {
    name: 'Sneha Menon',
    email: '132001001@iitpkd.ac.in',
    batch: '2020',
    department: 'ME',
  },
  {
    name: 'Arjun Rao',
    email: '122101001@iitpkd.ac.in',
    batch: '2021',
    department: 'EE',
  },
];

function AdminDashboard() {
  const [alumniList, setAlumniList] = useState(initialAlumni);
  const [newAlumni, setNewAlumni] = useState({
    name: '',
    email: '',
    batch: '',
    department: '',
  });

  const handleAddAlumni = () => {
    if (!newAlumni.name || !newAlumni.email || !newAlumni.batch || !newAlumni.department) {
      alert('Please fill in all fields');
      return;
    }

    setAlumniList([...alumniList, newAlumni]);
    setNewAlumni({ name: '', email: '', batch: '', department: '' });
  };

  return (
    <div className="min-h-screen bg-gray-100 py-10 px-6">
      <h2 className="text-3xl font-bold mb-6 text-center">Admin Dashboard</h2>

      {/* Add Alumni UI */}
      <div className="bg-white p-4 rounded-lg shadow mb-6 max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Add New Alumni</h3>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <input
            type="text"
            placeholder="Name"
            className="border px-3 py-2 rounded"
            value={newAlumni.name}
            onChange={(e) => setNewAlumni({ ...newAlumni, name: e.target.value })}
          />
          <input
            type="email"
            placeholder="Email"
            className="border px-3 py-2 rounded"
            value={newAlumni.email}
            onChange={(e) => setNewAlumni({ ...newAlumni, email: e.target.value })}
          />
          <input
            type="text"
            placeholder="Batch"
            className="border px-3 py-2 rounded"
            value={newAlumni.batch}
            onChange={(e) => setNewAlumni({ ...newAlumni, batch: e.target.value })}
          />
          <input
            type="text"
            placeholder="Department"
            className="border px-3 py-2 rounded"
            value={newAlumni.department}
            onChange={(e) => setNewAlumni({ ...newAlumni, department: e.target.value })}
          />
        </div>
        <button
          onClick={handleAddAlumni}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Add Alumni
        </button>
      </div>

      {/* Alumni Table */}
      <div className="bg-white p-4 rounded-lg shadow max-w-4xl mx-auto">
        <h3 className="text-lg font-semibold mb-4">Alumni Records</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-gray-200">
              <th className="p-2 border">Name</th>
              <th className="p-2 border">Email</th>
              <th className="p-2 border">Batch</th>
              <th className="p-2 border">Department</th>
              <th className="p-2 border">Actions</th>
            </tr>
          </thead>
          <tbody>
            {alumniList.map((alumni, idx) => (
              <tr key={idx} className="hover:bg-gray-100">
                <td className="p-2 border">{alumni.name}</td>
                <td className="p-2 border">{alumni.email}</td>
                <td className="p-2 border">{alumni.batch}</td>
                <td className="p-2 border">{alumni.department}</td>
                <td className="p-2 border space-x-2">
                  <button className="bg-yellow-400 px-3 py-1 rounded hover:bg-yellow-500 text-sm">
                    Update
                  </button>
                  <button className="bg-red-500 px-3 py-1 rounded hover:bg-red-600 text-sm text-white">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AdminDashboard;
