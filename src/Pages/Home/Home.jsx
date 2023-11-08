import { useEffect, useState } from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import { Tab, Tabs, TabList } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
// import { useLoaderData } from "react-router-dom";
import JobCardsByCategory from "../../components/JobCardsByCategory/JobCardsByCategory";
import { Helmet } from "react-helmet-async";

import CountUpSection from "../../components/CountUpSection/CountUpSection";
import VideoSection from "../../components/VideoSection/VideoSection";




const Home = () => {
    const [categories, setCategories] = useState([])
    const [itemsPerPage] = useState(3)
    const [currentPage, setCurrentPage] = useState(0)

    const [tabIndex, setTabIndex] = useState(0);
    const [type, setType] = useState("Remote Job")
    const [jobs, setJobs] = useState([])
    const filteredJobs = jobs.filter(job => job.Job_Type.toLowerCase() === type.toLowerCase());
    const jobsToDisplay = filteredJobs.length > 0 ? filteredJobs : jobs;
    // console.log(jobsToDisplay);
    const startIndex = currentPage * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const jobToDisplayed = jobsToDisplay.slice(startIndex, endIndex)
    // console.log(jobToDisplayed);

    useEffect(() => {
        fetch("https://hire-harbor-server.vercel.app/category", {credentials: "include"})
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])
    useEffect(() => {
        fetch("https://hire-harbor-server.vercel.app/jobs", {credentials: "include"})
            .then(res => res.json())
            .then(data => setJobs(data))
    },[])
    const count = jobsToDisplay.length
    // console.log(count);
    const numberOfPages = Math.ceil(count / itemsPerPage)
    const pages = [...Array(numberOfPages).keys()]
    // console.log(currentPage);





    return (
        <div>
            <Helmet>
                <title>hireHarbor | Home</title>
            </Helmet>
            <Navbar></Navbar>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <h1 className="text-4xl lg:text-6xl font-bold text-green-800 mb-12 max-w-6xl mx-auto text-center mt-12">Most demanding job categories.</h1>
                <div className="max-w-6xl mx-auto mb-16">
                    <Tabs>
                        <div className="">
                            <TabList>
                                <div className="grid grid-cols-1 p-3 lg:p-0 lg:grid-cols-5 gap-5">
                                    {categories?.map((category, index) => (
                                        <Tab
                                            key={category._id}
                                            style={{
                                                backgroundColor: index === tabIndex ? "green" : "",
                                                color: index === tabIndex ? "white" : "green",
                                            }}
                                            onClick={() => {
                                                setTabIndex(index)
                                                setType(category.title)
                                            }}
                                        >
                                            <div className="flex flex-col items-center justify-center space-y-5 p-5">
                                                <img src={category.img_tag} alt="" />
                                                <p className="font-bold  text-2xl">{category.title}</p>
                                            </div>
                                        </Tab>
                                    ))}
                                </div>
                            </TabList>
                        </div>

                        <div className="max-w-5xl mx-auto grid p-3 lg:p-0 grid-cols-1 lg:grid-cols-3 gap-7 justify-items-center mt-10">

                            {
                               jobToDisplayed?.map(job => <JobCardsByCategory key={job.id} job={job}></JobCardsByCategory>)
                            }

                        </div>

                    </Tabs>

                </div>
                <div className="max-w-5xl mx-auto mb-12 text-center space-x-5">
                    <button onClick={() => setCurrentPage(Math.max(0, currentPage - 1))} className="lg:btn btn-xs bg-green-500">Prev</button>
                    {
                        pages.map(page =>
                            <button
                                onClick={() => setCurrentPage(page)}
                                key={page}
                                className={currentPage == page ? `btn btn-sm lg:btn-base hover:bg-lime-500 bg-lime-500 text-white`: `btn btn-sm lg:btn-base hover:bg-black bg-black text-white`}>{page}
                            </button>)
                    }
                    <button onClick={() => setCurrentPage(Math.min(currentPage + 1, pages.length - 1))} className="lg:btn btn-xs ">Next</button>
                </div>
            </div>
            <VideoSection></VideoSection>
            <CountUpSection></CountUpSection>
            <Footer></Footer>
        </div>
    );
};

export default Home;