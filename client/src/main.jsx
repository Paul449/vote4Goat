import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom/dist';
import './index.css';
//import pages
import App from './App.jsx';
import Home from './pages/Home.jsx';
import Login from './pages/Login.jsx';
import SignUp from './pages/signUp.jsx';
import Landing from './pages/Landing.jsx';
import Error from './pages/Error.jsx';
import Profile from './pages/Profile.jsx';
//defining routes
const router = createBrowserRouter([{
  path:'/',
  element: <App/>,
  errorElement: <Error/>,
  children:[
    {
      index:true,
      element:<Landing />
    },
    {
      path:'/Login',
      element:<Login />
    },
    {
      path:'/Home',
      element:<Home />
    },
    {
      path:'/signUp',
      element:<SignUp />
    },
    {
      path:'/Profile',
      element: <Profile />
    }
  ]
}])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
