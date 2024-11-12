import axios from "../axios/axios";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import Navi from "./navbar";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/login", { email, password });
      localStorage.setItem("token", response.data.token);
      console.log(response.data.token);
      navigate("/home");
    } catch (err) {
      setError(err.response.data.message);
      console.error("error is : ", err);
    }
  };

  const toRegister = () => {
    navigate("/register");
  };

  return (
    <div>
      <Navi></Navi>
      <form className="max-w-sm mx-auto" onSubmit={handleSubmit}>
        {error && <div classNameName="error-message">{error}</div>}

        <h1 className="mb-4 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-6xl">Login Page</h1>

        <br /><br />

        <div className="mb-5">
          <label
            htmlFor="email"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your email
          </label>
          <input
            type="email"
            id="email"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="name@flowbite.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-5">
          <label
            htmlFor="password"
            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Your password
          </label>
          <input
            type="password"
            id="password"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Submit
        </button>
        <br />
        <br />

        <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">New User? <span onClick={toRegister} style={{ cursor: "pointer" }} className="font-medium text-blue-600 hover:underline dark:text-blue-500">Register Here</span>.</p>  
      </form>
    </div>
  );
};

export default Login;
