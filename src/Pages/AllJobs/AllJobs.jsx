import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import AllJobsTableRow from "./AllJobsTableRow/AllJobsTableRow";


const AllJobs = () => {
    const jobs = useLoaderData()
    console.log(jobs);
    return (
        <div>
            <Navbar></Navbar>
            <div>
                <div className="overflow-x-auto max-w-6xl mx-auto mt-12">
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
        </div>
    );
};

export default AllJobs;