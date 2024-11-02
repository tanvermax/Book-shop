import React from "react";
import { Link } from "react-router-dom";

const Books = ({ book }) => {
  const { bookName, image, tags, author, category, rating,bookId ,totalPages} = book || {}

  console.log(book);
  
  return (
    <Link to={`/books/${bookId}`}>
      <div className="card   md:w-96 h-full border-[1px] p-6 shadow-xl">
        <figure className="rounded-xl py-8 bg-gray-200">
          <img className="h-[166px]" src={image} alt={bookName} />
        </figure>
        <div className="card-body">
          <div className="flex gap-4">
            {tags?.map((tag,index) => (
              <button key={index} className="btn bg-green-100 text-green-500 border-none btn-xs">
                {tag}
              </button>
            ))}
          </div>
          <h2 className="card-title hddre">{bookName}</h2>
          <p className="text-black">By : {author}</p>
          <div className="border-2 border-dashed"></div>
          <div className="card-actions justify-between">

            <div className="badge badge-outline">{totalPages}</div>
            <div className="badge badge-outline">{category}</div>
            <div className="rating">
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
                defaultChecked
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-500"
              />
              <input
                type="radio"
                name="rating-4"
                className="mask mask-star-2 bg-green-100"
              />
            </div>
          </div> {
          // readlist.map( book=> <Books key={book.bookId} books={books}></Books> )
        }
        </div>
      </div>
    </Link>
  );
};

export default Books;
