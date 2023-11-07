import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const CountUpSection = () => {
    const [counterOn, setCounterOn] = useState(false)
    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            {
                counterOn &&
                <div className='max-w-6xl mx-auto text-black p-8 lg:p-12 flex flex-col lg:flex-row justify-around border-2 border-green-500 mb-12 rounded-lg'>
                    <div className='flex flex-col items-center justify-center text-center space-y-5'>
                        <div className='text-4xl font-bold'><CountUp start={1} end={100} duration={7} delay={1}></CountUp> k+</div>
                        <span className='text-lg font-semibold'>Completed Jobs</span>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center space-y-5'>
                        <div className='text-4xl font-bold'><CountUp start={1} end={500} duration={7} delay={1}></CountUp> k+</div>
                        <span className='text-lg font-semibold'>Worldwide Client</span>
                    </div>
                    <div className='flex flex-col items-center justify-center text-center space-y-5'>
                        <div className='text-4xl font-bold'><CountUp start={1} end={600} duration={7} delay={1}></CountUp> k+</div>
                        <span className='text-lg font-semibold'>Dollar Payout</span>
                    </div>

                </div>
            }
        </ScrollTrigger>

    );
};

export default CountUpSection;