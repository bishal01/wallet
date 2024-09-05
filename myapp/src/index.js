import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Userdash from './user/Userdash';
import About from './user/About';
import Home from './user/Home';
import Services from './user/Services';
import Product from './user/Product'

const router=createBrowserRouter(
  [
    {
      path:'/',
      element:<App />,
      children:[
        {
          path:'/',
          element:< Home/>
         },
      
    
     {
      path:'/About',
      element:< About/>
     },
     {
      path:'/Services',
      element:< Services/>
     },
     {
      path:'/Product',
      element:< Product/>
     },

      ]
    }

    
  ])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);

