import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Dashboard from "./pages/Dashboard"
import PublicRoute from "./routes/PublicRoute"
import PrivateRoute from "./routes/PrivateRoute"
import Welcom from "./pages/Welcom"
import Student from "./pages/Student"

const router = createBrowserRouter([
  {
    path: "/",
    element: <PublicRoute component={<Welcom />} />
  },
  {
    path: "/dashboard",
    element: <PrivateRoute component={<Dashboard />} />
  },
  {
    path: "/students",
    element: <PrivateRoute component={<Student />} />
  }
]);


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={router} />);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
