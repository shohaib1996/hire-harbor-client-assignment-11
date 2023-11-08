import { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";
import 'react-tooltip/dist/react-tooltip.css'
import { Tooltip } from 'react-tooltip'
import { motion } from "framer-motion"


const Navbar = () => {
    const { user, logOut } = useContext(AuthContext)
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
    );
    useEffect(() => {
        localStorage.setItem("theme", theme);
        const localTheme = localStorage.getItem("theme");
        document.querySelector("html").setAttribute("data-theme", localTheme);
    }, [theme]);

    const handleToggle = (e) => {
        if (e.target.checked) {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };



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
            {
                user?.email && <>
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
                            to="/user-profile"
                            className={({ isActive, isPending }) =>
                                isPending ? "pending" : isActive ? "text-green-600" : ""
                            }
                        >
                            User Profile
                        </NavLink>
                    </li>
                </>
            }
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
                        <label tabIndex={0} className="btn btn-primary bg-lime-500 lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                            {links}

                        </ul>
                    </div>
                    <div className=" items-center hidden lg:flex">
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
                    <ul className="space-x-5 flex flex-row text-center items-center justify-center menu-horizontal px-1 text-xl font-bold">
                        {links}

                    </ul>
                </div>


                {
                    user?.email ?
                        <div className="navbar-end ">
                            <label className="swap swap-rotate mr-5">
                                {/* this hidden checkbox controls the state */}
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    checked={theme === "light" ? false : true}
                                    style={{ display: "none" }}
                                />

                                {/* sun icon */}
                                <svg
                                    className="swap-on text-primary fill-current w-6 md:w-10 h-6 mt-1 md:mt-auto md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-off text-primary fill-current w-6 md:w-10 h-6 mt-1 md:mt-auto md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
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
                            <label className="swap swap-rotate mr-5">
                                {/* this hidden checkbox controls the state */}
                                <input
                                    type="checkbox"
                                    onChange={handleToggle}
                                    checked={theme === "light" ? false : true}
                                    style={{ display: "none" }}
                                />

                                {/* sun icon */}
                                <svg
                                    className="swap-on text-primary fill-current w-6 md:w-10 h-6 mt-1 md:mt-auto md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                                </svg>

                                {/* moon icon */}
                                <svg
                                    className="swap-off text-primary fill-current w-6 md:w-10 h-6 mt-1 md:mt-auto md:h-10"
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                >
                                    <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                                </svg>
                            </label>
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