
import { PropTypes } from 'prop-types';
import { useState } from 'react';
import ModalUpdate from '../../../components/ModalUpdate/ModalUpdate';
import Swal from 'sweetalert2';



const MyJobTable = ({ job, cards, setCards }) => {
    console.log(cards);
    const [showModal, setShowModal] = useState(false);
    const [updateJob, setUpdateJob] = useState({})
    const { _id, Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Applicants_Number, Job_Type, Job_Image, Job_Description, userEmail } = job

    const handleUpdate = (job) => {
        setUpdateJob(job)
        setShowModal(true)
    }
    const handleDelete = id => {
        console.log(id);
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/jobs/${_id}`, {
                    method: "DELETE",
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then(res => res.json())
                    .then(data => {
                        console.log(data);
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Deleted!',
                                'Your file has been deleted.',
                                'success'
                            )
                            const remaining = cards?.filter(card => card._id !== _id)
                            setCards(remaining)
                            console.log(remaining);

                        }
                       

                    })

            }
        })
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
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white btn-xs">Delete</button>
                </th>
            </tr>

            <ModalUpdate showModal={showModal} setShowModal={setShowModal} updateJob={updateJob}></ModalUpdate>


        </>
    );
};

MyJobTable.propTypes = {
    job: PropTypes.object,
    cards: PropTypes.object,
    setCards: PropTypes.func,


}
export default MyJobTable;