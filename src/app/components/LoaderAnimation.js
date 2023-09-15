"use client";
import React from 'react';
import { AnimatePresence } from 'framer-motion';
import Preloader from './Reusablecomponents/Preloader';

export default function LoaderAnimation({ isLoading }) {
   return (
      <AnimatePresence mode='wait'>
         {isLoading ? <Preloader /> : null}
      </AnimatePresence>
   );
}
