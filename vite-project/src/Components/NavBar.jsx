import React, { useEffect } from 'react';
import { navLinks } from '../constants';
import gsap from 'gsap'; // Импортируем GSAP

const NavBar = () => {
    // Функция для плавного скролла через GSAP
    const handleSmoothScroll = (e) => {
        e.preventDefault();
        const targetId = e.currentTarget.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            // Прокручиваем к элементу с анимацией
            gsap.to(window, {
                duration: 1.2,
                scrollTo: {
                    y: targetElement,
                    offsetY: 80, // Отступ сверху (если есть фиксированный хедер)
                },
                ease: "power3.out", // Плавное замедление
            });
        }
    };

    // Вешаем обработчик на все ссылки с якорями
    useEffect(() => {
        const links = document.querySelectorAll('a[href^="#"]');
        links.forEach(link => {
            link.addEventListener('click', handleSmoothScroll);
        });

        return () => {
            links.forEach(link => {
                link.removeEventListener('click', handleSmoothScroll);
            });
        };
    }, []);

    return (
        <header className='navbar bg-black/70 p-8'>
            <div className='inner'>
                <a className='logo' href='#hero'>
                    Глеб
                </a>
                <nav className='desktop'>
                    <ul>
                        {navLinks.map(({ link, name }) => (
                            <li className='group' key={name}>
                                <a href={link}>
                                    <span>{name}</span>
                                    <span className='underline'></span>
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                <a href='#contact' className='contact-btn group'>
                    <div className='inner'>
                        <span>Связаться</span>
                    </div>
                </a>
            </div>
        </header>
    );
};

export default NavBar;