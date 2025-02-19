import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import {
  Edit,
  Trash2,
  FileText,
  Plus,
  X,
  Calendar as CalendarIcon,
  Link2,
} from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { motion, AnimatePresence } from "framer-motion";

const CreateNotice = () => {
  const [notices, setNotices] = useState([]);
  const [title, setTitle] = useState("");
  const [deadline, setDeadline] = useState("");
  const [pdfLink, setPdfLink] = useState("");
  const [editId, setEditId] = useState(null);
  const [showForm, setShowForm] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;
  const navigate = useNavigate();

  useEffect(() => {
    fetchNotices();
  }, []);

  // Reset pagination whenever search/filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [searchTerm, filterStatus]);

  const fetchNotices = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/notices");
      setNotices(response.data);
    } catch (error) {
      console.error("Error fetching notices:", error);
      toast.error("Failed to fetch notices. Please try again.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`http://localhost:5000/api/notices/${editId}`, {
          title,
          deadline,
          pdfLink,
        });
        toast.success("Notice updated successfully!");
      } else {
        await axios.post("http://localhost:5000/api/notices", {
          title,
          deadline,
          pdfLink,
        });
        toast.success("Notice created successfully!");
      }
      fetchNotices();
      setTitle("");
      setDeadline("");
      setPdfLink("");
      setEditId(null);
      setShowForm(false);
    } catch (error) {
      console.error("Error submitting notice:", error);
      toast.error("Failed to submit notice. Please try again.");
    }
  };

  const handleEdit = (notice) => {
    setTitle(notice.title);
    setDeadline(notice.deadline);
    setPdfLink(notice.pdfLink);
    setEditId(notice._id);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/notices/${id}`);
      toast.success("Notice deleted successfully!");
      fetchNotices();
    } catch (error) {
      console.error("Error deleting notice:", error);
      toast.error("Failed to delete notice. Please try again.");
    }
  };

  // Date format options for "January 15, 2024"
  const dateOptions = { month: "long", day: "numeric", year: "numeric" };

  // Animation variants for the modal
  const modalVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  // Filter notices based on search term and filter option
  const filteredNotices = notices.filter((notice) => {
    // Search filter by title
    if (
      searchTerm &&
      !notice.title.toLowerCase().includes(searchTerm.toLowerCase())
    ) {
      return false;
    }
    // Filter by deadline status
    const noticeDeadline = new Date(notice.deadline);
    const today = new Date();
    today.setHours(0, 0, 0, 0); // reset today's time to midnight
    if (filterStatus === "upcoming" && noticeDeadline < today) return false;
    if (filterStatus === "past" && noticeDeadline >= today) return false;
    return true;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredNotices.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentNotices = filteredNotices.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div className="container mx-auto py-10 px-4 max-w-7xl">
      {/* Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8 gap-4">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Notice Management
          </h1>
          <p className="text-gray-500 mt-1">
            Manage school announcements and deadlines
          </p>
        </div>
        <button
          onClick={() => {
            setShowForm(true);
            setEditId(null);
          }}
          title="Add Notice"
          className="flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2.5 px-5 rounded-lg transition-all"
        >
          <Plus size={18} className="mr-2" />
          Add Notice
        </button>
      </div>

      {/* Search and Filter Options */}
      <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
        <input
          type="text"
          placeholder="Search notices..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          title="Search notices"
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        />
        <select
          value={filterStatus}
          onChange={(e) => setFilterStatus(e.target.value)}
          title="Filter notices"
          className="w-full sm:w-auto px-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
        >
          <option value="all">All</option>
          <option value="upcoming">Upcoming</option>
          <option value="past">Past</option>
        </select>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {showForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 backdrop-blur-sm"
          >
            <motion.div
              variants={modalVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-xl font-semibold">
                  {editId ? "Edit Notice" : "Create New Notice"}
                </h2>
                <button
                  onClick={() => {
                    setShowForm(false);
                    setEditId(null);
                  }}
                  title="Close Form"
                  className="text-gray-400 hover:text-gray-600 rounded-lg p-1"
                >
                  <X size={20} />
                </button>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Title
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="Notice title..."
                      required
                    />
                    <FileText
                      className="absolute right-3 top-3 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    Deadline
                  </label>
                  <div className="relative">
                    <input
                      type="date"
                      value={deadline}
                      onChange={(e) => setDeadline(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">
                    PDF Link
                  </label>
                  <div className="relative">
                    <input
                      type="url"
                      value={pdfLink}
                      onChange={(e) => setPdfLink(e.target.value)}
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                      placeholder="https://drive.google.com/..."
                      required
                    />
                    <Link2
                      className="absolute right-3 top-3 text-gray-400"
                      size={18}
                    />
                  </div>
                </div>

                <div className="flex justify-end gap-3 mt-8">
                  <button
                    type="button"
                    onClick={() => {
                      setShowForm(false);
                      setEditId(null);
                    }}
                    title="Cancel"
                    className="px-5 py-2.5 text-gray-600 hover:text-gray-800 font-medium rounded-lg transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    title={editId ? "Save Changes" : "Create Notice"}
                    className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
                  >
                    {editId ? "Save Changes" : "Create Notice"}
                  </button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Notices Table */}
      {filteredNotices.length === 0 ? (
        <div className="text-center py-16 rounded-xl bg-gray-50 border-2 border-dashed">
          <div className="text-gray-400 mb-3">No notices found</div>
          <div className="text-gray-500 text-sm">
            Click "Add Notice" to create a new announcement
          </div>
        </div>
      ) : (
        <div className="overflow-x-auto relative">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Title
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Deadline
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  PDF Link
                </th>
                <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {currentNotices.map((notice) => (
                <tr key={notice._id}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                    {notice.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {new Date(notice.deadline).toLocaleDateString(
                      "en-US",
                      dateOptions
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    <a
                      href={notice.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="View PDF Document"
                      className="text-blue-600 hover:text-blue-800"
                    >
                      View PDF
                    </a>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                    <button
                      onClick={() => handleEdit(notice)}
                      title="Edit Notice"
                      className="text-blue-600 hover:text-blue-900 mr-3"
                    >
                      <Edit size={18} />
                    </button>
                    <button
                      onClick={() => handleDelete(notice._id)}
                      title="Delete Notice"
                      className="text-red-600 hover:text-red-900"
                    >
                      <Trash2 size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {/* Pagination Controls Positioned at Bottom Right */}
          {totalPages > 1 && (
            <div className="flex justify-end items-center mt-4 space-x-4">
              <button
                onClick={() =>
                  setCurrentPage((prev) => (prev > 1 ? prev - 1 : prev))
                }
                disabled={currentPage === 1}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                title="Previous Page"
              >
                Previous
              </button>
              <span className="text-sm text-gray-700">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() =>
                  setCurrentPage((prev) =>
                    prev < totalPages ? prev + 1 : prev
                  )
                }
                disabled={currentPage === totalPages}
                className="px-3 py-1 bg-gray-200 rounded hover:bg-gray-300 disabled:opacity-50"
                title="Next Page"
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {/* Toast Notifications */}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
};

export default CreateNotice;
