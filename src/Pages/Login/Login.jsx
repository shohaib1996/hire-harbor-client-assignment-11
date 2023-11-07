import Navbar from "../../SharedComponents/Navbar/Navbar";
import LoginImg from "../../../public/images/login-removebg-preview.png"
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { Helmet } from "react-helmet-async";



const Login = () => {
    const location = useLocation()
    console.log(location)
    const navigate = useNavigate()
    const { signInUser, signInWithGoogle } = useContext(AuthContext)
    const handleLogin = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password);
        if (password.length < 6) {
            return toast.error("Password length should be 6 or more")
        }
        signInUser(email, password)
            .then(result => {
                const loggedInUser = result.user;
                console.log(loggedInUser);
                // const user = { email }
                Swal.fire({
                    title: 'Success!',
                    text: 'Login Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                })
                navigate(location?.state ? location.state : "/")


            })
            .catch(error => console.error(error))
    }
    const handleSocial = (media) => {
        media()
            .then(result => {
                console.log(result.user)
                toast.success("Login Successfully")
                navigate(location?.state ? location.state : "/")

            })
            .catch(error => {
                console.error(error);
            })
    }
    return (

        <div>
            <Helmet>
                <title>hireHarbor | Login</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
                <div><Navbar></Navbar></div>
                <div className="hero min-h-screen">
                    <div className="hero-content w-full flex-col lg:flex-row gap-24 justify-between">
                        <div className="text-center lg:text-left flex-1 h-[400px]">
                            <img className="h-full" src={LoginImg} alt="" />
                        </div>
                        <div className="card flex-1 flex-shrink-0 w-full max-w-lg border-2 border-[#D0D0D0] p-5 rounded-xl">
                            <form onSubmit={handleLogin} className="card-body">
                                <h1 className="text-4xl text-[#444] font-bold text-center mb-12 space-y-5">Log In</h1>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#00bf58] hover:bg-green-800 text-white font-bold " type="submit" value="Login" />
                                </div>
                            </form>
                            <div className="max-w-2xl mx-auto">
                                <div className=" flex items-center text-base font-bold  uppercase before:flex-[1_1_0%] before:border-t before:border-gray-400 before:mr-6 after:flex-[1_1_0%] after:border-t after:border-gray-400 after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600 text-black ">
                                    Or
                                </div>
                                <div className="space-y-5">
                                    <button onClick={() => handleSocial(signInWithGoogle)} type="button" className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800 hover:scale-110 hover:border-2 hover:border-green-600 mb-2 mt-2">
                                        <svg className="w-4 h-auto" width="46" height="47" viewBox="0 0 46 47" fill="none">
                                            <path d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z" fill="#4285F4" />
                                            <path d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z" fill="#34A853" />
                                            <path d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z" fill="#FBBC05" />
                                            <path d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z" fill="#EB4335" />
                                        </svg>
                                        Sign up with Google
                                    </button>

                                </div>
                            </div>

                            <p className="text-[#737373] text-center mt-2 text-lg">Don&apos;t have an account?  <Link to="/register"><span className="text-[#00bf58] font-bold text-lg">Register</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    );
};

export default Login;