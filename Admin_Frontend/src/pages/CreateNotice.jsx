import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Edit, Trash2, FileText, Plus, X, Calendar, Link2 } from "lucide-react";
import { ToastContainer, toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import "react-toastify/dist/ReactToastify.css";

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
    <div className="min-h-screen bg-white p-8 mt-20 font-inter">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div className="space-y-2">
            <h1 className="text-3xl font-bold text-red-800">
              Notice Management
            </h1>
            <p className="text-gray-600">Manage academic announcements</p>
          </div>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              setShowForm(true);
              setEditId(null);
            }}
            className="flex items-center gap-2 px-5 py-3 bg-red-900 hover:bg-red-950 text-white font-medium rounded-xl shadow-lg transition-all"
          >
            <Plus size={20} />
            Add Notice
          </motion.button>
        </div>

        {/* Search and Filter Bar */}
        <div className="mb-8 flex flex-col sm:flex-row gap-4">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="Search notices..."
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
            value={filterStatus}
            onChange={(e) => setFilterStatus(e.target.value)}
            className="px-4 py-3 bg-white rounded-xl border border-gray-200 shadow-sm"
          >
            <option value="all">All</option>
            <option value="upcoming">Upcoming</option>
            <option value="past">Past</option>
          </select>
        </div>

        {/* Notices Table */}
        {filteredNotices.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="p-12 bg-white rounded-sm border-2 border-dashed border-gray-200 text-center"
          >
            <div className="text-yellow-500 mb-4">
              <FileText size={48} strokeWidth={1.5} />
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">No notices found</h3>
            <p className="text-gray-500">Create your first announcement</p>
          </motion.div>
        ) : (
          <div className="bg-white rounded-sm shadow-sm overflow-hidden">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Deadline
                  </th>
                  <th className="px-6 py-3 text-left text-sm font-medium text-gray-500 uppercase tracking-wider">
                    PDF Link
                  </th>
                  <th className="px-6 py-3 text-right text-sm font-medium text-gray-500 uppercase tracking-wider">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {currentNotices.map((notice) => {
                  const noticeDate = new Date(notice.deadline);
                  const isPast = noticeDate < new Date();

                  return (
                    <motion.tr
                      key={notice._id}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      className="hover:bg-gray-50 transition-colors"
                    >
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {notice.title}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <div className="flex items-center gap-2">
                          <Calendar size={16} className="text-gray-400" />
                          {noticeDate.toLocaleDateString("en-US", dateOptions)}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm">
                        <a
                          href={notice.pdfLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-600 hover:text-blue-800 flex items-center gap-2"
                        >
                          <Link2 size={16} />
                          View PDF
                        </a>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                        <button
                          onClick={() => handleEdit(notice)}
                          className="text-yellow-600 hover:text-yellow-900 p-2 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Edit size={18} />
                        </button>
                        <button
                          onClick={() => handleDelete(notice._id)}
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
          <div className="flex justify-end items-center gap-4 mt-8 ">
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
                    {editId ? "Edit Notice" : "Create New Notice"}
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
                      Title
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl "
                        placeholder="Notice title..."
                        required
                      />
                      <FileText className="absolute right-3 top-3 text-gray-400" size={18} />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Deadline
                    </label>
                    <div className="relative">
                      <input
                        type="date"
                        value={deadline}
                        onChange={(e) => setDeadline(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl"
                        required
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      PDF Link
                    </label>
                    <div className="relative">
                      <input
                        type="url"
                        value={pdfLink}
                        onChange={(e) => setPdfLink(e.target.value)}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl "
                        placeholder="https://example.com/document.pdf"
                        required
                      />
                      <Link2 className="absolute right-3 top-3 text-gray-400" size={18} />
                    </div>
                  </div>

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
                      className="px-5 py-2.5 bg-red-900 hover:bg-red-950 text-white font-medium rounded-xl"
                    >
                      {editId ? "Save Changes" : "Create Notice"}
                    </motion.button>
                  </div>
                </form>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Toast Notifications */}
        <ToastContainer position="bottom-right" autoClose={3000} />
      </div>
    </div>
  );
};

export default CreateNotice;