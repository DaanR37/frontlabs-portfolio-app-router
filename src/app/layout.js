import './globals.scss';
import { roboto_flex } from './fonts';

export default function RootLayout({ children }) {
   return (
      <>
         <html lang="en">
            <body className={roboto_flex.className}>
               {children}
            </body>
         </html>
      </>
   )
};
