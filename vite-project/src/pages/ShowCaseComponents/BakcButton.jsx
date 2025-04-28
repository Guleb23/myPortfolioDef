import React, { useState } from 'react'
import { IoChevronBackSharp } from "react-icons/io5";
const BakcButton = ({ onClick }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            onClick={onClick}
            className='flex items-center w-16 h-6 cursor-pointer overflow-hidden'
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <IoChevronBackSharp
                style={{ transform: 'translateY(2px)' }}
                size={20}
                className={`text-[#9f9fa9] transition-transform duration-300 ${isHovered ? 'translate-x-0' : '-translate-x-1'}`}
            />
            <p
                className={`text-zinc-400 transition-all duration-300 ${isHovered ? 'opacity-100 w-auto ml-1' : 'opacity-0 w-0'}`}
            >
                назад
            </p>
        </div>
    );
};

export default BakcButton
