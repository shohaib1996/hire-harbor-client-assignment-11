import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { motion } from "framer-motion"


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)


    const links = (
        <>
            <li>
                <NavLink
                    to="/"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-600" : ""
                    }
                >
                    Home
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/all-jobs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-600" : ""
                    }
                >
                    All Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/applied-jobs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-600" : ""
                    }
                >
                    Applied Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/my-jobs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-600" : ""
                    }
                >
                    My Jobs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/add-a-job"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-600" : ""
                    }
                >
                    Add a Job
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/blogs"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-600" : ""
                    }
                >
                    Blogs
                </NavLink>
            </li>
            <li>
                <NavLink
                    to="/user-profile"
                    className={({ isActive, isPending }) =>
                        isPending ? "pending" : isActive ? "text-green-600" : ""
                    }
                >
                    User Profile
                </NavLink>
            </li>

        </>
    );

    const handleLogOut = () => {
        logOut()
            .then(() => {
                console.log('Log Out successfully')
                toast.success("Logout Successfully")
            })
            .catch(error => {
                console.error(error);
            })
    }



    return (
        <div className="">
            <div className="navbar max-w-screen-xl mx-auto">
                <div className="navbar-start">
                    <div className="dropdown ">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}

                        </ul>
                    </div>
                    <div className="flex items-center">
                        <a className="hidden lg:flex normal-case text-xl">
                            <img className="h-10 w-12" src="/images/hireharborLogo-removebg-preview.png" alt="" />
                        </a>
                        <motion.div
                            animate={{
                                scale: [1, 1, 1, 1, 1],
                                rotate: [0, 0, 180, 180, 0],
                                borderRadius: ["0%", "0%", "50%", "50%", "0%"]
                            }}
                            transition={{
                                duration: 2,
                                ease: "easeInOut",
                                times: [0, 0.2, 0.5, 0.8, 1],
                                repeat: Infinity,
                                repeatDelay: 1
                            }}
                        >
                            <img className="h-10 w-40" src="/images/hireHarvor-removebg-preview.png" alt="" />
                        </motion.div>



                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-5 menu-horizontal px-1 text-xl font-bold">
                        {links}

                    </ul>
                </div>
                {
                    user?.email ?
                        <div className="navbar-end">
                            <div className="dropdown dropdown-end">
                                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                                    <div data-tooltip-id="my-tooltip" data-tooltip-content={`${user?.displayName && user.displayName}`} className="w-10 rounded-full">
                                        <img src={user?.photoURL} />
                                        <Tooltip id="my-tooltip" />
                                    </div>
                                </label>
                                <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                                    <li>
                                        <a className="justify-between">
                                            {user?.displayName}
                                        </a>
                                    </li>
                                    <li><a onClick={handleLogOut}>Logout</a></li>
                                </ul>
                            </div>
                        </div>

                        : <motion.div
                            initial={{ scale: 0 }}
                            animate={{ rotate: 360, scale: 1 }}
                            transition={{
                                ease: "linear",
                                duration: 0.5,
                                x: { duration: 0.5 }
                              }}
                            className="navbar-end">
                            <Link to="/login">
                                <button className="btn bg-green-600 px-5 rounded-2xl hover:bg-slate-400 border-none py-2 text-white">Login</button>
                            </Link>
                        </motion.div>

                }

            </div>
        </div>
    );
};

export default Navbar;