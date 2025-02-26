// import React, { useState } from 'react';
// import axios from 'axios';

// const EventForm = ({ onEventCreated }) => {
//   const [name, setName] = useState('');
//   const [date, setDate] = useState('');
//   const [images, setImages] = useState([]);
//   const [previewImages, setPreviewImages] = useState([]);

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     setImages(files);
//     // Create local preview URLs
//     const previews = files.map(file => URL.createObjectURL(file));
//     setPreviewImages(previews);
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('name', name);
//     formData.append('date', date);
//     images.forEach(image => {
//       formData.append('images', image);
//     });
//     try {
//       await axios.post('http://localhost:5000/api/events', formData, {
//         headers: { 'Content-Type': 'multipart/form-data' }
//       });
//       // Reset form fields
//       setName('');
//       setDate('');
//       setImages([]);
//       setPreviewImages([]);
//       onEventCreated();
//     } catch (err) {
//       console.error(err);
//     }
//   };

//   return (
//     <form onSubmit={handleSubmit} className="mb-8 bg-white p-4 rounded shadow">
//       <div className="mb-4">
//         <label className="block mb-1">Event Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="border p-2 w-full"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-1">Event Date</label>
//         <input
//           type="date"
//           value={date}
//           onChange={(e) => setDate(e.target.value)}
//           className="border p-2 w-full"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block mb-1">Upload Images</label>
//         <input type="file" multiple onChange={handleImageChange} className="border p-2 w-full" />
//       </div>
//       {previewImages.length > 0 && (
//         <div className="mb-4">
//           <p className="mb-2">Image Preview:</p>
//           <div className="flex space-x-2">
//             {previewImages.map((src, index) => (
//               <img key={index} src={src} alt={`preview-${index}`} className="w-20 h-20 object-cover rounded" />
//             ))}
//           </div>
//         </div>
//       )}
//       <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
//         Create Event
//       </button>
//     </form>
//   );
// };

// export default EventForm;
