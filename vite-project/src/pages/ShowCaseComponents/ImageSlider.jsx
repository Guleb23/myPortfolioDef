import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { IoChevronBack, IoChevronForward } from 'react-icons/io5';

function ImageSlider({ photos }) {
    const prevRef = useRef(null);
    const nextRef = useRef(null);

    return (
        <div className="relative w-full">
            {/* Кастомные кнопки */}
            <button
                ref={prevRef}
                className="absolute top-1/2 left-2 z-10 -translate-y-1/2 bg-zinc-500 p-2 rounded-full shadow hover:bg-zinc-300 transition"
            >
                <IoChevronBack color='white' />
            </button>
            <button
                ref={nextRef}
                className="absolute top-1/2 right-2 z-10 -translate-y-1/2 bg-zinc-500  p-2 rounded-full shadow hover:bg-zinc-300 transition"
            >
                <IoChevronForward color='white' />
            </button>

            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={30}
                slidesPerView={1}
                navigation={{
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                }}
                onInit={(swiper) => {
                    // чтобы кнопки стали активны после рендера
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                    swiper.navigation.init();
                    swiper.navigation.update();
                }}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000 }}
                loop
            >
                {photos.map((photo, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex items-center justify-center  w-full">
                            <img
                                src={photo}
                                alt={`Slide ${index}`}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ImageSlider;
