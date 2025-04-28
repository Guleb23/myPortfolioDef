import React from 'react'
import gsap from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);
const Button = ({ text, className, id }) => {
    const handleClick = (e) => {
        e.preventDefault();
        const target = document.getElementById(id);
        if (target) {
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: target,
                    offsetY: window.innerHeight * 0.15
                },
                ease: "power2.inOut"
            });
        }
    }

    return (
        <a onClick={handleClick} className={`${className ?? ""} cta-wrapper`} href={`#${id}`}>
            <div className='cta-button group'>
                <div className='bg-circle' />
                <p className='text'>{text}</p>
                <div className='arrow-wrapper'>
                    <img alt='arrow' src='/images/arrow-down.svg' />
                </div>
            </div>
        </a>
    );
};

export default Button;