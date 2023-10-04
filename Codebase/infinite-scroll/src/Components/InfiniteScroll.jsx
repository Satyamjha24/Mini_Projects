import React, { useState, useEffect } from "react";
import axios from "axios";
import ImageList from "./ImageList";
import SkeletonLoading from "./SkeletonLoading";

function InfiniteScroll() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [initialFetch, setInitialFetch] = useState(true);
  const [skelecount, setSkelecount] = useState(new Array(4).fill(0));

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://randomuser.me/api?results=8&page=${page}`
      );
      const newData = response.data.results;
      setUsers((prevUsers) => [...prevUsers, ...newData]);
      setPage(page + 1);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.scrollHeight - 200 &&
        !isLoading
      ) {
        fetchData();
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [page, isLoading]);

  useEffect(() => {
    if (initialFetch) {
      fetchData();
      setInitialFetch(false);
    }
  }, [initialFetch]);

  return (
    <>
      <div className="p-6 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {users?.map((user, index) => (
            <div
              key={index}
              className="shadow-xl p-4 rounded-lg cursor-pointer bg-white border transform hover:scale-90 transition-transform duration-300"
            >
              <ImageList user={user} />
            </div>
          ))}

          {skelecount.map((_, index) => (
            <div
              key={index}
              className="rounded-lg bg-white border transform hover:scale-90 transition-transform duration-300"
            >
              <SkeletonLoading />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default InfiniteScroll;
