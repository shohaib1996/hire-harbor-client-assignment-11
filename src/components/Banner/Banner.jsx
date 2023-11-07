
import { motion } from 'framer-motion';
const Banner = () => {
    return (
        <div className="flex items-center justify-center max-w-screen-xl mx-auto p-5">
            <motion.div
                initial={{ x: -350 }}
                animate={{ x: -10 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex-1 space-y-7">
                <h1 className="text-[#005025] text-4xl lg:text-6xl font-bold">HireHarbor - Your Gateway to Talent and Opportunities</h1>
                <p className="text-lg text-[#6c757d]">HireHarbor is your compass in the world of job hunting and talent acquisition. We streamline the process of connecting job seekers with employers, providing a simplified, effective, and secure platform. Chart your career course or discover your next star employee with HireHarbor</p>
                <div className="form-control">
                    <label className="input-group">
                        <input type="text" placeholder="Search Job..." className="input w-2/3 input-bordered" />
                        <span className="btn bg-green-600 px-5 rounded-2xl hover:bg-slate-400 border-none py-2 text-white">Search</span>
                    </label>
                </div>
            </motion.div>
            <motion.div
                initial={{ x: 350 }}
                animate={{ x: 10 }}
                transition={{ duration: 0.5, delay: 0.25 }}
                className="flex-1 relative">
                <img src="https://jobi-nextjs.vercel.app/_next/static/media/ils_01.ac504e33.svg" alt="" />
                <motion.div
                    initial={{ y: 100 }}
                    animate={{y: [50, -50, 50], }}
                    transition={{ duration: 7, delay: 1, repeat: Infinity }}
                    className='absolute top-0'>
                    <img src="https://jobi-nextjs.vercel.app/_next/static/media/ils_01_02.2a54eed9.svg" alt="" />
                </motion.div>
            </motion.div>

        </div>
    );
};

export default Banner;