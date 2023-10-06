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
    <div className="flex flex-col 
          9xl:text-4xl
          7xl:text-3xl
          5xl:text-2xl
          3xl:text-base
          2xl:text-sm"
    >
      <div className="flex 
          9xl:mb-10
          7xl:mb-6
          3xl:mb-3
          2xl:mb-2"
      >
        <p className="
                  xl:text-sm">
          Local Time
        </p>
      </div>
      <span className="opacity-[0.7] font-extralight 
               xl:text-sm">
        {currentTime.toLocaleTimeString()} CEST
      </span>
    </div>
  )
}

export default DynamicTime;