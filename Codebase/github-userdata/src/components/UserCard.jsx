import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className=" bg-white dark:bg-gray-800 shadow-md rounded-lg mt-6 border px-4 py-6 md:w-1/4 lg:w-1/4 xl:w-2/7 mx-auto">
      <img
        src={user.avatar_url}
        alt={`${user.login}'s avatar`}
        className="w-24 h-24 rounded-full mx-auto"
      />
      <h2 className="text-xl font-semibold mt-4 text-center dark:text-white">
        Name : {user.name}
      </h2>
      <p className="text-gray-600 text-center dark:text-gray-300">
        <b>Username : </b>{" "}
        <a
          href={user.html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 text-blue-600 hover:underline"
        >
          @{user.login}
        </a>
      </p>

      <div className="mt-4 text-center dark:text-white">
        <span className="mr-4">
          <strong>{user.followers}</strong> Followers
        </span>
        <span className="mr-4">
          <strong>{user.following}</strong> Following
        </span>
        <span className="mr-4">
          <strong>{user.public_repos}</strong> Repos
        </span>
      </div>
      <p className="mt-2 text-center dark:text-gray-300"><b>Bio : </b> {user.bio}</p>
    </div>
  );
};

export default UserCard;
