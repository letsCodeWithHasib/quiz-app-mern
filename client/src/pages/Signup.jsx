import { useState } from "react";
import axios from "axios";

const Signup = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, password, confirm } = formData;
    if (password === confirm) {
      axios
        .get("/api/random")
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(
            "Error fetching data:",
            error.response ? error.response.data : error.message
          );
          // Optionally, display an error message to the user
          alert(
            "Failed to fetch data from the server. Please try again later."
          );
        });
    } else {
      return alert("not same");
    }
  };
  return (
    <main className="min-h-screen p-1 bg-indigo-100">
      <div className="mt-10">
        <h1 className=" text-center font-bold text-5xl">Signup Page</h1>
        <form
          onSubmit={handleSubmit}
          className="shadow-2xl bg-indigo-500/100 p-10 mx-auto max-w-[400px] rounded-xl mt-10 flex gap-5 flex-col"
        >
          <input
            className="p-2 rounded"
            name="name"
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded"
            type="email"
            name="email"
            required
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded"
            type="password"
            placeholder="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <input
            className="p-2 rounded"
            type="password"
            placeholder="Confirm Password"
            name="confirm"
            value={formData.confirm}
            onChange={handleChange}
          />
          <div className="text-center">
            <button className="text-black mt-5 bg-white font-semibold rounded text-lg p-2 ">
              Create Account
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

export default Signup;
