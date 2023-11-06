import { useContext, useEffect, useState } from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import MyJobTable from "./MyJobTable/MyJobTable";


const MyJobs = () => {
    const {user} = useContext(AuthContext)
    const [myJobs, setMyJobs] = useState([])
    
    useEffect(()=> {
        axios.get(`http://localhost:5000/jobs?email=${user.email}`)
        .then(res => setMyJobs(res.data))
    },[user])
    console.log(myJobs);
    return (
        <div>
            <Navbar></Navbar>
            <div>
            <div className="overflow-x-auto max-w-7xl mx-auto mt-12 mb-12">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="text-center">
                                <th></th>
                                <th>Name</th>
                                <th>Job Title</th>
                                <th >Job Posting Date</th>
                                <th>Application Deadline</th>
                                <th>Salary range</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                               myJobs?.map(job => <MyJobTable key={job._id} job={job}></MyJobTable>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MyJobs;