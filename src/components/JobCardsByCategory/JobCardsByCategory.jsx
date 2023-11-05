
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';

const JobCardsByCategory = ({ job }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Image, _id } = job
    const handleDetails = () => {
        if (!user?.email) {
            toast.error("You have to log in first to view details")
            navigate("/login")
        } 
        // else {
        //     navigate(`/jobs/${_id}`)
        // }
    }
    return (
        <div className='w-80 border-2 bg-base-200 p-5 rounded-xl hover:scale-105 transform transition-transform duration-300'>
            <div className='flex justify-between'>
                <div className='text-fuchsia-600'>Applicants: {Job_Applicants_Number}</div>
                <div className='text-[#03a504] font-bold px-2 rounded-lg bg-[#03A5041A]'>{Job_Type}</div>
            </div>
            <div className='flex items-center justify-center mt-4'>
                <img className='w-44 h-44 rounded-full border-2' src={Job_Image} alt="" />
            </div>
            <div className='text-center h-40 mt-5'>
                <h1 className='text-[#022f5d] text-2xl font-extrabold'>{Job_Title}</h1>
                <p>PubLished: <span className=' p-1 rounded-md'>{Job_Posting_Date}</span></p>
                <p>Deadline: <span>{Application_Deadline}</span></p>
                <p><span className='text-[#022f5d] text-xl font-bold'>$({Salary_Range})</span> <span >/Year</span></p>
            </div>
            <div className='flex justify-between'>
                <h1><span >Posted by:</span> <span className='text-xl font-semibold'>{Posted_by}</span></h1>

                <Link to={`/jobs/${_id}`}>
                    <button onClick={handleDetails} className='btn btn-sm bg-green-600 hover:bg-[#03a504] text-white'>Details</button>
                </Link>

            </div>


        </div>
    );
};
JobCardsByCategory.propTypes = {
    job: PropTypes.object,
}


export default JobCardsByCategory;