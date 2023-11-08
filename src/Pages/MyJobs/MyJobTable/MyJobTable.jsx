
import { PropTypes } from 'prop-types';


import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';



const MyJobTable = ({ job, cards, setCards }) => {
    console.log(cards);
    
   
    const { _id, Posted_by, Job_Title, Job_Posting_Date, Application_Deadline, Salary_Range, Job_Image } = job

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
                fetch(`https://hire-harbor-server.vercel.app/jobs/${_id}`, {
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

                    <Link to={`/update/${_id}`}>
                        <button className="btn bg-green-600 text-white btn-xs">Update</button>
                    </Link>


                </th>
                <th>
                    <button onClick={() => handleDelete(_id)} className="btn bg-red-600 text-white btn-xs">Delete</button>
                </th>
            </tr>



        </>
    );
};

MyJobTable.propTypes = {
    job: PropTypes.object,
    cards: PropTypes.object,
    setCards: PropTypes.func,


}
export default MyJobTable;