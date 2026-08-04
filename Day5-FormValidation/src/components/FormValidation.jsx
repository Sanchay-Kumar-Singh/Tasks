import React from "react";
import { useState } from "react";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handlesubmit(e) {
    e.preventDefault();

    if (email === "") {
      alert("Email is required");
      return;
    }

    if (!email.includes("@")) {
      alert("Enter a valid email");
      return;
    }

    if (password === "") {
      alert("Password is required");
      return;
    }

    if (password.length < 8) {
      alert("Password must be at least 8 characters");
      return;
    }

    alert("Login Successful");

    setEmail("");
    setPassword("");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">

      <form
        onSubmit={handlesubmit}
        className="w-[400px] bg-white border rounded-2xl shadow-lg p-8"
      >

        <h1 className="text-3xl font-bold text-center mb-8">
          Form Validation
        </h1>

        <div className="mb-5">
          <label className="block text-lg font-semibold mb-2">
            Email
          </label>

          <input
            type="text"
            placeholder="Write email here..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border-2 rounded-xl p-3 text-base outline-none focus:border-blue-500"
          />
        </div>

        <div className="mb-6">
          <label className="block text-lg font-semibold mb-2">
            Password
          </label>

          <input
            type="password"
            placeholder="Write password here..."
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border-2 rounded-xl p-3 text-base outline-none focus:border-blue-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-black text-white p-3 rounded-xl hover:bg-gray-800"
        >
          Submit
        </button>

      </form>

    </div>
  );
};

export default FormValidation;