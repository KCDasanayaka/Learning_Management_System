import { useState } from "react";
import axios from "axios";

const ForgotPassword = () => {
  const [adminNumber, setAdminNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleForgotPassword = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");

    try {
      const response = await axios.post("http://localhost:5000/api/auth/forgot-password", { adminNumber });

      setMessage(response.data.message);
    } catch (error) {
      setMessage(error.response?.data?.message || "Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Forgot Password</h2>
        <p className="text-sm text-gray-500 text-center">Enter your Admin Number to reset your password</p>

        {message && <p className="mt-4 text-center text-red-500">{message}</p>}

        <form onSubmit={handleForgotPassword} className="mt-6">
          <div>
            <label className="block text-gray-700">Admin Number</label>
            <input
              type="text"
              className="w-full p-2 border border-gray-300 rounded mt-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter your Admin Number"
              value={adminNumber}
              onChange={(e) => setAdminNumber(e.target.value)}
              required
            />
          </div>

          <button
            type="submit"
            className="w-full mt-4 bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition duration-300"
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
