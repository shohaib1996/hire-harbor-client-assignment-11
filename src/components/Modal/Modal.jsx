
import { PropTypes } from 'prop-types';
import { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const Modal = ({ showModal, setShowModal, job }) => {
    const {user} = useContext(AuthContext)
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
                                    <form className="card-body w-full">
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
                                            <input type="password"  name='resume' placeholder="password" className="input input-bordered" required />

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
                                                onClick={() => setShowModal(false)}
                                            >
                                                Submit Application
                                            </button>
                                        </div>

                                    </form>
                                </div>
                                {/*footer*/}

                            </div>
                        </div>
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