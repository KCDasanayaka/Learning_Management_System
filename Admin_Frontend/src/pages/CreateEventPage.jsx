import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2, Plus, X, Calendar, Image as ImageIcon } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

const CreateEventPage = () => {
  const [events, setEvents] = useState([]);
  const [name, setName] = useState("");
  const [date, setDate] = useState("");
  const [images, setImages] = useState([]);
  const [previewImages, setPreviewImages] = useState([]);
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterMonth, setFilterMonth] = useState("all"); // New state for month filter
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetchEvents();
  }, []);

  // Reset pagination whenever search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterMonth]);

  const fetchEvents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/events");
      // Reverse the events array so that newly created events are displayed first
      setEvents(response.data.reverse());
    } catch (error) {
      console.error("Error fetching events:", error);
      toast.error("Failed to fetch events. Please try again.");
    }
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    setImages(files);
    // Generate preview URLs for selected files
    const previews = files.map((file) => URL.createObjectURL(file));
    setPreviewImages(previews);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("date", date);
      images.forEach((image) => {
        formData.append("images", image);
      });

      if (editId) {
        await axios.put(`http://localhost:5000/api/events/${editId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Event updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/events", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Event created successfully!");
      }
      fetchEvents();
      setName("");
      setDate("");
      setImages([]);
      setPreviewImages([]);
      setEditId(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting event:", error);
      toast.error("Failed to submit event. Please try again.");
    }
  };

  const handleEdit = (event) => {
    setName(event.name);
    setDate(event.date.split("T")[0]); // Format date as yyyy-mm-dd
    // Set preview images to the already uploaded images (if any)
    setPreviewImages(event.images.map((img) => img.url));
    setEditId(event._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/events/${id}`);
      toast.success("Event deleted successfully!");
      fetchEvents();
    } catch (error) {
      console.error("Error deleting event:", error);
      toast.error("Failed to delete event. Please try again.");
    }
  };

  // Filter events based on search term and selected month
  const filteredEvents = events.filter((event) => {
    // Filter by search term (event name)
    if (searchTerm && !event.name.toLowerCase().includes(searchTerm.toLowerCase())) {
      return false;
    }
    // Filter by month if a month is selected
    if (filterMonth !== "all") {
      const eventMonth = new Date(event.date).getMonth(); // getMonth returns 0 for January, 1 for February, etc.
      if (eventMonth !== parseInt(filterMonth)) {
        return false;
      }
    }
    return true;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredEvents.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentEvents = filteredEvents.slice(indexOfFirstItem, indexOfLastItem);

  // Date formatting options (e.g. January 15, 2024)
  const dateOptions = { month: "long", day: "numeric", year: "numeric" };

  return (
    <div className="min-h-screen bg-white p-8 mt-20 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-red-800">Event Management</h1>
            <p className="text-gray-600">Manage your events seamlessly</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowForm(true);
              setEditId(null);
              setName("");
              setDate("");
              setImages([]);
              setPreviewImages([]);
            }}
            className="flex items-center gap-2 px-5 py-3 bg-red-900 hover:bg-red-950 text-white font-medium rounded-xl shadow-lg transition-all"
          >
            <Plus size={20} />
            Add Event
          </motion.button>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search events..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-1/2 pl-10 pr-4 py-3 bg-white rounded-xl border border-gray-200 shadow-sm"
            />
            <svg
              className="absolute left-3 top-3.5 text-gray-400 h-5 w-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <select
            value={filterMonth}
            onChange={(e) => setFilterMonth(e.target.value)}
            className="px-4 py-3 bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <option value="all">All</option>
            <option value="0">January</option>
            <option value="1">February</option>
            <option value="2">March</option>
            <option value="3">April</option>
            <option value="4">May</option>
            <option value="5">June</option>
            <option value="6">July</option>
            <option value="7">August</option>
            <option value="8">September</option>
            <option value="9">October</option>
            <option value="10">November</option>
            <option value="11">December</option>
          </select>
        </div>

        {/* Events Table */}
        {filteredEvents.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 bg-white rounded-sm border-2 border-dashed border-gray-200 text-center"
          >
            <div className="text-yellow-500 mb-4">
              <ImageIcon size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No events found</h3>
            <p className="text-gray-500">Create your first event</p>
          </motion.div>
        ) : (
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Name
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Date
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Images
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentEvents.map((event) => {
                  const eventDate = new Date(event.date);
                  return (
                    <motion.tr
                      key={event._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {event.name}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          {eventDate.toLocaleDateString("en-US", dateOptions)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <div className="flex items-center gap-2">
                          {event.images &&
                            event.images.map((img, index) => (
                              <img
                                key={index}
                                src={img.url}
                                alt={`event-${index}`}
                                className="w-12 h-12 object-cover rounded"
                              />
                            ))}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEdit(event)}
                          className="text-yellow-600 hover:text-yellow-900 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(event._id)}
                          className="text-red-600 hover:text-red-900 p-2 rounded-lg hover:bg-red-50 transition-colors"
                        >
                          <Trash2 size={18} />
                        </button>
                      </td>
                    </motion.tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-end items-center gap-4 mt-8">
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage((prev) => Math.max(1, prev - 1))}
              disabled={currentPage === 1}
              className="px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50"
            >
              Previous
            </motion.button>
            <span className="text-sm text-gray-600">
              Page {currentPage} of {totalPages}
            </span>
            <motion.button
              whileTap={{ scale: 0.95 }}
              onClick={() => setCurrentPage((prev) => Math.min(totalPages, prev + 1))}
              disabled={currentPage === totalPages}
              className="px-4 py-2 bg-white border border-gray-200 rounded-xl hover:bg-gray-50 disabled:opacity-50"
            >
              Next
            </motion.button>
          </div>
        )}

        {/* Modal Form */}
        <AnimatePresence>
          {showForm && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 bg-black/30 backdrop-blur-sm flex items-center justify-center p-4"
            >
              <motion.div
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                className="bg-white rounded-2xl shadow-2xl w-full max-w-md"
              >
                <div className="p-6 border-b border-gray-100 flex justify-between items-center">
                  <h2 className="text-xl font-semibold">
                    {editId ? "Edit Event" : "Create New Event"}
                  </h2>
                  <button
                    onClick={() => {
                      setShowForm(false);
                      setEditId(null);
                    }}
                    className="p-2 hover:bg-gray-100 rounded-lg text-gray-500 hover:text-gray-700"
                  >
                    <X size={20} />
                  </button>
                </div>
                <form onSubmit={handleSubmit} className="p-6 space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Name
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                        placeholder="Enter event name..."
                        required
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Event Date
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                        required
                      />
                      <Calendar className="absolute right-3 top-3 text-gray-400" size={18} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Upload Images
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        multiple
                        onChange={handleImageChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                      />
                      <ImageIcon className="absolute right-3 top-3 text-gray-400" size={18} />
                    </div>
                  </div>
                  {previewImages.length > 0 && (
                    <div className="mb-4">
                      <p className="mb-2 text-gray-700">Image Preview:</p>
                      <div className="flex space-x-2">
                        {previewImages.map((src, index) => (
                          <img
                            key={index}
                            src={src}
                            alt={`preview-${index}`}
                            className="w-20 h-20 object-cover rounded"
                          />
                        ))}
                      </div>
                    </div>
                  )}
                  <div className="flex justify-end gap-3 pt-6">
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={() => setShowForm(false)}
                      className="px-5 py-2.5 text-gray-600 bg-gray-200 hover:bg-gray-400 hover:text-white font-medium rounded-xl"
                    >
                      Cancel
                    </motion.button>
                    <motion.button
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="px-5 py-2.5 bg-blue-900 hover:bg-blue-950 text-white font-medium rounded-xl"
                    >
                      {editId ? "Save Changes" : "Create Event"}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast Notifications */}
        <ToastContainer position="top-right" autoClose={2000} />
      </div>
    </div>
  );
};

export default CreateEventPage;
