import React from 'react'
import { words } from '../constants'
import Button from '../Components/Button'
import HeroModel from '../Components/HeroModels/HeroModel'
import { useGSAP } from "@gsap/react";
import gsap from 'gsap'
import AnimatedCounter from '../Components/AnimatedCounter';

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.3,
                duration: 0.8,
                ease: 'power2.out',
                delay: 0.2
            }
        );
    }, []);

    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.png' alt='background' />
            </div>
            <div className='hero-layout'>
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex gap-7 flex-col'>
                        <div className='hero-text'>
                            <h1>Превращаю
                                <span className='slide '>
                                    <span className='wrapper'>
                                        {words.map((word, index) => (
                                            <span className='flex items-center md:gap-3 gap-1 pb-2' key={word.text + index.toString()}>
                                                <img className='xl:size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50' src={word.imgPath} alt={word.text} />
                                                <span>{word.text}</span>
                                            </span>
                                        ))}
                                    </span>
                                </span>
                            </h1>
                            <h1>в реальные проекты,</h1>
                            <h1>гарантирующие успех</h1>
                        </div>
                        <p className='text-white-50 md:text-xl relative pointer-events-none'>Привет! Я Глеб, junior fullstack-разработчик из Московской области,<br /> специализируюсь на разработке проектов от сервера до клиентской части приложения</p>
                        <Button text={`Проекты`} id={`counter`} className='md:w-80 md:h-16 w-60 h-12' />
                    </div>
                </header>
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroModel />
                    </div>
                </figure>
            </div>
            <AnimatedCounter />
        </section>
    )
}

export default Hero
