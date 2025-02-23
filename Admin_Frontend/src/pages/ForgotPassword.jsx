import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
  const [adminNumber, setAdminNumber] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { adminNumber });
      
      toast.success(response.data.message, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
      
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong.", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 font-inter">
      <ToastContainer />
      
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Forgot Password</h2>
        <p className="text-sm text-gray-500 text-center">Enter your Admin Number to reset your password</p>

        <form onSubmit={handleForgotPassword} className="mt-6">
          <div>
            <label className="block text-gray-700">Admin Number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-red-900"
              placeholder="Enter your Admin Number"
              value={adminNumber}
              onChange={(e) => setAdminNumber(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-red-900 text-white py-2 rounded hover:bg-red-950 transition duration-300"
            disabled={loading}
          >
            {loading ? "Processing..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ForgotPassword;