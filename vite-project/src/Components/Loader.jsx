// components/Loader.jsx
import { motion } from "framer-motion";

const Loader = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black/80 z-50 backdrop-blur-sm">
            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center gap-6 p-8 rounded-xl bg-gray-900/80 border border-indigo-900/50"
            >
                {/* Анимированные точки */}
                <div className="flex space-x-3">
                    {[...Array(3)].map((_, i) => (
                        <motion.div
                            key={i}
                            className="w-4 h-4 bg-indigo-400 rounded-full"
                            animate={{
                                y: [0, -10, 0],
                                scale: [1, 1.2, 1],
                                opacity: [0.6, 1, 0.6],
                            }}
                            transition={{
                                duration: 1.5,
                                repeat: Infinity,
                                delay: i * 0.2,
                            }}
                        />
                    ))}
                </div>

                {/* Текст с анимацией */}
                <motion.p
                    className="text-xl font-medium text-indigo-100 text-center"
                    animate={{
                        opacity: [0.8, 1, 0.8],
                    }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                    }}
                >
                    Готовим 3D-вселенную...
                    <span className="block text-sm text-indigo-300 mt-1">
                        Это займет всего мгновение
                    </span>
                </motion.p>

                {/* Прогресс-бар */}
                <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                        className="h-full bg-gradient-to-r from-indigo-400 to-cyan-400"
                        initial={{ width: 0 }}
                        animate={{ width: "100%" }}
                        transition={{
                            duration: 2.5,
                            repeat: Infinity,
                            repeatType: "reverse",
                            ease: "easeInOut",
                        }}
                    />
                </div>
            </motion.div>
        </div>
    );
};

export default Loader;