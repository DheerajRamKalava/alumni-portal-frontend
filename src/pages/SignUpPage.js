// import React, { useState } from 'react';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     campusID: '',
//     name: '',
//     email: '',
//     contact1: '',
//     contact2: '',
//     whatsapp: '',
//     countryCode: '',
//     linkedin: '',
//     department: '',
//     degree: '',
//     passoutYear: '',
//     hostel: '',
//     location: '',
//     organisation: '',
//     designation: '',
//     awards: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Validation: Campus ID must be exactly 9 digits
//     if (!/^\d{9}$/.test(formData.campusID)) {
//       alert('Campus ID must be exactly 9 digits');
//       return;
//     }

//     // Required fields check
//     const required = ['campusID', 'name', 'email', 'contact1', 'whatsapp', 'countryCode', 'department', 'degree', 'passoutYear', 'hostel', 'location'];
//     for (let field of required) {
//       if (!formData[field]) {
//         alert(`Please fill in the required field: ${field}`);
//         return;
//       }
//     }

//     console.log('Form Submitted:', formData);
//     alert('Sign-Up Successful! (Dummy Submission)');
//   };

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-6 flex justify-center">
//       <form
//         onSubmit={handleSubmit}
//         className="w-full max-w-4xl bg-white p-8 rounded-lg shadow"
//       >
//         <h2 className="text-3xl font-bold mb-8 text-center">IAR Cell Sign-Up</h2>

//         {/* Row 1 */}
//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <input name="campusID" value={formData.campusID} onChange={handleChange} type="text" placeholder="Campus ID" className="border px-3 py-2 rounded" required />
//           <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Name" className="border px-3 py-2 rounded" required />
//         </div>

//         {/* Row 2 */}
//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className="border px-3 py-2 rounded" required />
//           <input name="contact1" value={formData.contact1} onChange={handleChange} type="text" placeholder="Contact Number 1" className="border px-3 py-2 rounded" required />
//         </div>

//         {/* Row 3 */}
//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <input name="contact2" value={formData.contact2} onChange={handleChange} type="text" placeholder="Contact Number 2 (Optional)" className="border px-3 py-2 rounded" />
//           <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} type="text" placeholder="WhatsApp Number" className="border px-3 py-2 rounded" required />
//         </div>

//         {/* Row 4 */}
//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <input name="countryCode" value={formData.countryCode} onChange={handleChange} type="text" placeholder="Country Code" className="border px-3 py-2 rounded" required />
//           <input name="linkedin" value={formData.linkedin} onChange={handleChange} type="url" placeholder="LinkedIn Profile" className="border px-3 py-2 rounded" />
//         </div>

//         {/* Dropdowns */}
//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <select name="department" value={formData.department} onChange={handleChange} className="border px-3 py-2 rounded" required>
//             <option value="">Select Department</option>
//             <option value="Civil Engineering">Civil Engineering</option>
//             <option value="Computer Science & Engineering">Computer Science & Engineering</option>
//             <option value="Data Science & Engineering">Data Science & Engineering</option>
//             <option value="Electrical Engineering">Electrical Engineering</option>
//             <option value="Mechanical Engineering">Mechanical Engineering</option>
//           </select>

//           <select name="degree" value={formData.degree} onChange={handleChange} className="border px-3 py-2 rounded" required>
//             <option value="">Select Degree</option>
//             <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)</option>
//             <option value="Master of Technology (M.Tech)">Master of Technology (M.Tech)</option>
//             <option value="Master of Science (M.Sc)">Master of Science (M.Sc)</option>
//             <option value="Master of Science (M.S) by Research">Master of Science (M.S) by Research</option>
//             <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
//           </select>
//         </div>

//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <select name="passoutYear" value={formData.passoutYear} onChange={handleChange} className="border px-3 py-2 rounded" required>
//             <option value="">Year of Passout</option>
//             {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
//               <option key={year} value={year}>{year}</option>
//             ))}
//           </select>

//           <select name="hostel" value={formData.hostel} onChange={handleChange} className="border px-3 py-2 rounded" required>
//             <option value="">Select Hostel</option>
//             <option value="Malhar">Malhar</option>
//             <option value="Saveri">Saveri</option>
//             <option value="Brindavani">Brindavani</option>
//             <option value="Tilang A">Tilang A</option>
//             <option value="Tilang B">Tilang B</option>
//           </select>
//         </div>

//         {/* Final Fields */}
//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <input name="location" value={formData.location} onChange={handleChange} type="text" placeholder="Current Location" className="border px-3 py-2 rounded" required />
//           <input name="organisation" value={formData.organisation} onChange={handleChange} type="text" placeholder="Organisation (Optional)" className="border px-3 py-2 rounded" />
//         </div>

//         <div className="grid md:grid-cols-2 gap-4 mb-4">
//           <input name="designation" value={formData.designation} onChange={handleChange} type="text" placeholder="Designation (Optional)" className="border px-3 py-2 rounded" />
//           <input name="awards" value={formData.awards} onChange={handleChange} type="text" placeholder="Awards (Optional)" className="border px-3 py-2 rounded" />
//         </div>

//         <button type="submit" className="mt-4 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700">
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;













































// import React, { useState } from 'react';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     campusID: '',
//     name: '',
//     email: '',
//     contact1: '',
//     contact2: '',
//     whatsapp: '',
//     countryCode: '',
//     linkedin: '',
//     department: '',
//     degree: '',
//     passoutYear: '',
//     hostel: '',
//     location: '',
//     organisation: '',
//     designation: '',
//     awards: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!/^\d{9}$/.test(formData.campusID)) {
//       alert('Campus ID must be exactly 9 digits');
//       return;
//     }

//     const required = ['campusID', 'name', 'email', 'contact1', 'whatsapp', 'countryCode', 'department', 'degree', 'passoutYear', 'hostel', 'location'];
//     for (let field of required) {
//       if (!formData[field]) {
//         alert(`Please fill in the required field: ${field}`);
//         return;
//       }
//     }

//     console.log('Form Submitted:', formData);
//     alert('Sign-Up Successful! (Dummy Submission)');
//   };

//   const inputStyle = "w-full border border-gray-300 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-10 px-4 flex justify-center">
//       <form onSubmit={handleSubmit} className="w-full max-w-4xl bg-white p-10 rounded-xl shadow-lg">
//         <h2 className="text-4xl font-bold mb-8 text-center text-blue-700">IAR Cell Sign-Up</h2>

//         {/* Section: Basic Info */}
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">Basic Information</h3>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input name="campusID" value={formData.campusID} onChange={handleChange} type="text" placeholder="Campus ID (9-digit Roll No)" className={inputStyle} />
//             <input name="name" value={formData.name} onChange={handleChange} type="text" placeholder="Full Name" className={inputStyle} />
//             <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email Address" className={inputStyle} />
//             <input name="contact1" value={formData.contact1} onChange={handleChange} type="text" placeholder="Contact Number 1" className={inputStyle} />
//             <input name="contact2" value={formData.contact2} onChange={handleChange} type="text" placeholder="Contact Number 2 (Optional)" className={inputStyle} />
//             <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} type="text" placeholder="WhatsApp Number" className={inputStyle} />
//             <input name="countryCode" value={formData.countryCode} onChange={handleChange} type="text" placeholder="Country Code (e.g. +91)" className={inputStyle} />
//             <input name="linkedin" value={formData.linkedin} onChange={handleChange} type="url" placeholder="LinkedIn Profile URL" className={inputStyle} />
//           </div>
//         </div>

//         {/* Section: Academic Info */}
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">Academic Details</h3>
//           <div className="grid md:grid-cols-2 gap-4">
//             <select name="department" value={formData.department} onChange={handleChange} className={inputStyle}>
//               <option value="">Select Department</option>
//               <option value="Civil Engineering">Civil Engineering</option>
//               <option value="Computer Science & Engineering">Computer Science & Engineering</option>
//               <option value="Data Science & Engineering">Data Science & Engineering</option>
//               <option value="Electrical Engineering">Electrical Engineering</option>
//               <option value="Mechanical Engineering">Mechanical Engineering</option>
//             </select>

//             <select name="degree" value={formData.degree} onChange={handleChange} className={inputStyle}>
//               <option value="">Select Degree</option>
//               <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)</option>
//               <option value="Master of Technology (M.Tech)">Master of Technology (M.Tech)</option>
//               <option value="Master of Science (M.Sc)">Master of Science (M.Sc)</option>
//               <option value="Master of Science (M.S) by Research">M.S by Research</option>
//               <option value="Doctor of Philosophy (PhD)">PhD</option>
//             </select>

//             <select name="passoutYear" value={formData.passoutYear} onChange={handleChange} className={inputStyle}>
//               <option value="">Year of Passout</option>
//               {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
//                 <option key={year} value={year}>{year}</option>
//               ))}
//             </select>

//             <select name="hostel" value={formData.hostel} onChange={handleChange} className={inputStyle}>
//               <option value="">Select Hostel</option>
//               <option value="Malhar">Malhar</option>
//               <option value="Saveri">Saveri</option>
//               <option value="Brindavani">Brindavani</option>
//               <option value="Tilang A">Tilang A</option>
//               <option value="Tilang B">Tilang B</option>
//             </select>
//           </div>
//         </div>

//         {/* Section: Professional Info */}
//         <div className="mb-6">
//           <h3 className="text-xl font-semibold mb-4 text-gray-700">Professional Details</h3>
//           <div className="grid md:grid-cols-2 gap-4">
//             <input name="location" value={formData.location} onChange={handleChange} type="text" placeholder="Current Location" className={inputStyle} />
//             <input name="organisation" value={formData.organisation} onChange={handleChange} type="text" placeholder="Organisation (Optional)" className={inputStyle} />
//             <input name="designation" value={formData.designation} onChange={handleChange} type="text" placeholder="Designation (Optional)" className={inputStyle} />
//             <input name="awards" value={formData.awards} onChange={handleChange} type="text" placeholder="Awards (Optional)" className={inputStyle} />
//           </div>
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-600 text-white text-lg py-2 rounded-lg hover:bg-blue-700 transition-all duration-300"
//         >
//           Submit
//         </button>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;



















































// import React, { useState } from 'react';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     campusID: '',
//     name: '',
//     email: '',
//     contact1: '',
//     contact2: '',
//     whatsapp: '',
//     countryCode: '',
//     linkedin: '',
//     department: '',
//     degree: '',
//     passoutYear: '',
//     hostel: '',
//     location: '',
//     organisation: '',
//     designation: '',
//     awards: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (!/^\d{9}$/.test(formData.campusID)) {
//       alert('Campus ID must be exactly 9 digits');
//       return;
//     }

//     const requiredFields = ['campusID', 'name', 'email', 'contact1', 'whatsapp', 'countryCode', 'department', 'degree', 'passoutYear', 'hostel', 'location'];
//     for (let field of requiredFields) {
//       if (!formData[field]) {
//         alert(`Please fill the required field: ${field}`);
//         return;
//       }
//     }

//     console.log('Submitted Data:', formData);
//     alert('Sign-Up Successful! (Dummy)');
//   };

//   const inputStyle = "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition";

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-slate-100 flex items-center justify-center px-4 py-10">
//       <form onSubmit={handleSubmit} className="bg-white shadow-xl rounded-xl w-full max-w-4xl p-10 space-y-6 border border-gray-200">
//         <h2 className="text-3xl font-semibold text-center text-gray-800 mb-4">IAR Cell Sign-Up Form</h2>

//         <div className="grid md:grid-cols-2 gap-6">
//           <input name="campusID" value={formData.campusID} onChange={handleChange} placeholder="Campus ID (9-digit Roll No)" className={inputStyle} />
//           <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className={inputStyle} />
//           <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className={inputStyle} />
//           <input name="contact1" value={formData.contact1} onChange={handleChange} placeholder="Contact Number 1" className={inputStyle} />
//           <input name="contact2" value={formData.contact2} onChange={handleChange} placeholder="Contact Number 2 (Optional)" className={inputStyle} />
//           <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className={inputStyle} />
//           <input name="countryCode" value={formData.countryCode} onChange={handleChange} placeholder="Country Code (e.g. +91)" className={inputStyle} />
//           <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn Profile URL" className={inputStyle} />

//           <select name="department" value={formData.department} onChange={handleChange} className={inputStyle}>
//             <option value="">Select Department</option>
//             <option value="Civil Engineering">Civil Engineering</option>
//             <option value="Computer Science & Engineering">Computer Science & Engineering</option>
//             <option value="Data Science & Engineering">Data Science & Engineering</option>
//             <option value="Electrical Engineering">Electrical Engineering</option>
//             <option value="Mechanical Engineering">Mechanical Engineering</option>
//           </select>

//           <select name="degree" value={formData.degree} onChange={handleChange} className={inputStyle}>
//             <option value="">Select Degree</option>
//             <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)</option>
//             <option value="Master of Technology (M.Tech)">Master of Technology (M.Tech)</option>
//             <option value="Master of Science (M.Sc)">Master of Science (M.Sc)</option>
//             <option value="Master of Science (M.S) by Research">Master of Science (M.S) by Research</option>
//             <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
//           </select>

//           <select name="passoutYear" value={formData.passoutYear} onChange={handleChange} className={inputStyle}>
//             <option value="">Year of Passout</option>
//             {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
//               <option key={year} value={year}>{year}</option>
//             ))}
//           </select>

//           <select name="hostel" value={formData.hostel} onChange={handleChange} className={inputStyle}>
//             <option value="">Select Hostel</option>
//             <option value="Malhar">Malhar</option>
//             <option value="Saveri">Saveri</option>
//             <option value="Brindavani">Brindavani</option>
//             <option value="Tilang A">Tilang A</option>
//             <option value="Tilang B">Tilang B</option>
//           </select>

//           <input name="location" value={formData.location} onChange={handleChange} placeholder="Current Location" className={inputStyle} />
//           <input name="organisation" value={formData.organisation} onChange={handleChange} placeholder="Organisation (Optional)" className={inputStyle} />
//           <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation (Optional)" className={inputStyle} />
//           <input name="awards" value={formData.awards} onChange={handleChange} placeholder="Awards (Optional)" className={inputStyle} />
//         </div>

//         <div className="pt-6">
//           <button type="submit" className="w-full py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition-all duration-300">
//             Submit Form
//           </button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default SignUpPage;



































// import React, { useState } from 'react';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     campusID: '',
//     name: '',
//     email: '',
//     contact1: '',
//     contact2: '',
//     whatsapp: '',
//     countryCode: '',
//     linkedin: '',
//     department: '',
//     degree: '',
//     passoutYear: '',
//     hostel: '',
//     location: '',
//     organisation: '',
//     designation: '',
//     awards: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!/^\d{9}$/.test(formData.campusID)) {
//       alert('Campus ID must be exactly 9 digits');
//       return;
//     }

//     const requiredFields = ['campusID', 'name', 'email', 'contact1', 'whatsapp', 'countryCode', 'department', 'degree', 'passoutYear', 'hostel', 'location'];
//     for (let field of requiredFields) {
//       if (!formData[field]) {
//         alert(`Please fill the required field: ${field}`);
//         return;
//       }
//     }

//     console.log('Submitted:', formData);
//     alert('Submitted Successfully! (Dummy)');
//   };

//   const inputStyle = `w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 transition`;

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-white to-slate-200 flex items-center justify-center px-4 py-10">
//       <div className="w-full max-w-5xl bg-white/80 backdrop-blur-md border border-gray-200 shadow-xl rounded-2xl p-10">
//         <div className="text-center mb-8">
//           <h2 className="text-4xl font-bold text-blue-900">IAR Cell – Alumni Sign-Up</h2>
//           <p className="text-gray-600 mt-2">Help us keep our alumni network strong and updated</p>
//         </div>

//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           <input name="campusID" value={formData.campusID} onChange={handleChange} placeholder="Campus ID (9-digit Roll No)" className={inputStyle} />
//           <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className={inputStyle} />
//           <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className={inputStyle} />
//           <input name="contact1" value={formData.contact1} onChange={handleChange} placeholder="Contact Number 1" className={inputStyle} />
//           <input name="contact2" value={formData.contact2} onChange={handleChange} placeholder="Contact Number 2 (optional)" className={inputStyle} />
//           <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className={inputStyle} />
//           <input name="countryCode" value={formData.countryCode} onChange={handleChange} placeholder="Country Code (e.g., +91)" className={inputStyle} />
//           <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn Profile URL" className={inputStyle} />

//           <select name="department" value={formData.department} onChange={handleChange} className={inputStyle}>
//             <option value="">Department</option>
//             <option value="Civil Engineering">Civil Engineering</option>
//             <option value="Computer Science & Engineering">Computer Science & Engineering</option>
//             <option value="Data Science & Engineering">Data Science & Engineering</option>
//             <option value="Electrical Engineering">Electrical Engineering</option>
//             <option value="Mechanical Engineering">Mechanical Engineering</option>
//           </select>

//           <select name="degree" value={formData.degree} onChange={handleChange} className={inputStyle}>
//             <option value="">Degree</option>
//             <option value="Bachelor of Technology (B.Tech)">Bachelor of Technology (B.Tech)</option>
//             <option value="Master of Technology (M.Tech)">Master of Technology (M.Tech)</option>
//             <option value="Master of Science (M.Sc)">Master of Science (M.Sc)</option>
//             <option value="Master of Science (M.S) by Research">Master of Science (M.S) by Research</option>
//             <option value="Doctor of Philosophy (PhD)">Doctor of Philosophy (PhD)</option>
//           </select>

//           <select name="passoutYear" value={formData.passoutYear} onChange={handleChange} className={inputStyle}>
//             <option value="">Year of Passout</option>
//             {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((yr) => (
//               <option key={yr} value={yr}>{yr}</option>
//             ))}
//           </select>

//           <select name="hostel" value={formData.hostel} onChange={handleChange} className={inputStyle}>
//             <option value="">Hostel</option>
//             <option value="Malhar">Malhar</option>
//             <option value="Saveri">Saveri</option>
//             <option value="Brindavani">Brindavani</option>
//             <option value="Tilang A">Tilang A</option>
//             <option value="Tilang B">Tilang B</option>
//           </select>

//           <input name="location" value={formData.location} onChange={handleChange} placeholder="Current Location" className={inputStyle} />
//           <input name="organisation" value={formData.organisation} onChange={handleChange} placeholder="Organisation (optional)" className={inputStyle} />
//           <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation (optional)" className={inputStyle} />
//           <input name="awards" value={formData.awards} onChange={handleChange} placeholder="Awards (optional)" className={inputStyle} />

//           <div className="md:col-span-2 pt-4">
//             <button type="submit" className="w-full py-3 bg-blue-700 hover:bg-blue-800 text-white rounded-lg text-lg font-semibold tracking-wide transition">
//               Submit Form
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;














































// import React, { useState } from 'react';

// const SignUpPage = () => {
//   const [formData, setFormData] = useState({
//     campusID: '',
//     name: '',
//     email: '',
//     contact1: '',
//     contact2: '',
//     whatsapp: '',
//     countryCode: '',
//     linkedin: '',
//     department: '',
//     degree: '',
//     passoutYear: '',
//     hostel: '',
//     location: '',
//     organisation: '',
//     designation: '',
//     awards: '',
//   });

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     if (!/^\d{9}$/.test(formData.campusID)) {
//       alert('Campus ID must be exactly 9 digits');
//       return;
//     }

//     const required = ['campusID', 'name', 'email', 'contact1', 'whatsapp', 'countryCode', 'department', 'degree', 'passoutYear', 'hostel', 'location'];
//     for (let field of required) {
//       if (!formData[field]) {
//         alert(`Please fill the required field: ${field}`);
//         return;
//       }
//     }

//     console.log('Submitted:', formData);
//     alert('Submitted successfully (dummy)');
//   };

//   const inputStyle = `w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400 transition`;

//   return (
//     <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-center justify-center">
//       <div className="w-full max-w-6xl bg-white shadow-xl border border-gray-200 rounded-2xl p-10">

//         {/* Header */}
//         <div className="text-center mb-10">
//           <h1 className="text-4xl font-extrabold text-yellow-400 tracking-tight">IAR Cell – Alumni Sign-Up</h1>
//           <p className="text-gray-600 mt-2">Join the IIT Palakkad Alumni Network</p>
//         </div>

//         {/* Form */}
//         <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
//           <input name="campusID" value={formData.campusID} onChange={handleChange} placeholder="Campus ID (9-digit Roll No)" className={inputStyle} />
//           <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className={inputStyle} />
//           <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className={inputStyle} />
//           <input name="contact1" value={formData.contact1} onChange={handleChange} placeholder="Contact Number 1" className={inputStyle} />
//           <input name="contact2" value={formData.contact2} onChange={handleChange} placeholder="Contact Number 2 (optional)" className={inputStyle} />
//           <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className={inputStyle} />
//           <input name="countryCode" value={formData.countryCode} onChange={handleChange} placeholder="Country Code (e.g., +91)" className={inputStyle} />
//           <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn Profile URL" className={inputStyle} />

//           <select name="department" value={formData.department} onChange={handleChange} className={inputStyle}>
//             <option value="">Select Department</option>
//             <option>Civil Engineering</option>
//             <option>Computer Science & Engineering</option>
//             <option>Data Science & Engineering</option>
//             <option>Electrical Engineering</option>
//             <option>Mechanical Engineering</option>
//           </select>

//           <select name="degree" value={formData.degree} onChange={handleChange} className={inputStyle}>
//             <option value="">Select Degree</option>
//             <option>Bachelor of Technology (B.Tech)</option>
//             <option>Master of Technology (M.Tech)</option>
//             <option>Master of Science (M.Sc)</option>
//             <option>Master of Science (M.S) by Research</option>
//             <option>Doctor of Philosophy (PhD)</option>
//           </select>

//           <select name="passoutYear" value={formData.passoutYear} onChange={handleChange} className={inputStyle}>
//             <option value="">Year of Passout</option>
//             {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
//               <option key={year} value={year}>{year}</option>
//             ))}
//           </select>

//           <select name="hostel" value={formData.hostel} onChange={handleChange} className={inputStyle}>
//             <option value="">Hostel</option>
//             <option>Malhar</option>
//             <option>Saveri</option>
//             <option>Brindavani</option>
//             <option>Tilang A</option>
//             <option>Tilang B</option>
//           </select>

//           <input name="location" value={formData.location} onChange={handleChange} placeholder="Current Location" className={inputStyle} />
//           <input name="organisation" value={formData.organisation} onChange={handleChange} placeholder="Organisation (optional)" className={inputStyle} />
//           <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation (optional)" className={inputStyle} />
//           <input name="awards" value={formData.awards} onChange={handleChange} placeholder="Awards (optional)" className={inputStyle} />

//           {/* Submit */}
//           <div className="md:col-span-2 pt-6">
//             <button
//               type="submit"
//               className="w-full py-3 bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-semibold rounded-lg transition shadow-md"
//             >
//               Submit Form
//             </button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default SignUpPage;




































import React, { useState } from 'react';

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    campusID: '',
    name: '',
    email: '',
    contact1: '',
    contact2: '',
    whatsapp: '',
    countryCode: '',
    linkedin: '',
    department: '',
    degree: '',
    passoutYear: '',
    hostel: '',
    location: '',
    organisation: '',
    designation: '',
    awards: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!/^\d{9}$/.test(formData.campusID)) {
      alert('Campus ID must be exactly 9 digits');
      return;
    }

    const required = ['campusID', 'name', 'email', 'contact1', 'whatsapp', 'countryCode', 'department', 'degree', 'passoutYear', 'hostel', 'location'];
    for (let field of required) {
      if (!formData[field]) {
        alert(`Please fill the required field: ${field}`);
        return;
      }
    }

    console.log('Submitted:', formData);
    alert('Submitted successfully (dummy)');
  };

  const inputStyle = `w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#FFAD00] transition`;

  return (
    // <div className="min-h-screen bg-gray-50 py-10 px-4 flex items-center justify-center">
    <div className="min-h-screen py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-6xl bg-white shadow-xl border border-gray-200 rounded-2xl p-10">

        {/* Header */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-[#FFAD00] tracking-tight">IAR Cell – Alumni Sign-Up</h1>
          <p className="text-[#63666A] mt-2 text-sm">Join the IIT Palakkad Alumni Network</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 text-sm">
          <input name="campusID" value={formData.campusID} onChange={handleChange} placeholder="Campus ID" className={inputStyle} />
          <input name="name" value={formData.name} onChange={handleChange} placeholder="Full Name" className={inputStyle} />
          <input name="email" value={formData.email} onChange={handleChange} type="email" placeholder="Email" className={inputStyle} />
          <input name="contact1" value={formData.contact1} onChange={handleChange} placeholder="Contact Number 1" className={inputStyle} />
          <input name="contact2" value={formData.contact2} onChange={handleChange} placeholder="Contact Number 2 (optional)" className={inputStyle} />
          <input name="whatsapp" value={formData.whatsapp} onChange={handleChange} placeholder="WhatsApp Number" className={inputStyle} />
          <input name="countryCode" value={formData.countryCode} onChange={handleChange} placeholder="Country Code (e.g., +91)" className={inputStyle} />
          <input name="linkedin" value={formData.linkedin} onChange={handleChange} placeholder="LinkedIn Profile URL" className={inputStyle} />

          <select name="department" value={formData.department} onChange={handleChange} className={inputStyle}>
            <option value="">Select Department</option>
            <option>Civil Engineering</option>
            <option>Computer Science & Engineering</option>
            <option>Data Science & Engineering</option>
            <option>Electrical Engineering</option>
            <option>Mechanical Engineering</option>
          </select>

          <select name="degree" value={formData.degree} onChange={handleChange} className={inputStyle}>
            <option value="">Select Degree</option>
            <option>Bachelor of Technology (B.Tech)</option>
            <option>Master of Technology (M.Tech)</option>
            <option>Master of Science (M.Sc)</option>
            <option>Master of Science (M.S) by Research</option>
            <option>Doctor of Philosophy (PhD)</option>
          </select>

          <select name="passoutYear" value={formData.passoutYear} onChange={handleChange} className={inputStyle}>
            <option value="">Year of Passout</option>
            {[2019, 2020, 2021, 2022, 2023, 2024, 2025].map((year) => (
              <option key={year} value={year}>{year}</option>
            ))}
          </select>

          <select name="hostel" value={formData.hostel} onChange={handleChange} className={inputStyle}>
            <option value="">Hostel</option>
            <option>Malhar</option>
            <option>Saveri</option>
            <option>Brindavani</option>
            <option>Tilang A</option>
            <option>Tilang B</option>
          </select>

          <input name="location" value={formData.location} onChange={handleChange} placeholder="Current Location" className={inputStyle} />
          <input name="organisation" value={formData.organisation} onChange={handleChange} placeholder="Organisation (optional)" className={inputStyle} />
          <input name="designation" value={formData.designation} onChange={handleChange} placeholder="Designation (optional)" className={inputStyle} />
          <input name="awards" value={formData.awards} onChange={handleChange} placeholder="Awards (optional)" className={inputStyle} />

          {/* Submit */}
          <div className="md:col-span-2 pt-6">
            <button
              type="submit"
              className="w-full py-3 bg-[#FFAD00] hover:bg-[#e69c00] text-white font-semibold rounded-lg transition shadow-md"
            >
              Submit Form
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;
