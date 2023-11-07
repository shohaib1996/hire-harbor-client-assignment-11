
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../../AuthProvider/AuthProvider';
import toast from 'react-hot-toast';
import { Link, useNavigate } from 'react-router-dom';


const AllJobsTableRow = ({ job }) => {
    const { user } = useContext(AuthContext)
    const navigate = useNavigate()
    const { Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Image, _id } = job
    const handleDetails = () => {
        if (!user?.email) {
            toast.error("You have to log in first to view details")
            navigate("/login")
        }
    }
    return (
        <>
            <tr
                
                className='text-center'>
                <th>
                    <img src={Job_Image} className='w-48 h-40 rounded-lg border-2' alt="" />
                </th>
                <td>
                    <p className='text-lg'>{Posted_by}</p>
                </td>
                <td className='w-48'>
                    <p className="font-bold text-lg">{Job_Title}</p>
                </td>
                <td>
                    <p className="font-bold text-teal-500">{Job_Posting_Date}</p>
                </td>
                <td>
                    <p className="font-bold ">{Application_Deadline}</p>
                </td>
                <td>
                    <p className='text-lg font-bold'>$({Salary_Range}) <span className='text-base font-normal'>/Year</span></p>
                </td>
                <th>
                    <Link to={`/jobs/${_id}`}>
                        <button onClick={handleDetails} className="btn bg-green-600 text-white btn-xs">details</button>
                    </Link>
                </th>
            </tr>
        </>
    );
};
AllJobsTableRow.propTypes = {
    job: PropTypes.object
}


export default AllJobsTableRow;