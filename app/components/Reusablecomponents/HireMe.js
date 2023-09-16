import Link from "next/link";
import { CircText2 } from "./Icons";

const HireMe = () => {
    return (
        <div className="absolute bottom-0 right-0 flex items-center 
                        justify-center overflow-hidden lg:right-4 lg:left-auto 
                        lg:top-0 lg:bottom-auto sm:right-0 z-20">
            <div className="relative w-44 lg:w-28 h-auto flex items-center justify-center">
                <CircText2 className="lg:w-[100px] fill-[whitesmoke] animate-spin-slow" />
                <Link href="mailto:frontlabsamsterdam@gmail.com" target="_blank" className="absolute flex items-center justify-center 
                            left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark/40 text-light shadow-md border border-[whitesmoke] hover:border-dark
                            w-20 h-20 rounded-full font-medium hover:bg-dark/100 hover:text-light transition-all duration-[300ms] 
                            ease-in-out lg:w-12 lg:h-12 lg:text-[10px] cursor-pointer">
                    Email
                </Link>
            </div>
        </div>
    )
};

export default HireMe;