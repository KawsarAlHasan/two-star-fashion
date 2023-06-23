import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Signup from "../pages/login/Signup";
import PrivateRoute from "./PrivateRoute";
import DashboardLayout from "../layout/DashboardLayout";
import MyAppointment from "../pages/dashboard/MyAppointment";
import AllUsers from "../pages/dashboard/AllUsers";
import AdminRoute from "./AdminRoute";
import AddDoctor from "../pages/dashboard/AddProduct";
import ManageDoctors from "../pages/dashboard/ManageDoctors";
import Payment from "../pages/dashboard/Payment";
import DisplayError from "../components/DisplayError";
import Doctors from "../pages/Doctors/Doctors";
import AddProduct from "../pages/dashboard/AddProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <DisplayError />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <Signup></Signup>,
      },
      // {
      //   path: "/doctors",
      //   element: <Doctors />,
      // },
      // {
      //   path: "/appointment",
      //   element: (
      //     <PrivateRoute>
      //       <Appointment></Appointment>
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout />
      </PrivateRoute>
    ),
    errorElement: <DisplayError />,
    children: [
      {
        path: "/dashboard",
        element: <MyAppointment />,
      },
      {
        path: "/dashboard/allusers",
        element: (
          <AdminRoute>
            <AllUsers />
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/addProduct",
        element: (
          <AdminRoute>
            <AddProduct></AddProduct>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/managedoctors",
        element: (
          <AdminRoute>
            <ManageDoctors></ManageDoctors>
          </AdminRoute>
        ),
      },
      {
        path: "/dashboard/payment/:id",
        element: (
          <AdminRoute>
            <Payment />
          </AdminRoute>
        ),
        loader: ({ params }) =>
          fetch(`http://localhost:5000/bookings/${params.id}`),
      },
    ],
  },
]);

export default router;
