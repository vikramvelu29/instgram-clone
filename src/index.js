import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Viewstory from './Viewstory';
import Profile from './Profile';

const router=createBrowserRouter([
  {
    path:'/',
    element:<App></App>
  },
  {
    path:'/story/:id/:tot',
    element:<Viewstory></Viewstory>
  },
  {
    path:'/profile',
    element:<Profile></Profile>
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  
    <RouterProvider router={router}></RouterProvider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
