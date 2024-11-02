import React from "react";
import './Navber.css'
import { Link } from "react-router-dom";
import Home from "../Home/Home";
const Navber = () => {

  const links=<>
  <Link to={'./'} className="btn bg-white border-[1px] border-[#23BE0A] text-[18px] text-[#23BE0A]">Home</Link>
  <li><Link to={'./listedbooks'} ><a href="">Listed Books</a></Link></li>
  <li><Link to={'./dashbord'}><a href="">Pages to Read </a></Link> </li>
  
  
  </>
  return (
    <div className="navbar bg-white py-8  lg:px-32">
      <div className="navbar-start">
      
        <a className="btn btn-ghost text-3xl text-[#131313]">Book Vibe</a>
      </div>
      <div className="navbar-center  lg:flex">
        <ul className="menu menu-horizontal px-1">

          {links}
         
        </ul>
      </div>
      <div className="navbar-end gap-3">
        <a className="btn bg-[#23BE0A] border-none text-[18px] text-white">Sign In</a>
        <a className="btn bg-[#59C6D2] border-none text-[18px] text-white">Sign Up</a>
      </div>
    </div>
  );
};

export default Navber;


//  <li>
            
{/* <Link to={'./'} className="btn bg-white border-[1px] border-[#23BE0A] text-[18px] text-[#23BE0A]">Home</Link>
{/* <a className="btn bg-white border-[1px] border-[#23BE0A] text-[18px] text-[#23BE0A]"></a> */}
// </li>
{/* <li> */}
{/* <Link to={'./listedbooks'} >Listed Books</Link> */}

{/* <a href="">Listed Books</a> */}
// </li>
{/* <li> */}
{/* <Link to={'./dashbord'}>Pages to Read </Link> */}
{/* <a>Pages to Read</a> */}
// </li> */}