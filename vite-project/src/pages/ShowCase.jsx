import React, { useEffect, useRef, useState } from 'react'
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import Modal from './ShowCaseComponents/Modal';
import { projects } from '../constants';
import { FaAngleDown } from "react-icons/fa";

gsap.registerPlugin(ScrollTrigger);

const ShowCase = () => {
    const sectionRef = useRef(null);
    const projOneRef = useRef(null);
    const projTwoRef = useRef(null);
    const projThreeRef = useRef(null);

    const [isModalOpen, setIsModalOpen] = useState(false);

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (proj) => {
        setSelectedProject(proj);
        setIsModalOpen(true);
    }

    useEffect(() => {
        if (isModalOpen) {
            ScrollTrigger.getAll().forEach(trigger => trigger.disable(false)); // временно отключаем
        } else {
            ScrollTrigger.getAll().forEach(trigger => trigger.enable()); // включаем обратно
        }
    }, [isModalOpen]);
    useGSAP(() => {
        const project = [projOneRef.current, projTwoRef.current, projThreeRef.current];
        gsap.from(sectionRef.current,
            {
                opacity: 0
            },
            {
                opacity: 1,
                duration: 1.5,
            })

        project.forEach((item, index) => {
            gsap.fromTo(item, {
                y: 50,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 1,
                delay: 0.3 * (index + 1),
                scrollTrigger: {
                    trigger: item,
                    start: "top bottom-=100"
                }
            }
            )
        })
    }, [])
    const onClick = () => {

        window.open("https://github.com/Guleb23", '_blank');

    };
    return (
        <section ref={sectionRef} id='work' className='app-showcase'>
            <div className="w-full">
                <div className="showcaselayout">
                    <div onClick={() => openModal(projects[0])} ref={projOneRef} className="first-project-wrapper cursor-pointer ">
                        <div className=".image-wrapper-f ">
                            <img className='object-bottom object-contain' src={projects[0].photos[0]} alt="Ryde App Interface" />
                        </div>
                        <div className="text-content">
                            <h2>
                                {projects[0].name}
                            </h2>
                            <p className="text-white-50 md:text-xl">
                                {projects[0].description}
                            </p>
                        </div>
                    </div>

                    <div className="project-list-wrapper overflow-hidden">
                        <div onClick={() => openModal(projects[1])} ref={projTwoRef} className="project cursor-pointer ">
                            <div className="image-wrapper bg-[#FFEFDB]">
                                <img
                                    src={projects[1].photos[0]}
                                    alt="Library Management Platform"
                                />
                            </div>
                            <h2>{projects[1].name}</h2>
                        </div>

                        <div onClick={() => openModal(projects[2])} ref={projThreeRef} className="project cursor-pointer ">
                            <div className="image-wrapper bg-[#FFE7EB]">
                                <img src={projects[2].photos[0]} alt="YC Directory App" />
                            </div>
                            <h2>{projects[2].name}</h2>
                        </div>
                    </div>

                </div>
                <button onClick={onClick} className='w-full my-4 cursor-pointer  rounded-xl flex justify-center items-center'>
                    <FaAngleDown className='animate-bounce' size={30} />
                </button>
            </div>
            <Modal project={selectedProject} isOpen={isModalOpen} onClose={() => { setIsModalOpen(false); setSelectedProject(null) }}></Modal>
        </section>
    )
}

export default ShowCase
