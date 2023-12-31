import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Footer from "../../SharedComponents/Footer/Footer";
import AppliedJobCard from "../../components/AppliedJobCard/AppliedJobCard";
import NoJobAvailable from "../../components/NoJobAvailable/NoJobAvailable";
import { Helmet } from "react-helmet-async";
import { usePDF } from 'react-to-pdf';



const AppliedJobs = () => {
    const { user } = useContext(AuthContext)
    const [appliedJobs, setAppliedJobs] = useState([])
    const [filteredJobs, setFilteredJobs] = useState([])
    const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' });


    useEffect(() => {
        if (user) {
            axios.get(`https://hire-harbor-server.vercel.app/applied-job?email=${user?.email}`, { withCredentials: true })
                .then(res => {
                    setAppliedJobs(res.data)
                    setFilteredJobs(res.data)
                })
        }
    }, [user])
    console.log(filteredJobs);


    const handleSelect = e => {
        e.preventDefault();
        const selectValue = e.target.value.toLowerCase();
        if (selectValue) {
            const filteredOption = appliedJobs.filter(job => job.Job_Type?.toLowerCase() == selectValue);

            {
                selectValue === "all jobs" ? setFilteredJobs(appliedJobs) : setFilteredJobs(filteredOption)
            }

        }
    }

    return (
        <div>
            <Helmet>
                <title>hireHarbor | AppliedJobs</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <div className="max-w-6xl mx-auto flex items-center justify-end">
                    <button onClick={() => toPDF()} className="btn bg-lime-400 mt-5 text-center hover:bg-green">Download PDF</button>
                </div>

                {
                    appliedJobs.length > 0 ?
                        <div ref={targetRef} className="max-w-6xl mx-auto mt-10 grid grid-cols-1 lg:grid-cols-1 gap-5 mb-12">

                            <div className="mb-5">
                                <select name="job_type" onChange={handleSelect} className="select select-success w-full max-w-xs font-bold">
                                    <option disabled selected hidden>Pick your job by Category</option>
                                    <option className="text-lg" value="All Jobs">All Jobs</option>
                                    <option className="text-lg" value="On Site Job">On Site Job</option>
                                    <option className="text-lg" value="Remote Job">Remote Job</option>
                                    <option className="text-lg" value="Hybrid">Hybrid</option>
                                    <option className="text-lg" value="Part Time">Part Time</option>
                                </select>
                            </div>

                            {
                                filteredJobs.length > 0 ? filteredJobs.map(job => <AppliedJobCard key={job._id} job={job}></AppliedJobCard>) : <p className="text-3xl font-bold">No Job Available In this Category</p>
                            }
                        </div> : <NoJobAvailable></NoJobAvailable>
                }
            </div>
            <Footer></Footer>
        </div>
    );
};

export default AppliedJobs;