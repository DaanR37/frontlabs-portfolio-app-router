'use client'
import './globals.scss';
import { roboto_flex } from './fonts';
import dynamic from 'next/dynamic';


const DynamicNavbar = dynamic(() => import('../components/Navbar'), {
        ssr: false,
});
const DynamicFooter = dynamic(() => import('../components/Footer'), {
        ssr: false,
});

export default function RootLayout({ children }) {
        return (
                <html lang="en">
                        <body className={roboto_flex.className}>
                                <DynamicNavbar />
                                {children}
                                <DynamicFooter />
                        </body>
                </html>
        )
};
