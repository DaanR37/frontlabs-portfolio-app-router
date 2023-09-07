import { useState, useEffect } from "react";

const DynamicTime = () => {
        const [currentTime, setCurrentTime] = useState(new Date());

        useEffect(() => {
                const interval = setInterval(() => {
                        setCurrentTime(new Date());
                }, 1000);

                return () => {
                        clearInterval(interval);
                };
        }, []);

        return (
                <div className="flex flex-col">
                        <div className="flex mb-4">
                                <p className="text-base">Local Time</p>
                        </div>
                        <span className="opacity-[0.7] font-extralight text-base">
                                {currentTime.toLocaleTimeString()} CEST
                        </span>
                </div>
        )
}

export default DynamicTime;