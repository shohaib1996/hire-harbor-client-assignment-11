
import { PropTypes } from 'prop-types';
import { useContext} from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import Swal from 'sweetalert2';
// import emailjs from '@emailjs/browser';
// import ContactUs from '../ContactUs/ContactUs';
// import toast from 'react-hot-toast';


const Modal = ({ showModal, setShowModal, job }) => {
    
    const queryClient = useQueryClient()
    const { user } = useContext(AuthContext)
    const { Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Description, Job_Image } = job

    const addAppliedJob = async (appliedJob) => {
        const res = await axios.post("https://hire-harbor-server.vercel.app/applied-job", appliedJob)
        return res.data
    }
    const mutation = useMutation({
        mutationFn: addAppliedJob,
        onSuccess: (data) => {
            // console.log("added")
            console.log(data);
            if(data.insertedId){
                Swal.fire({
                    title: 'Success!',
                    text: 'Job Added Successfully',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                  })
            }
            queryClient.invalidateQueries({ queryKey: ['appliedJob'] })
        },
    })
    // const form = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        handleApplyJob(e);
        // sendEmail(e);
    };
    // const sendEmail = (e) => {
    //     e.preventDefault();
        
    
    //     emailjs.sendForm('service_nbmux6f', 'template_t3455i9', form.current, 'N7sCXhxC1NSQ36mKf')
    //       .then((result) => {
    //           console.log(result.text);
    //           if(result.text){
    //             toast.success("Check Your Email Message Sent", {duration: 5000})
    //           }
    //       }, (error) => {
    //           console.log(error.text);
    //       });
    //   };

    const handleApplyJob = e => {
        const newJob = {
            Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Description, Job_Image, email: user?.email, applicant_name: user?.displayName
        }

        e.preventDefault()
        const form = e.target
        const resume_link = form.resume.value;
        console.log({ ...newJob, resume_link });
        const applied = {...newJob, resume_link}
        mutation.mutate(applied)




        setShowModal(false)
    }
    return (
        <>
            {showModal ? (
                <>
                    <div
                        className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                        <div className="relative w-auto my-6 mx-auto max-w-3xl">

                            <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">

                                <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                                    <h3 className="text-3xl font-semibold">
                                        Job Title: {job.Job_Title}
                                    </h3>


                                </div>
                                {/*body*/}
                                <div className="relative p-6 flex-auto lg:w-[700px]">
                                    <form onSubmit={handleSubmit} className="card-body w-full">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xl font-bold">User Name</span>
                                            </label>
                                            <input type="text" defaultValue={user?.displayName} name='name' placeholder="email" className="input input-bordered" required />
                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xl font-bold">Email</span>
                                            </label>
                                            <input type="email" defaultValue={user?.email} name='email' placeholder="password" className="input input-bordered" required />

                                        </div>
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text text-xl font-bold">Resume Link</span>
                                            </label>
                                            <input type="text" name='resume' placeholder="Resume Link" className="input input-bordered" required />

                                        </div>
                                        {/*footer*/}
                                        <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                                            <button
                                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                                type="button"
                                                onClick={() => setShowModal(false)}
                                            >
                                                Close
                                            </button>
                                            <button

                                                className="bg-[#d2f34c] text-black active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 hover:bg-green-600 hover:text-white"
                                                type="submit"

                                            >
                                                Submit Application
                                            </button>
                                        </div>

                                    </form>
                                </div>
                                {/*footer*/}

                            </div>
                        </div>
                        {/* <ContactUs sendEmail={sendEmail} form={form}></ContactUs> */}
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
};
Modal.propTypes = {
    showModal: PropTypes.bol,
    setShowModal: PropTypes.func,
    job: PropTypes.obj
}

export default Modal;