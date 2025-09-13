import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const validate = () => {
    const newErrors = {};
    if (!form.name) newErrors.name = "Name is required";
    if (!form.email) newErrors.email = "Email is required";
    if (!form.phone) newErrors.phone = "Phone is required";
    if (!form.service) newErrors.service = "Please select a service";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      console.log("Registered user:", form);
      navigate("/book");
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-600">User Registration</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            name="name"
            placeholder="Full Name"
            onChange={handleChange}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}

          <input
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}

          <input
            name="phone"
            placeholder="Phone Number"
            onChange={handleChange}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
          {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}

          <select
            name="service"
            onChange={handleChange}
            className="border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
          >
            <option value="">Select Service</option>
            <option value="license">License</option>
            <option value="registration">Vehicle Registration</option>
          </select>
          {errors.service && <p className="text-red-500 text-sm">{errors.service}</p>}

          <button
            type="submit"
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
