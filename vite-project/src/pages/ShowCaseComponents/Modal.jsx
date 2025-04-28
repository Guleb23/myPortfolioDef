import { motion, AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import BakcButton from "./BakcButton";
import TechCards from "./TechCards";
import ImageSlider from "./ImageSlider";
import React from "react";

function Modal({ isOpen, onClose, project }) {
    useEffect(() => {
        if (isOpen) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.style.overflow = "hidden";
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        }

        return () => {
            document.body.style.overflow = "";
            document.body.style.paddingRight = "";
        };
    }, [isOpen]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="fixed inset-0 bg-black/50 flex items-center justify-center z-[100] p-4"
                    onClick={onClose}
                >
                    <motion.div
                        className="w-full h-[60%] max-w-6xl bg-zinc-900 rounded-lg shadow-xl flex flex-col justify-center"
                        initial={{ y: -20, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: 20, opacity: 0 }}
                        transition={{ type: "tween", duration: 0.3 }}
                        style={{
                            maxHeight: "90vh",
                            willChange: "transform, opacity"
                        }}
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="p-4">
                            <BakcButton onClick={onClose} />
                        </div>

                        <div className="flex flex-col-reverse lg:flex-row gap-6 p-6 overflow-auto">
                            <div className="lg:w-1/2">
                                <ImageSlider photos={project.photos} />
                            </div>
                            <div className="lg:w-1/2 flex flex-col gap-6 overflow-y-auto">
                                <h2 className="text-xl md:text-3xl font-bold">{project.name}</h2>
                                <p className="text-white-50">{project.description}</p>
                                <h2 className="text-xl md:text-3xl font-bold">Используемые технологии:</h2>
                                <div className="flex justify-center gap-8">
                                    {project.server && <TechCards link={project.server.link} icon={project.server.icon} />}
                                    {project.client && <TechCards link={project.client.link} icon={project.client.icon} />}
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export default React.memo(Modal);