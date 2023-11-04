import banner from '../assets/images/banner.jpg';
import { FaArrowTrendUp } from 'react-icons/fa6';

const Banner = () => {
    return (
        <div className='relative'>
            <div> 
                <img src={banner} alt="banner" className='max-h-[50vh] lg:max-h-[80vh] w-full object-cover' />
                <div className='bg-gray-700 inset-0 absolute opacity-70'></div>
                <div className='absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2'>
                    <div className='max-w-xl text-center space-y-4'>
                        <h2 className='text-5xl font-bold text-[#1A064E]'>Learn Together, Grow Faster</h2>
                        <p className='text-lg text-gray-300'>The best choice for your education.</p>
                        <div>
                        <button className="btn bg-[#6440FA] rounded-lg capitalize text-lg font-semibold text-gray-300 hover:text-black hover:bg-secondary">Explore Now <FaArrowTrendUp /></button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;