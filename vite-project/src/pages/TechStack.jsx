import React from 'react'
import TitleHeader from '../Components/TitleHeader'
import { techStackIcons } from '../constants'
import TechIcon from './TechStackComponents/TechIcon'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
const TechStack = () => {
    useGSAP(() => {
        gsap.fromTo('.tech-card', {
            y: 50,
            opacity: 0
        }, {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
                trigger: '#skills',
                start: "top center"
            }
        })
    }, [])

    return (
        <section id='skills' className='flex-center section-padding'>
            <div className='w-full h-full md:px-10 px-5'>
                <TitleHeader title={`Используемый стек`} sub={`Навыки, которыми я владею`} />
                <div className='tech-grid'>
                    {techStackIcons.map((icon) => (
                        <div className='card-border tech-card overflow-hidden group xl:rounded-3xl rounded-lg'
                            key={icon.name}>
                            <div className='tech-card-content'>
                                <div className='tech-icon-wrapper'>
                                    <TechIcon model={icon} />
                                </div>
                                <div className='paddinx-x w-full'>
                                    <p>
                                        {icon.name}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

        </section>
    )
}

export default TechStack
