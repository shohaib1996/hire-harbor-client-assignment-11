
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

import axios from 'axios';
import Swal from 'sweetalert2';

const ModalUpdate = ({ showModal, setShowModal, updateJob }) => {
    // const {user} = useContext(AuthContext)
    // console.log(updateJob);
    const { _id, Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range,
        Job_Applicants_Number, Job_Type, Job_Image, Job_Description, userEmail } = updateJob


    // const [showDate, setShowDate] = useState(false)
    // const [showEndDate, setShowEndDate] = useState(false)
    const dateStr = Job_Posting_Date ? Job_Posting_Date.split("-") : ["2023", "11", "06"];
    const dateStrYear = parseInt(dateStr[2]);
    const dateStrMonth = parseInt(dateStr[1])
    const dateStrDay = parseInt((dateStr[0]));
    console.log(dateStr);

    // console.log(typeof dateStrYear, typeof dateStrMonth, typeof dateStrDay);
    console.log(dateStrYear, dateStrMonth, dateStrDay);


    const [startDateState, setStartDateState] = useState(new Date(dateStrYear, dateStrMonth - 1, dateStrDay));
    // dateStrYear, dateStrMonth - 1, dateStrDay

    const dateStr2 = Application_Deadline ? Application_Deadline.split("-") : ["2023", "11", "06"]
    const dateStrYear2 = parseInt(dateStr2[2])
    const dateStrMonth2 = parseInt(dateStr2[1])
    const dateStrDay2 = parseInt(dateStr2[0])
    console.log(dateStrYear2, dateStrMonth2 - 1, dateStrDay2);
    // dateStrYear2, dateStrMonth2 - 1, dateStrDay2

    const [endDate, setEndDate] = useState(new Date(dateStrYear2, dateStrMonth2 - 1, dateStrDay2))

    const day = startDateState.getDate().toString().padStart(2, '0');
    const month = (startDateState.getMonth() + 1).toString().padStart(2, '0');
    const year = startDateState.getFullYear();
    const formattedStartDate = `${day}-${month}-${year}`;

    const days = endDate.getDate().toString().padStart(2, '0');
    const months = (endDate.getMonth() + 1).toString().padStart(2, '0');
    const years = endDate.getFullYear();
    const formattedEndDate = `${days}-${months}-${years}`;
    console.log(formattedStartDate, formattedEndDate);
    console.log(startDateState, endDate);
    const handleUpdateJob = e => {
        e.preventDefault()
        const form = e.target;
        const Posted_by = form.user.value;
        const Job_Title = form.jobTitle.value;
        const Job_Image = form.photo.value;
        const Job_Type = form.job_type.value;
        const Salary_Range = form.salary.value;
        const Job_Posting_Date = formattedStartDate;
        const Application_Deadline = formattedEndDate;
        const Job_Applicants_Number = parseFloat(form.applicants.value);
        const Job_Description = form.description.value;

        const job = {
            Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Image, Job_Description, userEmail
        }
        console.log(job);
        axios.put(`https://hire-harbor-server.vercel.app/jobs/${_id}`, job)
            .then(res => {
                console.log(res.data);
                if (res.data.modifiedCount > 0) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Product Updated Successfully',
                        icon: 'success',
                        confirmButtonText: 'Cool'
                    }).then(() => {
                        window.location.reload();
                    });

                    setShowModal(false)
                }
            })


    }

    return (

        <>
            {
                showModal ? <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-2 mx-auto max-w-7xl">

                            <div className="border-0 rounded-lg  shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                                {/*body*/}
                                <div className="relative p-6 flex-auto  max-w-7xl">
                                    <form onSubmit={handleUpdateJob} className=' mx-auto p-5 mt-12 pb-12 mb-12 border-2 rounded-lg'>
                                        <div className='mb-6 text-5xl  font-bold text-center bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-green-700 text-clip'>Update Your Jobs Here !!!</div>
                                        <div className="relative z-0 w-full mb-6 group">
                                            <input
                                                type="text"
                                                name="jobTitle"
                                                id="floating_email"
                                                className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer"
                                                placeholder=" "
                                                required=""
                                                defaultValue={Job_Title}
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
                                                defaultValue={Job_Image}
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
                                                defaultValue={Job_Description}
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
                                                    defaultValue={Posted_by}
                                                    type="text"
                                                    name="user"

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
                                            <div className="relative z-0 w-[250px] mb-6 group">
                                                <div className="block py-2.5 px-0 w-full text-sm  bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-yellow-400 peer">

                                                    <DatePicker

                                                        selected={startDateState}
                                                        onChange={(date) => setStartDateState(date)}

                                                    />
                                                </div>

                                                <label
                                                    htmlFor="floating_repeat_password"
                                                    className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-100 top-1 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-focus:dark:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-100 peer-focus:-translate-y-6"
                                                >
                                                    Job Posting Date(mm-dd-yy)
                                                </label>
                                            </div>
                                            <div className="relative z-0 w-full mb-6 group">

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
                                                    Application Deadline(mm-dd-yy)
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
                                                    defaultValue={Salary_Range}
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
                                                    defaultValue={Job_Applicants_Number}
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
                                                    defaultValue={Job_Type}
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
                                            <input className="text-white bg-green-600 hover:bg-green-400 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-lg w-52 py-1.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="submit" value="Update  Job" />
                                            <button
                                                className="text-white ml-2 rounded-xl  bg-red-600 font-bold uppercase px-6 py-3 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => {
                                                    setShowModal(false)
                                                    // setShowDate(false)
                                                    // setShowEndDate(false)
                                                }}
                                            >
                                                Close
                                            </button>
                                        </div>

                                    </form>
                                </div>
                                {/*footer*/}


                            </div>
                        </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </> : null
            }
        </>
    );
};
ModalUpdate.propTypes = {
    showModal: PropTypes.bol,
    setShowModal: PropTypes.func,
    updateJob: PropTypes.object,


}

export default ModalUpdate;