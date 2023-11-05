
import { PropTypes } from 'prop-types';

const AllJobsTableRow = ({ job }) => {
    const { Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Image } = job
    return (
        <>
            <tr className='text-center'>
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
                    <button className="btn bg-green-600 text-white btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};
AllJobsTableRow.propTypes = {
    job: PropTypes.object
}


export default AllJobsTableRow;