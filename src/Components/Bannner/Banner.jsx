import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
        <div  className='flex p-32 bg-white'>
            <div>
                <h1 className='pr-10 pb-10 md:text-6xl hddre'>Books to freshen up your bookshelf</h1>

        <a className="btn  bg-[#23BE0A] border-none text-[18px] text-white">View The List</a>

            </div>
            <img className='h-[394px]' src="./../../../photo/thebook.png" alt="" />
        </div>
    );
};

export default Banner;