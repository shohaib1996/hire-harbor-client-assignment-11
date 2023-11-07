import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import AllJobsTableRow from "./AllJobsTableRow/AllJobsTableRow";
import Footer from "../../SharedComponents/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from 'framer-motion';


const AllJobs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const jobs = useLoaderData()
    const inputElement = useRef()
    const [searchJobs, setSearchJobs] = useState([])
    // console.log(jobs);
    const handleSearch = (e) => {
        e.preventDefault()
        console.log(inputElement.current.value)
        const search = inputElement.current.value.toLowerCase()
        const filterJobs = jobs.filter(job => job.Job_Title.toLowerCase() === search)
        // console.log(filterJobs);

        setSearchJobs(filterJobs)
        inputElement.current.value = ""
    }
    console.log(searchJobs)
    console.log(jobs);
    useEffect(() => {

    }, [isInView])
    return (
        <div>
            <Helmet>
                <title>hireHarbor | AllJobs</title>
            </Helmet>
            <Navbar></Navbar>
            <div className="flex flex-row justify-center items-center space-x-5 mt-12">
                <input type="text" ref={inputElement} placeholder="Type here" className="input input-bordered w-full max-w-xs" />
                <button onClick={handleSearch} className="btn">Search</button>
            </div>
            <div ref={ref}>

                <motion.div
                    variants={{
                        hidden: { opacity: 0, y: 75 },
                        visible: { opacity: 1, y: 0 },
                    }}
                    initial="hidden"
                    animate="visible"
                    transition={{ duration: 1, delay: 0.25 }}

                    className="overflow-x-auto max-w-6xl mx-auto mt-12 mb-12">
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
                        <tbody


                        >
                            {
                                searchJobs.length > 0 ? searchJobs?.map(job => <AllJobsTableRow key={job._id} job={job}></AllJobsTableRow>) : jobs?.map(job => <AllJobsTableRow key={job._id} job={job}></AllJobsTableRow>)
                            }
                        </tbody>

                    </table>
                </motion.div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;