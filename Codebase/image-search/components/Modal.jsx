import React from "react";
const Modal = ({ showModal, onClose, selectedImage }) => {
    const convertDate = (isoDate) => {
        const date = new Date(isoDate);
        return date.toLocaleString(); 
      };

  if (!showModal) return null;
  return (
    <div className="fixed top-0 left-0 right-0 bottom-0 z-50 flex items-center justify-center">
      <div
        className="fixed inset-0 bg-black opacity-70"
        style={{
          backdropFilter: "blur(8px)", 
        }}
      ></div>
      <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl relative">
        <button
          onClick={onClose}
          className="absolute top-1 right-1 text-black hover:text-white hover:bg-red-500 focus:outline-none rounded-full p-1"
        >
            
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M6 18L18 6M6 6l12 12M7 7l6 6m0 0l6-6m-6 6L7 7"
            />
          </svg>
        </button>
        <div className="p-4 text-center">
          <img
            src={selectedImage.urls.full}
            alt={selectedImage.description}
            className="w-full h-96 rounded-xl"
          />
          <p className="text-base leading-relaxed text-black dark:text-black mt-2">
            <b>Total Likes : </b>
            {selectedImage.likes}
          </p>
          {selectedImage.description &&
          <p className="text-base leading-relaxed text-black dark:text-black ">
            <b>Description : </b>
            {selectedImage.description}
          </p>}
          <p className="text-base leading-relaxed text-black dark:text-black ">
            <b>Captured By : </b>
            {selectedImage.user.name}
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-500 ">
            <b className="text-black dark:text-black">Created At :</b>{" "}
            {convertDate(selectedImage.created_at)}
          </p>
        </div>
      </div>
    </div>
  );
};
export default Modal;