import React, { useState } from "react";
import API from "../api/axios";
import { Link, useNavigate } from "react-router-dom";

function ArtistLogin() {
  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/api/auth/login", form);

      if (res.data.user.role !== "artist") {
        alert("Only artists can login here.");
        return;
      }

      alert("Login Successful!");
      navigate("/upload");
    } catch (err) {
      const message = err.response?.data?.message;

      if (message === "User not found" || err.response?.status === 404) {
        alert("Account not found. Please sign up first.");
      } else if (
        message === "Invalid credentials" ||
        err.response?.status === 401
      ) {
        alert("Invalid email or password.");
      } else {
        alert("Login failed. Please try again.");
      }

      console.error(err);
    }
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse gap-12">
        <div className="text-center lg:text-left max-w-lg">
          <h1 className="text-5xl font-bold">Artist Login</h1>
          <p className="py-6">
            Sign in to your artist account to upload your music, manage your
            albums, and connect with your audience.
          </p>
        </div>

        <div className="card bg-base-100 w-full max-w-sm shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleLogin}>
              <fieldset className="fieldset">
                <label className="label">Artist Email</label>
                <input
                  type="email"
                  name="email"
                  className="input w-full"
                  placeholder="Enter your artist email"
                  value={form.email}
                  onChange={handleChange}
                  required
                />

                <label className="label mt-3">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input w-full"
                  placeholder="Enter your password"
                  value={form.password}
                  onChange={handleChange}
                  required
                />

                <p className="mt-4 text-sm">
                  Don't have an artist account?{" "}
                  <Link
                    to="/signUp"
                    className="text-red-500 hover:text-red-600 font-semibold"
                  >
                    Sign Up First
                  </Link>
                </p>

                <button
                  type="submit"
                  className="btn btn-neutral mt-6 w-full"
                >
                  Login & Start Creating Music
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistLogin;