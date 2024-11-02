import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredReadlist } from "../Utility/Utility";
import Books from "./Books";
// import Bookdetails from "./Bookdetails";
// import Books from "./Books";

const ListedBooks = () => {
  const [readlist, setReadlist] = useState([]);
  const [sort, setsort] = useState("");

  const allbooks = useLoaderData();
  // we will directly readbook list from database

  useEffect(() => {
    const storReadList = getStoredReadlist();
    // console.log(storReadList);

    const storeReadlistInt = storReadList.map((id) => parseInt(id));
    // console.log(storedList,allbooks,storeReadlistInt);
    const readbook = allbooks.filter((book) =>
      storeReadlistInt.includes(book.bookId)
    );
    console.log(readbook);

    setReadlist(readbook);
  }, []);
  // console.log(readlist);

  // const [wiselist, setWiselist] = useState([]);

  // useEffect(() => {
  //   const storedList = getStoredWiselist();
  //   const storedWiseListstr = storedList.map((id) => parseInt(id));
  //   // console.log();
  //   const readbook = allbooks.filter((book) =>
  //     storedWiseListstr.includes(book.bokId)
  //   );
  //   setWiselist(readbook);
  // }, []);

  const handlesort = (sortType) => {
    setsort(sortType);

    if (sortType === "No of pages") {
      const sortedReadlist = [...readlist].sort(
        (a, b) => a.totalPages - b.totalPages
      );
    setReadlist(sortedReadlist);
      
    }
    else if (sortType==="rating") {
      const sortedReadlist = [...readlist].sort(
        (a, b) => a.rating - b.rating
      );
    setReadlist(sortedReadlist);

    }
  };

  return (
    <Tabs className="px-20">
      <TabList>
        <Tab>Read list</Tab>
        <Tab>Wish List</Tab>
      </TabList>

      <TabPanel>
        <div className="flex gap-10 items-center py-6">
          <h2>Books I Read :{readlist.length} </h2>

          <details className="dropdown">
            <summary className="btn m-1">
              {sort ? `Sort by: ${sort}` : "Sort by"}
            </summary>
            <ul className="menu dropdown-content bg-base-100  rounded-box z-[1] w-52 p-2 shadow">
              <li onClick={() => handlesort("rating")}>
                <a className="text-white">Rating</a>
              </li>
              <li onClick={() => handlesort("No of pages")}>
                <a className="text-white">No of page</a>
              </li>
            </ul>
          </details>
        </div>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {readlist?.map((book) => (
            <Books key={book.bookId} book={book}></Books>
          ))}
        </div>
        {/* {readlist.map((book) => (
          <Books key={book.bookId} books={books}></Books>
        ))} */}
      </TabPanel>
      <TabPanel>
        <h2>My wish List</h2>
      </TabPanel>
    </Tabs>
  );
};

export default ListedBooks;
