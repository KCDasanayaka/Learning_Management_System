// src/components/EventTable.js
import React, { useState } from 'react';
import axios from 'axios';

const EventTable = ({ events, onEventUpdated }) => {
  const [editingEvent, setEditingEvent] = useState(null);
  const [editName, setEditName] = useState('');
  const [editDate, setEditDate] = useState('');
  const [editImages, setEditImages] = useState([]);
  const [editPreviewImages, setEditPreviewImages] = useState([]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      onEventUpdated();
    } catch (err) {
      console.error(err);
    }
  };

  const handleEdit = (event) => {
    setEditingEvent(event);
    setEditName(event.name);
    setEditDate(event.date.split('T')[0]);
    setEditPreviewImages(event.images.map(img => img.url));
  };

  const handleEditImageChange = (e) => {
    const files = Array.from(e.target.files);
    setEditImages(files);
    const previews = files.map(file => URL.createObjectURL(file));
    setEditPreviewImages(previews);
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', editName);
    formData.append('date', editDate);
    editImages.forEach(image => {
      formData.append('images', image);
    });
    try {
      await axios.put(`http://localhost:5000/api/events/${editingEvent._id}`, formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setEditingEvent(null);
      setEditName('');
      setEditDate('');
      setEditImages([]);
      setEditPreviewImages([]);
      onEventUpdated();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-xl font-bold mb-4">Events</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3">Name</th>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Images</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {events.map((event) => (
            <tr key={event._id}>
              <td className="px-6 py-4">{event.name}</td>
              <td className="px-6 py-4">{new Date(event.date).toLocaleDateString()}</td>
              <td className="px-6 py-4">
                {event.images.map((img, index) => (
                  <img key={index} src={img.url} alt="event" className="w-12 h-12 object-cover rounded mr-2" />
                ))}
              </td>
              <td className="px-6 py-4">
                <button onClick={() => handleEdit(event)} className="bg-yellow-500 text-white px-2 py-1 rounded mr-2">
                  Edit
                </button>
                <button onClick={() => handleDelete(event._id)} className="bg-red-500 text-white px-2 py-1 rounded">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editingEvent && (
        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4">Edit Event</h3>
          <form onSubmit={handleUpdate} className="bg-gray-100 p-4 rounded">
            <div className="mb-4">
              <label className="block mb-1">Event Name</label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Event Date</label>
              <input
                type="date"
                value={editDate}
                onChange={(e) => setEditDate(e.target.value)}
                className="border p-2 w-full"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block mb-1">Upload New Images (optional)</label>
              <input type="file" multiple onChange={handleEditImageChange} className="border p-2 w-full" />
            </div>
            {editPreviewImages.length > 0 && (
              <div className="mb-4">
                <p className="mb-2">Image Preview:</p>
                <div className="flex space-x-2">
                  {editPreviewImages.map((src, index) => (
                    <img key={index} src={src} alt={`preview-${index}`} className="w-20 h-20 object-cover rounded" />
                  ))}
                </div>
              </div>
            )}
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Update Event
            </button>
            <button type="button" onClick={() => setEditingEvent(null)} className="ml-2 bg-gray-500 text-white px-4 py-2 rounded">
              Cancel
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default EventTable;
