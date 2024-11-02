// import React from 'react';

import { useLoaderData, useParams } from "react-router-dom";
import { addToStoredreadlist } from "../Utility/Utility";

const Bookdetails = () => {
  const { bookId } = useParams();
  const data = useLoaderData();
  const id = parseInt(bookId);
  const book = data.find((book) => book.bookId === id);
  // console.log(typeof data[0].bookId ,typeof id,typeof bookId);
  console.log(book);
  const {
    bookName,
    yearOfPublishing,
    image,
    publisher,
    tags,
    author,
    totalPages,
    category,
    rating,
    review,
  } = book;

  const handlemarkasread = (id) => {
    addToStoredreadlist(id);
  };

  return (
    <div className="hero bg-white min-h-screen py-10">
      <div className="hero-content flex-col lg:flex-row gap-10">
        <img
          src={image}
          className="w-[500px] p-10 bg-slate-100 rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold hddre my-2">{bookName}</h1>
          <p className="text-black py-3">By : {author}</p>
          <div className="divider"></div>
          <p className="text-[#131313B3]">{category}</p>
          <div className="divider"></div>

          <p className="py-6 text-[#131313B3]">
            <span className="font-bold text-black">Review</span>:{review}
          </p>
          <div className="flex gap-5 pb-2">
            <p>
              <span className="font-bold text-black">Tag</span>
            </p>
            {tags.map((tag, index) => (
              <button
                key={index}
                className="btn text-base bg-white text-green-500 border-none btn-xs"
              >
                #{tag}
              </button>
            ))}
          </div>
          <div className="divider"></div>
          <div className="flex gap-9">
            <div className="text-[#131313B3]">
              <p>Number of Pages : </p>
              <p>Publisher: </p>
              <p>Year of Publishing: </p>
              <p>Rating: : </p>
            </div>
            <div className="text-black">
              <p>{totalPages}</p>
              <p>{publisher}</p>
              <p>{yearOfPublishing}</p>
              <p>{rating}</p>
            </div>
          </div>
          <div className="py-4">
            <button
              onClick={() => handlemarkasread(bookId)}
              className="btn border-[1px] text-black border-gray-400  bg-[#ffffff]"
            >
              Read
            </button>
            <button className="btn text-black ml-5 border-[1px] border-gray-400  bg-[#50B1C9]">
              Wishlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookdetails;
