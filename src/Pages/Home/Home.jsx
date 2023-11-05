import { useEffect, useState } from "react";
import Footer from "../../SharedComponents/Footer/Footer";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import Banner from "../../components/Banner/Banner";
import { Tab, Tabs, TabList} from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useLoaderData } from "react-router-dom";
import JobCardsByCategory from "../../components/JobCardsByCategory/JobCardsByCategory";


const Home = () => {
    const [categories, setCategories] = useState([])
    const [tabIndex, setTabIndex] = useState(0);
    const [type, setType] = useState("Remote Job")
    const jobs = useLoaderData()
    const filteredJobs = jobs.filter(job => job.Job_Type.toLowerCase() === type.toLowerCase());
    const jobsToDisplay = filteredJobs.length > 0 ? filteredJobs : jobs;
    console.log(jobsToDisplay);

    useEffect(() => {
        fetch("http://localhost:5000/category")
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])


    return (
        <div>
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
                                <div className="grid grid-cols-5 gap-5">
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

                        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-7 justify-items-center mt-10">
                           
                                {
                                    jobsToDisplay?.map(job => <JobCardsByCategory key={job.id} job={job}></JobCardsByCategory>)
                                }
                            
                        </div>
                        
                    </Tabs>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;