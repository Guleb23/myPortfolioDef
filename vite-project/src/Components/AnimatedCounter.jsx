import { useEffect, useRef, useState } from "react";
import { ScrollTrigger } from "gsap/all";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import CountUp from "react-countup";
import { counterItems } from "../constants";

gsap.registerPlugin(ScrollTrigger);

const AnimatedCounter = () => {
    const [shouldStart, setShouldStart] = useState(false);
    const counterRef = useRef(null);

    useGSAP(() => {
        ScrollTrigger.create({
            trigger: "#counter",
            start: "top center",
            onEnter: () => setShouldStart(true),
        });
    }, []);

    return (
        <div id="counter" ref={counterRef} className="padding-x-lg xl:mt-0 mt-32">
            <div className="mx-auto grid-4-cols">
                {counterItems.map((item, index) => (
                    <div
                        key={index}
                        className="bg-zinc-900 rounded-lg p-10 flex flex-col justify-center"
                    >
                        <div className="counter-number text-white-50 text-5xl font-bold mb-2">
                            {shouldStart && (
                                <CountUp end={item.value} suffix={item.suffix} duration={2.5} />
                            )}
                        </div>
                        <div className="text-white-50 text-lg">{item.label}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AnimatedCounter;
