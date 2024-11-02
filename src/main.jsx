import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Components/Root/Root';
import Errorpage from './Components/Errorpage/Errorpage';
import Home from './Components/Home/Home';
import Dashbord from './Components/Dashbord/Dashbord';
import ListedBooks from './Components/Home/ListedBooks';
import Bookdetails from './Components/Home/Bookdetails';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// import App from './App.jsx' 

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Errorpage></Errorpage>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path:'books/:bookId',
        element: <Bookdetails></Bookdetails>,
        loader:()=> fetch('/booksData.json')
      },
      {
        path:'dashbord',
        element:<Dashbord></Dashbord>
      },
      {
        path: 'listedbooks',
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json'),
        
      },
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
