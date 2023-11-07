// import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import RegisterImg from "../../../public/images/signup-removebg-preview.png"
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import { updateProfile } from "firebase/auth";
import { Helmet } from "react-helmet-async";


const Register = () => {
    const navigate = useNavigate()
    const {createUser, logOut} = useContext(AuthContext)
    // const [registerError, setRegisterError] = useState('')

    const handleRegister = (e) => {
       
        
            e.preventDefault()
            const form = e.target;
            const name = form.name.value;
            const email = form.email.value;
            const password = form.password.value;
            const photo = form.photo.value;
            console.log(name, email, password, photo);
            if (password.length < 6) {
                return toast.error("Password length should be 6 or more")
            } 
            createUser(email, password)
                .then(result => {
                    const user = result.user;
                    console.log(user);
                    Swal.fire({
                        title: 'Success!',
                        text: 'Register Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    })
    
                    updateProfile(user, {
                        displayName: name, photoURL: photo
                    }).then(() => {
                        toast.success('User Profile Updated');
    
                        logOut()
                            .then(() => {
                                console.log('Log Out successfully')
                                navigate("/login")
                            })
                            .catch(error => {
                                console.error(error);
                            })
    
                    }).catch(error => {
                        console.error(error);
    
                    })
                })
                .catch(error => {
                    console.error(error);
                    toast.error("Please Login with valid Email and password")
                })
    
    
    
       
    }
    return (
        <div>
            <Helmet>
                <title>hireHarbor | Register</title>
            </Helmet>
            <div className="max-w-6xl mx-auto">
                <div><Navbar></Navbar></div>
                <div className="hero min-h-screen">
                    <div className="hero-content w-full flex-col lg:flex-row gap-24 justify-between">
                        <div className="text-center lg:text-left flex-1 h-[400px]">
                            <img className="h-full" src={RegisterImg} alt="" />
                        </div>
                        <div className="card flex-1 flex-shrink-0 w-full max-w-lg border-2 border-[#D0D0D0] p-5 rounded-xl">
                            <form onSubmit={handleRegister}  className="card-body">
                                <h1 className="text-4xl text-[#444] font-bold text-center mb-12 space-y-5">Create Account</h1>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="Your Email" className="input input-bordered" required />
                                </div>

                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Photo URL</span>
                                    </label>
                                    <input type="text" name="photo" placeholder="Your Photo Url" className="input input-bordered" required />

                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text text-xl text-[#444] font-bold">Password</span>
                                    </label>
                                    <input type="password" name="password" placeholder="Your password" className="input input-bordered" required />

                                </div>
                                <div className="form-control mt-6">
                                    <input className="btn bg-[#00bf58] hover:bg-green-800 text-white font-bold " type="submit" value="Register" />
                                </div>
                            </form>
                            
                            <p className="text-[#737373] text-center mt-2 text-lg">Already have an account?  <Link to="/login"><span className="text-[#00bf58] font-bold text-lg">Sign In</span></Link></p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Register;