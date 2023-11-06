import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import AllJobs from "../Pages/AllJobs/AllJobs";
import AppliedJobs from "../Pages/AppliedJobs/AppliedJobs";
import MyJobs from "../Pages/MyJobs/MyJobs";
import AddAJob from "../Pages/AddAJob/AddAJob";
import Blogs from "../Pages/Blogs/Blogs";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import UserProfile from "../Pages/UserProfile/UserProfile";
import JobDetails from "../components/JobDetails/JobDetails";
import PrivateRoute from "../PrivateRoute/PrivateRoute";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path: "/all-jobs",
                element: <AllJobs></AllJobs>,
                loader: () => fetch('http://localhost:5000/jobs')
            },
            {
                path: "/applied-jobs",
                element: <PrivateRoute><AppliedJobs></AppliedJobs></PrivateRoute>
            },
            {
                path: "/my-jobs",
                element: <MyJobs></MyJobs>
            },
            {
                path: "/add-a-job",
                element: <AddAJob></AddAJob>
            },
            {
                path: "/blogs",
                element: <Blogs></Blogs>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/user-profile",
                element: <UserProfile></UserProfile>
            },
            {
                path: "/jobs/:id",
                element: <PrivateRoute><JobDetails></JobDetails></PrivateRoute>
            }
        ]
    }
])

export default router;