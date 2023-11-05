import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import AllJobsTableRow from "./AllJobsTableRow/AllJobsTableRow";
import Footer from "../../SharedComponents/Footer/Footer";
import { useRef } from "react";


const AllJobs = () => {
    const jobs = useLoaderData()
    const inputElement = useRef()
    // console.log(jobs);
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(inputElement.current.value)

    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex flex-row justify-center items-center space-x-5 mt-12">
                <input type="text" ref={inputElement} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button onClick={handleSearch} className="btn">Search</button>
            </div>
            <div>

                <div className="overflow-x-auto max-w-6xl mx-auto mt-12 mb-12">
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
                                jobs.map(job => <AllJobsTableRow key={job._id} job={job}></AllJobsTableRow>)
                            }
                        </tbody>

                    </table>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;