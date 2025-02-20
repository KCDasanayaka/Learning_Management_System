// src/pages/CreateEventPage.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import EventForm from '../components/EventForm';
import EventTable from '../components/EventTable';

const CreateEventPage = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/events');
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Create Event</h1>
      <EventForm onEventCreated={fetchEvents} />
      <EventTable events={events} onEventUpdated={fetchEvents} />
    </div>
  );
};

export default CreateEventPage;
