import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const EventDetailsPage = () => {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);

  const fetchEventDetails = async () => {
    try {
      const res = await axios.get(`http://localhost:5000/api/events/${eventId}`);
      setEvent(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEventDetails();
  }, [eventId]);

  if (!event) {
    return <p className="text-center text-xl mt-20">Loading...</p>;
  }

  return (
    <div className="min-h-screen flex flex-col my-28 font-inter px-12">
      <h1 className="text-2xl font-bold mb-6">{event.name}</h1>
      <p className="text-gray-600 mb-4">{new Date(event.date).toLocaleDateString()}</p>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {event.images.map((img, index) => (
          <img key={index} src={img.url} alt={`event ${index}`} className="w-full h-64 object-cover rounded-lg shadow-lg" />
        ))}
      </div>
    </div>
  );
};

export default EventDetailsPage;
