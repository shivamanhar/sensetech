import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom';
import Header from './Header';
import Aboutus from './Aboutus';
import HomePage from './HomePage';
import ErrorPage from './ErrorPage';
import TestHeader from './TestHeader';
import Hometest from './Hometest';

const router = createBrowserRouter([
  {
    path:'',
    element:<Header/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'',
        element:<HomePage/>,
        errorElement:<ErrorPage/>,
      },
      {
        path:'aboutus',
        element:<Aboutus/>,
        errorElement:<ErrorPage/>,
      },

    ]
  },
  {
    path:"test",
    element:<TestHeader/>,
    errorElement:<ErrorPage/>,
    children:[
      {
        path:'hometest',
        element:<Hometest/>
      }
    ]
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
