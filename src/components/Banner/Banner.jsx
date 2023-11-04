
const Banner = () => {
    return (
        <div className="flex items-center justify-center max-w-screen-xl mx-auto p-5">
            <div className="flex-1 space-y-7">
                <h1 className="text-[#005025] text-4xl lg:text-6xl font-bold">HireHarbor - Your Gateway to Talent and Opportunities</h1>
                <p className="text-lg text-[#6c757d]">HireHarbor is your compass in the world of job hunting and talent acquisition. We streamline the process of connecting job seekers with employers, providing a simplified, effective, and secure platform. Chart your career course or discover your next star employee with HireHarbor</p>
                <div className="form-control">
                    <label className="input-group">
                        <input type="text" placeholder="Search Job..." className="input w-2/3 input-bordered" />
                        <span className="btn bg-green-600 px-5 rounded-2xl hover:bg-slate-400 border-none py-2 text-white">Search</span>
                    </label>
                </div>
            </div>
            <div className="flex-1"> 
                <img src="https://jobi-nextjs.vercel.app/_next/static/media/ils_01.ac504e33.svg" alt="" />
            </div>

        </div>
    );
};

export default Banner;