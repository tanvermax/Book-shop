import './Root.css'
import { Outlet } from 'react-router-dom';
import Footer from '../footer/Footer';
import Navber from '../Navber/Navber';

const Root = () => {
    return (
        <div className=''>
            <Navber></Navber>


            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;