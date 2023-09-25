// "use client";
import { useEffect, useRef } from "react";

function Cursor() {
   const cursorRef = useRef(null)
   useEffect(() => {
      if (cursorRef.current == null || cursorRef == null)
         return;
      document.addEventListener('mousemove', e => {
         if (cursorRef.current == null)
            return;
         cursorRef.current.setAttribute("style", "top: " + (e.pageY) + "px; left: " + (e.pageX) + "px;")
      })

      document.addEventListener('click', () => {
         if (cursorRef.current == null)
            return;
         cursorRef.current.classList.add("expand");
         setTimeout(() => {
            if (cursorRef.current == null)
               return;
            cursorRef.current.classList.remove("expand");
         }, 500)
      })
   }, [])

   return (
      <div ref={cursorRef} className='cursor absolute w-[40px] h-[40px] 
            rounded-[50%] pointer-events-none z-50'
      >
      </div>
   )
}

export default Cursor;