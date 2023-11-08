
import { PropTypes } from 'prop-types';
import Skeleton from 'react-loading-skeleton'
import 'react-loading-skeleton/dist/skeleton.css'

const AppliedJobCard = ({ job }) => {

    const {  Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Type, Job_Image, email, applicant_name, resume_link } = job
    return (
        <div className="card card-side bg-base-100 shadow-xl">
            <figure><img className='w-[350px] h-[300px] border-r-2 rounded-xl' src={Job_Image} alt="Movie" /></figure>
            <div className="card-body">
                <h2 className="card-title">{Job_Title}</h2>
                <div className='flex items-center'>
                    <p>Posted By: <span className='font-bold'>{Posted_by}</span></p>
                    <p>Applied By: <span className='font-bold'>{applicant_name}</span></p>
                    <p className='bg-lime-500 text-lg font-semibold w-12 rounded-xl text-center'>{Job_Type}</p>
                </div>
                <div>
                    <p>Salary Range: <span>$<span className='font-bold'>({Salary_Range})</span> /year</span></p>
                </div>
                <div className='flex'>
                    <p className='flex-[1]'>Posted Date:<span className='font-bold'>{Job_Posting_Date}</span></p>
                    <p className='flex-[2]'>Deadline: <span className='font-bold'>{Application_Deadline}</span></p>
                </div>
                <a href={resume_link} className="link font-bold">Your Resume Link</a>
                <p>
                    Your Email: <span className='font-bold'>{email}</span>
                </p>
                <div className="card-actions justify-end">
                    <button className="btn bg-green-600 text-white font-bold">Applied</button>
                </div>
            </div>
        </div> || <Skeleton count={10}></Skeleton>
    );
};
AppliedJobCard.propTypes = {
    job: PropTypes.object,
}

export default AppliedJobCard;