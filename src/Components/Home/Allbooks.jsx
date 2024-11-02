import React, { useEffect, useState } from 'react';
import Books from './Books';

const Allbooks = () => {

    const [ books, setBooks]= useState([])

    useEffect(()=>{
            fetch('/booksData.json')
            .then(res=>res.json())
            .then(data=>setBooks(data))
    },[])

    return (
        <div className='bg-white px-32 mx-auto'>
            <h2 className='text-black text-3xl hddre text-center py-5 font-bold'> Books </h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 '>
                {
                   books.map(book=> <Books key={book.bookId} book={book}></Books>) 
                }
            </div>
        

        </div>
    );
};

export default Allbooks;