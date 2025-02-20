// import React, { useState } from 'react';

// const EventCard = ({ event }) => {
//   const [showImages, setShowImages] = useState(false);

//   return (
//     <div className="border rounded shadow p-4">
//       <h2 className="text-xl font-bold mb-2">{event.name}</h2>
//       <p className="mb-2">{new Date(event.date).toLocaleDateString()}</p>
//       <button onClick={() => setShowImages(!showImages)} className="bg-blue-500 text-white px-4 py-2 rounded">
//         {showImages ? 'Hide Images' : 'Show Images'}
//       </button>
//       {showImages && (
//         <div className="mt-4 grid grid-cols-2 gap-2">
//           {event.images.map((img, index) => (
//             <img key={index} src={img.url} alt="event" className="w-full h-40 object-cover rounded" />
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default EventCard;
