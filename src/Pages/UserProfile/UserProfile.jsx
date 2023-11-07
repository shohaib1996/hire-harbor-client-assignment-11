
import { Helmet } from "react-helmet-async";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Footer from "../../SharedComponents/Footer/Footer";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import toast from "react-hot-toast";

const UserProfile = () => {
    const { user, updateUser } = useContext(AuthContext)
    const handleUpdateProfile = (e) => {
        e.preventDefault()
        const form = e.target
        const displayName = form.name.value;
        const photoURL = form.photo.value;
        updateUser(displayName, photoURL)
        .then(()=> {
            console.log("profile Updated")
            console.log(user);
            toast.success("User Profile Updated Successfully", {duration: 3000})
            window.location.reload();

        }).catch((error) => {
            console.log(error);
          });

    }
    return (
        <div>
            <Helmet>
                <title>hireHarbor | UserProfile</title>
            </Helmet>
            <Navbar></Navbar>
            <p className="text-center text-xl font-bold mt-8">Update Your Profile</p>
            <div className="flex justify-center items-center gap-12 max-w-3xl mx-auto my-12 ">
                
                <div className="flex-1">
                    <h1 className="font-bold text-xl uppercase mb-5">{user?.displayName}</h1>
                    <img className="w-72 h-80 rounded-xl border-2 object-cover" src={user?.photoURL} alt="" />

                </div>
                <div className="flex-1">
                    <form onSubmit={handleUpdateProfile} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Name</span>
                            </label>
                            <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name="email" defaultValue={user?.email} readOnly placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input type="text" name="photo" defaultValue={user?.photoURL} placeholder="photo url" className="input input-bordered" required />
                            
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary text-white" type="submit" value="Update Profile"/>
                        </div>
                    </form>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default UserProfile;