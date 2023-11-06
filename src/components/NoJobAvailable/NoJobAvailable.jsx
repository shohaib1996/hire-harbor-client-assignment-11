import nojob from "../../../public/images/20822846_NA_October_10.jpg"
const NoJobAvailable = () => {
    return (
        <div className="max-w-6xl mx-auto relative">
            <img className="max-w-6xl mx-auto" src={nojob} alt="" />
            <p className="text-4xl font-bold absolute top-1/2 left-1/3 bg-lime-500 px-5 py-2 rounded-lg">You Have Not Applied Yet</p>
        </div>
    );
};

export default NoJobAvailable;