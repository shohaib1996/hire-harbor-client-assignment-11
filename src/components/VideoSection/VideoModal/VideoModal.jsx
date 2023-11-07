import ReactPlayer from "react-player";


const VideoModal = ({showModal, setShowModal}) => {
    return (
        <div>
            <>
                {showModal ? (
                    <>
                        <div
                            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                        >
                            <div className="relative w-auto my-6 mx-auto max-w-3xl">
                                {/*content*/}
                                <div className="border-0 rounded-lg shadow-lg flex flex-col w-full bg-white outline-none focus:outline-none relative">

                                    <div className="relative p-6 flex-auto">
                                        <ReactPlayer controls={true} light={true} url="https://www.youtube.com/embed/kcpe4kqZaKg?si=sWma6innH662iYHq"></ReactPlayer>
                                    </div>
                                    <button onClick={() => setShowModal(false)} className="btn btn-circle text-white border-none bg-red-500 btn-outline absolute -top-5 -right-5">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                                    </button>

                                </div>
                            </div>
                        </div>
                        <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                    </>
                ) : null}
            </>

        </div>
    );
};

export default VideoModal;