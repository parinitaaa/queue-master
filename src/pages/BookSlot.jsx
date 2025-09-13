import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BookSlot() {
  const navigate = useNavigate();
  const [slot, setSlot] = useState("");
  const [error, setError] = useState("");

  const availableSlots = [
    "09:00 AM",
    "09:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!slot) {
      setError("Please select a slot.");
      return;
    }
    localStorage.setItem("bookedSlot", slot);
    navigate("/token");
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">Book a Slot</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <label className="font-semibold">Select a Time Slot:</label>
          <select
            value={slot}
            onChange={(e) => setSlot(e.target.value)}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">-- Choose a Slot --</option>
            {availableSlots.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
          {error && <p className="text-red-500 text-sm">{error}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Book Slot
          </button>
        </form>
      </div>
    </div>
  );
}
