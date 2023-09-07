// import { useEffect } from 'react';

// export default function useScroll(onScroll) {
//     useEffect(() => {
//         document.body.addEventListener('touchmove', onScroll);
//         window.addEventListener('scroll', onScroll);

//         return () => {
//             document.body.removeEventListener('touchmove', onScroll);
//             window.removeEventListener('scroll', onScroll);
//         };
//     }, [onScroll]);
// }