'use client';
import { Urbanist } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import { AnimatePresence } from 'framer-motion';
import Footer from '@/components/Footer';
import { useState } from 'react';
import MenuOverlay from '@/components/MenuOverlay';

const urbanist = Urbanist({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [menuOverlayOpen, setMenuOverlayOpen] = useState(false);
  return (
    <html lang="en-GB">
      <body className={urbanist.className}>
        <Navbar
          menuOverlayOpen={menuOverlayOpen}
          setMenuOverlayOpen={setMenuOverlayOpen}
        />
        <AnimatePresence initial={false} mode="wait">
          {menuOverlayOpen && (
            <MenuOverlay
              menuOverlayOpen={menuOverlayOpen}
              setMenuOverlayOpen={setMenuOverlayOpen}
            />
          )}
        </AnimatePresence>
        {children}
        <Footer />
      </body>
    </html>
  );
}
