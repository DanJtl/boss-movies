import React, { useState } from 'react'
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';

function RecentlyViewed({title}) {
    const [recentlyViewed, setRecentlyViewed] = useState([]);

    const slideLeft = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = () => {
        let slider = document.getElementById("slider");
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
             <div className='w-10/12 mx-auto my-6'>
                <h2 className='text-white md:text-xl font-bold'>{title}</h2>
                <div className='relative flex items-center group'>
                    <AiOutlineArrowLeft 
                        onClick={slideLeft}
                        className='absolute bg-firstColor rounded-full opacity-75 hover:opacity-100 z-50 cursor-pointer group-hover:block' 
                        size={60} 
                    />
                    <div id={'slider'} className="w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide relative">
                          
                    </div>  
                    <AiOutlineArrowRight 
                        onClick={slideRight}
                        className='absolute right-0 bg-firstColor rounded-full opacity-75 hover:opacity-100 z-50 cursor-pointer group-hover:block' 
                        size={60} 
                    />
                </div> 
            </div>
        </>  
    )
}

export default RecentlyViewed