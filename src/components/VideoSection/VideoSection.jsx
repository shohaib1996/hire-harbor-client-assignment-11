import { useState } from "react";
import { FaPlayCircle } from 'react-icons/fa';
import VideoModal from "./VideoModal/VideoModal";


const VideoSection = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="mb-12 max-w-6xl mx-auto flex items-center justify-center gap-5">
            <div className="flex-[2]">
                <div className="relative ">
                    <img className="w-full rounded-xl h-[450px]" src="https://img.freepik.com/free-photo/computer-business-laptop-working-woman_1303-1770.jpg?t=st=1699367699~exp=1699368299~hmac=f2dfcce0cf836ff53b3d05f1488bb6d34e4598f6b4710dabd3289b20181347ad" alt="" />

                    <div className="">
                        <p className="text-5xl font-extrabold absolute top-1/3 w-[350px] right-3 text-white">Let’s get started <span className="text-green-400">It’s simple.</span></p>
                        <p onClick={() => setShowModal(true)} className="text-6xl font-bold text-lime-500 absolute top-20 left-2/3 hover:scale-110 transform transition-transform duration-300" title="Click"><FaPlayCircle></FaPlayCircle></p>

                    </div>
                    <div className="absolute bottom-0 w-full bg-black bg-opacity-70 rounded-b-2xl text-white h-[100px] flex justify-center gap-16 items-center">
                        <div className=" text-center text-lg font-bold">
                            <p className="text-green-400">Step-1</p>
                            <p>Click The Play Button</p>

                        </div>
                        <div className=" text-center text-lg font-bold">
                            <p className="text-green-400">Step-2</p>
                            <p>Create an account</p>

                        </div>
                        <div className=" text-center text-lg font-bold">
                            <p className="text-green-400">Step-3</p>
                            <p>Applied Job or Hire</p>

                        </div>

                    </div>
                </div>

            </div>
            <div className="flex-1 flex items-center justify-center flex-col space-y-5">
                <h1 className="text-4xl font-bold text-green-500 w-80">Get the job of your dreams quickly.</h1>
                <p className="text-2xl font-bold text-green-500">Why we are best?</p>
                <ul className="list-decimal text-lime-500 font-bold text-lg ml-12">
                    <li>Diverse Job Opportunities</li>
                    <li>User-Friendly Interface</li>
                    <li>Application Tracking</li>
                    <li>Career Resources</li>
                    <li>Fast and Easy Apply</li>

                </ul>
            </div>
            <VideoModal showModal={showModal} setShowModal={setShowModal}></VideoModal>



        </div>
    );
};

export default VideoSection;