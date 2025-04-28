
const images = import.meta.glob('../assets/**/*.{jpg,png,webp}', { eager: true });


import reactIcon from "../assets/Icons/react-svgrepo-com.svg"
import dotnetIcon from "../assets/Icons/dotnet-svgrepo-com.svg"

const projects = [
  {
    name: 'Веб-приложение для планирования путешествий',
    description: 'Удобное приложение для планирования путешествий, где можно легко создавать маршруты, сохранять места и делиться своими поездками с друзьями!',
    server:
    {
      name: "ASP.NET CORE",
      icon: dotnetIcon,
      link: 'https://github.com/Guleb23/ApiForTravel'
    },
    client:
    {
      name: "React",
      icon: reactIcon,
      link: 'https://github.com/Guleb23/TravelApp'
    },
    folder: 'travels', // Указываем папку для этого проекта
    photos: getSortedPhotos(images, 'travels') // Фильтруем по папке
  },
  {
    name: 'Веб-сайт для компании Brainwave',
    description: 'Сверстал интерфейс по макету с адаптивом под все экраны. Тестировал разные варианты дизайна, подбирал оптимальные решения. Использовал современные технологии: Flexbox, Grid, CSS-переменные.',
    client:
    {
      name: "React",
      icon: reactIcon,
      link: 'https://github.com/Guleb23/brainWave'
    },



    folder: 'Brainvawe',
    photos: getSortedPhotos(images, 'Brainvawe')
  },
  {
    name: 'Веб-приложение учета товаров',
    description: 'Веб-приложение для учета товаров с бэкендом на ASP.NET Core и фронтендом на React. Для взаимодействия между клиентом и сервером используется Axios. Данные хранятся в PostgreSQL с доступом через Entity Framework Core. Реализованы основные CRUD-операции, авторизация и фильтрация товаров.Интерфейс адаптивный, работает на всех устройствах.',
    server:
    {
      name: "ASP.NET CORE",
      icon: dotnetIcon,
      link: 'https://github.com/Guleb23/OrdersUsersApi'
    },
    client:
    {
      name: "React",
      icon: reactIcon,
      link: 'https://github.com/Guleb23/testServer'
    },
    folder: 'Orders',
    photos: getSortedPhotos(images, 'Orders')
  }
];

// Функция для фильтрации и сортировки фото
function getSortedPhotos(images, folderName) {
  return Object.values(images)
    .filter(module => module.default.includes(`/${folderName}/`)) // Фильтр по папке
    .map(module => module.default)
    .sort((a, b) => {
      const numA = parseInt(a.match(/(\d+)/)?.[0] || 0);
      const numB = parseInt(b.match(/(\d+)/)?.[0] || 0);
      return numA - numB;
    });
}








const navLinks = [
  {
    name: "Работы",
    link: "#work",
  },

  {
    name: "Стек",
    link: "#skills",
  },

];
const words = [
  { text: "Идеи", imgPath: "/images/ideas.svg" },
  { text: "Концепты", imgPath: "/images/concepts.svg" },
  { text: "Дизайн", imgPath: "/images/designs.svg" },
  { text: "Код", imgPath: "/images/code.svg" },
  { text: "Идеи", imgPath: "/images/ideas.svg" },
  { text: "Концепты", imgPath: "/images/concepts.svg" },
  { text: "Дизайн", imgPath: "/images/designs.svg" },
  { text: "Код", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 3, suffix: "+", label: "Года опыта в программировании" },
  { value: 30, suffix: "+", label: "Клиентов" },
  { value: 20, suffix: "+", label: "Созданных проектов" },
  { value: 90, suffix: "%", label: "Хороших отзывов" },
];

const logoIconsList = [
  {
    imgPath: "/images/logos/company-logo-1.png",
  },
  {
    imgPath: "/images/logos/company-logo-2.png",
  },
  {
    imgPath: "/images/logos/company-logo-3.png",
  },
  {
    imgPath: "/images/logos/company-logo-4.png",
  },
  {
    imgPath: "/images/logos/company-logo-5.png",
  },
  {
    imgPath: "/images/logos/company-logo-6.png",
  },
  {
    imgPath: "/images/logos/company-logo-7.png",
  },
  {
    imgPath: "/images/logos/company-logo-8.png",
  },
  {
    imgPath: "/images/logos/company-logo-9.png",
  },
  {
    imgPath: "/images/logos/company-logo-10.png",
  },
  {
    imgPath: "/images/logos/company-logo-11.png",
  },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Quality Focus",
    desc: "Delivering high-quality results while maintaining attention to every detail.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Reliable Communication",
    desc: "Keeping you updated at every step to ensure transparency and clarity.",
  },
  {
    imgPath: "/images/time.png",
    title: "On-Time Delivery",
    desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
  },
];

const techStackImgs = [
  {
    name: "React Developer",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python Developer",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Backend Developer",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Interactive Developer",
    imgPath: "/images/logos/three.png",
  },
  {
    name: "Project Manager",
    imgPath: "/images/logos/git.svg",
  },
];

const techStackIcons = [
  {
    name: "React",
    modelPath: "/models/react_logo-transformed.glb",
    scale: 1,
    rotation: [0, 0, 0],
  },
  {
    name: "ASP.NET CORE",
    modelPath: "/models/cisharp.glb",
    scale: 0.1,
    rotation: [0, 0, 0],
  },
  {
    name: "Вaнильный JavaScript ",
    modelPath: "/models/node-transformed.glb",
    scale: 5,
    rotation: [0, -Math.PI / 2, 0],
  },
  {
    name: "ThreeJS",
    modelPath: "/models/three.js-transformed.glb",
    scale: 0.05,
    rotation: [0, 0, 0],
  },
];

const expCards = [
  {
    review: "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
    imgPath: "/images/exp1.png",
    logoPath: "/images/logo1.png",
    title: "Frontend Developer",
    date: "January 2023 - Present",
    responsibilities: [
      "Developed and maintained user-facing features for the Hostinger website.",
      "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
      "Optimized web applications for maximum speed and scalability.",
    ],
  },
  {
    review: "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
    imgPath: "/images/exp2.png",
    logoPath: "/images/logo2.png",
    title: "Full Stack Developer",
    date: "June 2020 - December 2023",
    responsibilities: [
      "Led the development of Docker's web applications, focusing on scalability.",
      "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
      "Contributed to open-source projects that were used with the Docker ecosystem.",
    ],
  },
  {
    review: "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
    imgPath: "/images/exp3.png",
    logoPath: "/images/logo3.png",
    title: "React Native Developer",
    date: "March 2019 - May 2020",
    responsibilities: [
      "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
      "Improved app performance and user experience through code optimization and testing.",
      "Coordinated with the product team to implement features based on feedback.",
    ],
  },
];

const expLogos = [
  {
    name: "logo1",
    imgPath: "/images/logo1.png",
  },
  {
    name: "logo2",
    imgPath: "/images/logo2.png",
  },
  {
    name: "logo3",
    imgPath: "/images/logo3.png",
  },
];

const testimonials = [
  {
    name: "Esther Howard",
    mentions: "@estherhoward",
    review:
      "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
    imgPath: "/images/client1.png",
  },
  {
    name: "Wade Warren",
    mentions: "@wadewarren",
    review:
      "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
    imgPath: "/images/client3.png",
  },
  {
    name: "Guy Hawkins",
    mentions: "@guyhawkins",
    review:
      "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
    imgPath: "/images/client2.png",
  },
  {
    name: "Marvin McKinney",
    mentions: "@marvinmckinney",
    review:
      "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
    imgPath: "/images/client5.png",
  },
  {
    name: "Floyd Miles",
    mentions: "@floydmiles",
    review:
      "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
    imgPath: "/images/client4.png",
  },
  {
    name: "Albert Flores",
    mentions: "@albertflores",
    review:
      "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
    imgPath: "/images/client6.png",
  },
];



export {
  projects,
  words,
  abilities,
  logoIconsList,
  counterItems,
  expCards,
  expLogos,
  testimonials,

  techStackIcons,
  techStackImgs,
  navLinks,
};
