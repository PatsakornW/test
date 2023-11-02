import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Dashboard from './pages/dashboard.jsx';
import Deposits from './pages/deposits.jsx';
import Withdraws from './pages/withdraws.jsx';
import Customer from './pages/customer.jsx';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/deposits",
        element: <Deposits />,
      },
      {
        path: "/withdraws",
        element: <Withdraws />,
      },
      {
        path: "/customer",
        element: <Customer />,
      },
    ],
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <RouterProvider router={router} />
  </React.StrictMode>
)
