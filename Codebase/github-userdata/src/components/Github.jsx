import React, { useState } from "react";
import UserCard from "./UserCard";
import axios from "axios";
import ThemeToggle from "./ThemeToggle";

const Github = () => {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);

  const fetchUserData = async () => {
    try {
      const response = await axios.get(
        `https://api.github.com/users/${username}`
      );
      setUser(response.data);
    } catch (error) {
      console.error("Error fetching user data:", error);
      setUser(null);
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      fetchUserData();
    }
  };

  return  (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 dark:bg-gray-900">
        <div className="flex">

      <h1 className="text-3xl font-semibold mb-4 dark:text-white mr-2">Github User's Data</h1>

      <ThemeToggle />
        </div>
      <div className="mb-4 mt-4">
        <input
          type="text"
          placeholder="Enter GitHub username"
          className="border rounded-md p-2 dark:bg-gray-800 dark:text-white font-semibold text-lg"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          onKeyPress={handleKeyPress}
        />
        <button
          onClick={fetchUserData}
          className="ml-2 px-4 py-2 font-bold text-lg bg-blue-600 text-white rounded-md"
        >
          Search
        </button>
      </div>
      {user && <UserCard user={user} />}
    </div>
  );
};

export default Github;
