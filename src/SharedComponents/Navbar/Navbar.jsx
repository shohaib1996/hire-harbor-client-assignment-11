import { Link, NavLink } from "react-router-dom";


const Navbar = () => {
    

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
       
    </>
);



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
                        <a className="hidden lg:flex normal-case text-xl"><img className="h-10 w-12" src="/images/hireharborLogo-removebg-preview.png" alt="" /></a>
                        <img className="h-10 w-40" src="/images/hireHarvor-removebg-preview.png" alt="" />
                        


                    </div>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="space-x-5 menu-horizontal px-1 text-xl font-bold">
                        {links}

                    </ul>
                </div>
                <div className="navbar-end">
                    <Link to="/login">
                        <button className="btn bg-green-600 px-5 rounded-2xl hover:bg-slate-400 border-none py-2 text-white">Login</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default Navbar;