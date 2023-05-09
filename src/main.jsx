import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './components/Main.jsx';
import Home from './components/Home.jsx';
import AddChocolate from './components/AddChocolate.jsx';
import UpdatedChocolate from './components/UpdatedChocolate.jsx';
import Details from './components/Details.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader:()=> fetch('http://localhost:5000/chocolates')
      },
      {
        path:'addchocolate',
        element:<AddChocolate></AddChocolate>
      },
      {
        path:'chocolates/:id',
        element:<UpdatedChocolate></UpdatedChocolate>,
        loader:({params})=>fetch(`http://localhost:5000/chocolates/${params.id}`)
      },
      {
        path:'detailsChocolate/:id',
        element:<Details></Details>,
        loader:({params})=>fetch(`http://localhost:5000/chocolates/${params.id}`)
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)
