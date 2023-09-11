import { motion } from "framer-motion";

const quote = {
        initial: {
                opacity: 1,
        },
        animate: {
                opacity: 1,
                transition: {
                        delay: 0.5,
                        staggerChildren: 0.4,
                }
        }
}

const singleWord = {
        initial: {
                opacity: 0,
                y: 50,
        },
        animate: {
                opacity: 1,
                y: 0,
                transition: {
                        duration: 1,
                }
        }
}

export default function AnimatedText({ text, className = "" }) {
        return (
                <div className="flex w-full items-center justify-center text-center mx-auto 
                        overflow-hidden py-2 lg:px-6 md:px-4 sm:py-0 sm:px-8 xs:px-4">
                        <motion.h1 className={`inline-block w-full text-light font-semibold 
                                        text-7xl ${className}`}
                                variants={quote}
                                initial="initial"
                                animate="animate"
                        >
                                {
                                        text.split(" ").map((word, index) =>
                                                <motion.span key={word + '-' + index} className="inline-block"
                                                        variants={singleWord}
                                                >
                                                        {word}&nbsp;
                                                </motion.span>
                                        )
                                }
                        </motion.h1>
                </div>
        )
}