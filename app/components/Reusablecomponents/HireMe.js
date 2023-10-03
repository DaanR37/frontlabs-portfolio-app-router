import Link from "next/link";
import { CircText2 } from "./Icons";

const HireMe = () => {
  return (
    <div className="absolute flex items-center justify-center overflow-hidden z-20
                        bottom-0 right-0 
                        lg:right-4 lg:left-auto 
                        lg:top-0 lg:bottom-auto 
                        sm:right-0">
      <div className="relative flex items-center justify-center
                  w-44 h-auto
                  9xl:w-[500px]
                  7xl:w-[450px]
                  5xl:w-[400px]
                  4xl:w-[350px]
                  3xl:w-44
                  lg:w-40
                  md:w-28"
      >
        <CircText2 className="fill-[whitesmoke] animate-spin-slow" />
        <Link href="mailto:frontlabsamsterdam@gmail.com" target="_blank" className="absolute flex items-center justify-center 
                            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/40 text-light shadow-md 
                            border border-[whitesmoke] hover:border-dark rounded-full font-medium 
                            hover:bg-dark/100 hover:text-light transition-all duration-[300ms] ease-in-out cursor-pointer
                            w-20 h-20
                            9xl:w-[240px] 9xl:h-[240px] 9xl:text-[55px]
                            7xl:w-[200px] 7xl:h-[200px] 7xl:text-[50px]
                            6xl:text-[42.5px]
                            5xl:w-[180px] 5xl:h-[180px] 5xl:text-[40px]
                            4xl:w-[150px] 4xl:h-[150px] 4xl:text-[35px]
                            3xl:w-20 3xl:h-20 3xl:text-[20px]
                            lg:w-16 lg:h-16 lg:text-[14px]
                            md:w-12 md:h-12 md:text-[10px]"
        >
          Email
        </Link>
      </div>
    </div>
  )
};

export default HireMe;