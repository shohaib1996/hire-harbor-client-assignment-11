import { useQuery } from "@tanstack/react-query";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import axios from "axios";
import { useParams } from "react-router-dom";
import Spinner from "../../Spinner/Spinner";
import Footer from "../../SharedComponents/Footer/Footer";


const JobDetails = () => {
    const { id } = useParams()
    console.log(id);
    const { data: job, isLoading } = useQuery({
        queryKey: ["jobs"],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/jobs/${id}`)
            const data = await res.data
            return data
        },
        retry: 3,
    })

    if (isLoading) {
        return <Spinner></Spinner>
    }

    const { _id, Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Description, Job_Image } = job
    const currentDate = new Date()
    const formattedDate = currentDate.toLocaleString();
    console.log(formattedDate);
    return (
        <div>
            <Navbar></Navbar>
            <div className="flex max-w-6xl mx-auto mt-10 pb-12 gap-5">
                <div className="w-2/3 p-5 ">
                    <p className="text-[#6c757d] font-semibold text-lg">Today: {formattedDate}</p>
                    <h1 className="text-3xl lg:text-5xl font-extrabold">{Job_Title}</h1>
                    <img className="border-2 my-10 hover:scale-90 transform transition-transform duration-300 lg:w-[715px] lg:h-[490px] object-cover" src={Job_Image} alt="" />
                    <p className="text-3xl lg:text-4xl font-extrabold">Job Description</p>
                    <p className="text-xl text-justify mt-7 ">{Job_Description}</p>



                </div>
                <div className="w-1/3 lg:mt-36">
                    <div className="bg-[#d2f34c] p-8 rounded-lg">
                        <div className="flex items-center justify-center">
                            <img className="w-72" src="/public/images/MyGif_1699176772300.gif" alt="" />
                        </div>
                        <h1 className="text-center text-2xl">----Posted By----</h1>
                        <p className="text-lg font-semibold text-center">{Posted_by}</p>
                        <div className="grid grid-cols-2 mt-12">
                            <div className="text-center">
                                <p className="text-lg">Published Date</p>
                                <p className="font-bold text-gray-800">{Job_Posting_Date}</p>
                            </div>
                            <div>
                                <div className="text-center">
                                    <p className="text-lg">Deadline</p>
                                    <p className="font-bold text-gray-800">{Application_Deadline}</p>
                                </div>
                            </div>
                            <div>
                                <div className="text-center mt-8">
                                    <p className="text-lg text-center">Number of Application</p>
                                    <p className="font-bold text-gray-800 text-center">{Job_Applicants_Number}</p>
                                </div>
                            </div>
                            <div>
                                <div className="text-center mt-8">
                                    <p className="text-lg ">Job Type</p>
                                    <p className="font-bold text-gray-800 ">{Job_Type}</p>
                                </div>
                            </div>

                        </div>
                        <div className="text-center mt-12">
                            <p className="text-lg ">Salary Range</p>
                            <p className="font-bold text-gray-800">$({Salary_Range}) <span className="text-base font-normal">/Year</span></p>
                        </div>
                        <button className="w-full btn bg-green-600 mt-12 hover:bg-teal-500 text-white border-none">Apply Now</button>
                    </div>
                    

                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default JobDetails;