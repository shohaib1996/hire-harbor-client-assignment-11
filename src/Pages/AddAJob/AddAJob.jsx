import { useContext, useState } from "react";
import Navbar from "../../SharedComponents/Navbar/Navbar";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import Footer from "../../SharedComponents/Footer/Footer";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import axios from "axios";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import Swal from "sweetalert2";


const AddAJob = () => {
    const queryClient = useQueryClient()

    const { user } = useContext(AuthContext)
    const [startDate, setStartDate] = useState(new Date());
    const [endDate, setEndDate] = useState(new Date())
    // const day = startDate.getDate().toString().padStart(2, '0');
    // const month = (startDate.getMonth() + 1).toString().padStart(2, '0');
    // const year = startDate.getFullYear();
    // const formattedStartDate = `${day}-${month}-${year}`;

    // const days = endDate.getDate().toString().padStart(2, '0');
    // const months = (endDate.getMonth() + 1).toString().padStart(2, '0');
    // const years = endDate.getFullYear();
    // const formattedEndDate = `${days}-${months}-${years}`;
    // console.log(startDate, endDate);
    

    const addAJob = async (job) => {
        const res = await axios.post("http://localhost:5000/jobs", job)
        return res.data
    }


    const mutation = useMutation({
        mutationFn: addAJob,
        onSuccess: (data) => {
            console.log("added")
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })


    const handleAddJob = e => {
        e.preventDefault()
        const form = e.target;
        // const {Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Image} = job
        const Posted_by = form.user.value;
        const Job_Title = form.jobTitle.value;
        const Job_Image = form.photo.value;
        const Job_Type = form.job_type.value;
        const Salary_Range = form.salary.value;
        // const Job_Posting_Date = formattedStartDate;
        // const Application_Deadline = formattedEndDate;
        const Job_Applicants_Number = parseFloat(form.applicants.value);
        const Job_Description = form.description.value;
        const userEmail = user?.email;

        const job = {
            Posted_by, Job_Title, Job_Posting_Date: startDate, Application_Deadline: endDate, Salary_Range, Job_Applicants_Number, Job_Type, Job_Image, Job_Description, userEmail
        }
        console.log(job);
        mutation.mutate(job)

    }


    return (
        <div>
            <Navbar></Navbar>
            <div>
                <form onSubmit={handleAddJob} className='max-w-screen-md mx-auto p-5 mt-12 pb-12 mb-12 border-2 rounded-lg'>
                    <div className='mb-6 text-5xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700 text-clip'>Add Your Jobs Here !!!</div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="jobTitle"
                            id="floating_email"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                            placeholder=" "
                            required=""
                        />
                        <label
                            htmlFor="floating_email"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                        >
                            Job Title
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="photo"
                            id="floating_password"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                            placeholder=" "
                            required=""
                        />
                        <label
                            htmlFor="floating_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                        >
                            Job Image URL
                        </label>
                    </div>

                    <div className="relative z-0 w-full mb-6 group">
                        <input
                            type="text"
                            name="description"
                            id="floating_repeat_password"
                            className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                            placeholder=" "
                            required=""
                        />
                        <label
                            htmlFor="floating_repeat_password"
                            className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                        >
                            Job Description
                        </label>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-7">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="user"
                                defaultValue={user?.displayName}
                                id="floating_repeat_password"
                                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                            >
                                User Name
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            {/* <input
                                type="date"
                                name="post"
                                id="floating_repeat_password"
                                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                                placeholder=" "
                                required=""
                            /> */}
                            <div className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer">
                                <DatePicker
                                    selected={startDate}
                                    onChange={(date) => setStartDate(date)}

                                />
                            </div>

                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                            >
                                Job Posting Date
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            {/* <input
                                type="date"
                                name="deadline"
                                id="floating_repeat_password"
                                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                                placeholder=" "
                                required=""
                            /> */}
                            <div className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer">
                                <DatePicker
                                    selected={endDate}
                                    onChange={(date) => setEndDate(date)}

                                />
                            </div>

                            <label
                                htmlFor="floating_repeat_password"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                            >
                                Application Deadline
                            </label>
                        </div>
                    </div>
                    <div className="grid md:grid-cols-3 md:gap-6">
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="salary"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                            >
                                Salary range
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <input
                                type="text"
                                name="applicants"
                                id="floating_first_name"
                                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                                placeholder=" "
                                required=""
                            />
                            <label
                                htmlFor="floating_first_name"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                            >
                                Job Applicants Number
                            </label>
                        </div>
                        <div className="relative z-0 w-full mb-6 group">
                            <select
                                name="job_type"

                                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-black dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                                required=""
                            >
                                <option value="" disabled selected hidden>Select a Job Type</option>
                                <option className='text-black' value="On Site Job">On Site Job</option>
                                <option className='text-black' value="Remote Job">Remote Job</option>
                                <option className='text-black' value="Hybrid">Hybrid</option>
                                <option className='text-black' value="Part Time">Part Time</option>

                            </select>
                            <label
                                htmlFor="job_type"
                                className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                            >

                            </label>
                        </div>

                    </div>

                    <div className=" ">
                        <input className="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-full py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Add  Job" />
                    </div>
                </form>

            </div>
            <Footer></Footer>
        </div>

    );
};

export default AddAJob;