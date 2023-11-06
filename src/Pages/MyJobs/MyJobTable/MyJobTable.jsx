
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import ModalUpdate from '../../../components/ModalUpdate/ModalUpdate';



const MyJobTable = ({ job }) => {
    const [showModal, setShowModal] = useState(false);
    const [updateJob, setUpdateJob] = useState({})
    const { _id, Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Image, Job_Description, userEmail } = job

    const handleUpdate = (job) => {
        setUpdateJob(job)
        setShowModal(true)
    }
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
                <th className='space-x-2'>

                    <button onClick={() => handleUpdate(job)} className="btn bg-green-600 text-white btn-xs">Update</button>


                </th>
                <th>
                    <button className="btn bg-red-600 text-white btn-xs">Delete</button>
                </th>
            </tr>

            <ModalUpdate showModal={showModal} setShowModal={setShowModal} updateJob={updateJob}></ModalUpdate>


        </>
    );
};

MyJobTable.propTypes = {
    children: PropTypes.object,
}
export default MyJobTable;