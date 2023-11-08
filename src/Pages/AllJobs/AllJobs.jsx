import { useLoaderData } from "react-router-dom";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import AllJobsTableRow from "./AllJobsTableRow/AllJobsTableRow";
import Footer from "../../SharedComponents/Footer/Footer";
import { useEffect, useRef, useState } from "react";
import { Helmet } from "react-helmet-async";
import { motion, useInView } from 'framer-motion';
import axios from "axios";



const AllJobs = () => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
    const [jobs, setJobs] = useState([])
    const inputElement = useRef()
    const [searchJobs, setSearchJobs] = useState([])
    const [itemsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)
    const { count } = useLoaderData()
    console.log(count);
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()]
    console.log(pages);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const jobToDisplayed = jobs.slice(startIndex, endIndex)
    console.log(jobToDisplayed);

    useEffect(() => {
        axios.get("https://hire-harbor-server.vercel.app/jobs", {withCredentials: true})
            .then(res => setJobs(res.data))
    }, [])
   
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
                                searchJobs.length > 0 ? searchJobs?.map(job => <AllJobsTableRow key={job._id} job={job}></AllJobsTableRow>) : jobToDisplayed?.map(job => <AllJobsTableRow key={job._id} job={job}></AllJobsTableRow>)
                            }
                        </tbody>

                    </table>
                </motion.div>
                {
                    searchJobs.length > 0 || <div className="max-w-5xl mx-auto mb-12 text-center space-x-5">
                    <button onClick={() => setCurrentPage(Math.max(0, currentPage - 1))} className="btn">Prev</button>
                    {
                        pages.map(page =>
                            <button
                                onClick={() => setCurrentPage(page)}
                                key={page}
                                className={currentPage == page ? `btn hover:bg-lime-500 bg-lime-500 text-white` : `btn hover:bg-black bg-black text-white`}>{page + 1}
                            </button>)
                    }
                    <button onClick={() => setCurrentPage(Math.min(currentPage + 1, pages.length - 1))} className="btn">Next</button>
                </div>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AllJobs;