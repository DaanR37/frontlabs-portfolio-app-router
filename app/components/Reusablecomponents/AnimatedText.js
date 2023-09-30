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
      <div className="flex items-center justify-center overflow-hidden
            w-full mx-auto  
            py-2 
            lg:px-6 
            md:px-4 
            sm:py-0 sm:px-8 
            xs:px-4">
         <motion.h1 className={`${className} inline-block 
               w-full text-left text-light font-semibold 
               9xl:text-9xl
               7xl:text-8xl
               6xl:text-7xl
               4xl:text-6xl
               3xl:text-5xl
               2xl:text-4xl 
               xl:text-[2rem] xl:!leading-[1.8rem] 
               lg:text-center
               md:text-2xl 
               xs:text-xl`}
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