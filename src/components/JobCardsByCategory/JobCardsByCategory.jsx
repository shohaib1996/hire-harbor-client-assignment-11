
import { PropTypes } from 'prop-types';

const JobCardsByCategory = ({job}) => {
    const {Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Image} = job
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
                <p><span className='text-[#022f5d] text-xl font-bold'>{Salary_Range}</span> <span >/Year</span></p>
            </div>
            <div className='flex justify-between'>
                <h1><span >Posted by:</span> <span className='text-xl font-semibold'>{Posted_by}</span></h1>
                <button className='btn btn-sm bg-green-600 hover:bg-[#03a504] text-white'>Details</button>
            </div>

            
        </div>
    );
};
JobCardsByCategory.propTypes = {
    job: PropTypes.object,
}


export default JobCardsByCategory;