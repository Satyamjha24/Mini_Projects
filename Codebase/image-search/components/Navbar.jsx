import React, { useEffect, useState } from "react";
import ImageCard from "./ImageCard";
import Pagination from "./Pagination";
import PopularSearch from "./PopularSearch";
import Modal from "./Modal";

const Navbar = () => {
  const [searchValue, setSearchValue] = useState("");
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  const [showModal, setShowModal] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const apiKey = process.env.API_KEY;

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      handleGetData(searchValue);
    }
  };

  const handlePageChange = (page) => {
    handleGetData(searchValue, page);
  };

  const handleGetData = (value, page = 1) => {
    setCurrentPage(page);
    setLoading(true);
    fetch(
      `https://api.unsplash.com/search/photos?query=${value}&page=${page}&per_page=24&client_id=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setTotalPages(data.total_pages);
        setLoading(false);
      })
      .catch((err) => {
        setError(true);
        setLoading(false);
      });
  };

  return (
    <>
      <nav className="bg-teal-500  dark:bg-blue-600 p-2 fixed w-screen shadow-lg">
        <div className="max-w-screen-xl mx-auto p-4">
          <div className="flex items-center justify-between">
            <span className="text-3xl font-semibold text-gray-900 dark:text-white mr-4 lg:mr-40 font-serif">
              Image Search
            </span>

            <div className="relative flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
                <span className="sr-only">Search icon</span>
              </div>
              <input
                type="text"
                id="search-navbar"
                className="block w-full p-2 pl-10 text-sm lg:text-xl text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search Something Here ..."
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
                onKeyPress={handleKeyPress}
              />
            </div>
          </div>
        </div>
      </nav>

      <PopularSearch
        onPopularSearch={(searchValue, page) =>
          handleGetData(searchValue, page)
        }
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      {loading && (
        <img
          src="https://cdn.dribbble.com/users/1250197/screenshots/2846554/loading.gif"
          className="m-auto"
          alt="Loading..."
        />
      )}

      {error && (
        <img
          src="https://cdn.dribbble.com/users/774806/screenshots/3823110/media/83278e3383766404500adc75f177bc69.gif"
          className="m-auto mt-4 p-4 border rounded-lg"
          alt="Error fetching data. Please try again later."
        />
      )}

      <Modal
        showModal={showModal}
        onClose={() => setShowModal(false)}
        selectedImage={selectedImage}
      />

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 p-12">
        {data.length > 0 &&
          data.map((item) => <ImageCard key={item.id} item={item} setSelectedImage={setSelectedImage}
          setShowModal={setShowModal}/>)}
      </div>

      {totalPages > 1 && (
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      )}
    </>
  );
};

export default Navbar;
