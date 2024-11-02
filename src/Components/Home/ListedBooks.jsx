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

  return (
    <Tabs>
      <TabList>
        <Tab>Read list</Tab>
        <Tab>Wish List</Tab>
      </TabList>

      <TabPanel>
        <h2>Books I Read :{readlist.length} </h2>


        {
          readlist?.map( book=> <Books key={book.bookId} book={book}></Books> )
        }
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
