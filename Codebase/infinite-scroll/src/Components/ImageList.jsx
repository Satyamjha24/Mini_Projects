import React from "react";

const ImageList = ({ user }) => {
  return (
    <div className="max-w-sm p-4  md:p-2 dark:border-gray-700">
      <img
        src={user.picture.large}
        className="w-1/2 mx-auto mb-4 rounded-lg w-80 shadow-md"
        alt={user.name.first}
      />
      <p className="text-center mb-2">
        <b>Name :</b> {`${user.name.first} ${user.name.last}`}
      </p>
      <p className="text-center">
        <b>Country :</b> {`${user.location.country}`}
      </p>
    </div>
  );
};

export default ImageList;
