'use client';

import AshelyObsession from '@/app/gallery/AshleyObsession';
import SeanXTife from '@/app/gallery/SeanXTife';
import IdluamXMars from '@/app/gallery/IdluamXMars';
import Illustrations from '@/app/gallery/Illustrations';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import GalleryModal from '@/components/GalleryModal';
import { ModalContent } from '@/interfaces/ModalContent';

const Gallery = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<ModalContent>({
    src: undefined,
    alt: undefined,
    title: undefined,
    year: undefined,
  });

  const handleImageFocus = (data: ModalContent) => {
    return () => {
      setModalContent({
        src: data.src,
        alt: data.alt,
        title: data.title,
        year: data.year,
      });
      setModalOpen(true);
    };
  };

  const handleImageExit = () => {
    setModalOpen(false);
    setModalContent({
      src: undefined,
      alt: undefined,
      title: undefined,
      year: undefined,
    });
  };

  return (
    <div className="gallery-container bg-black flex flex-col justify-start">
      <div className="gallery-items">
        <AnimatePresence initial={false} mode="wait">
          {modalOpen && (
            <GalleryModal
              modalContent={modalContent}
              onClose={handleImageExit}
            />
          )}
        </AnimatePresence>
        <AshelyObsession onOpen={handleImageFocus} />
        <SeanXTife onOpen={handleImageFocus} />
        <Illustrations onOpen={handleImageFocus} />
        <IdluamXMars onOpen={handleImageFocus} />
      </div>
    </div>
  );
};

export default Gallery;

// import React from 'react';

// const page = () => {
//   return <div>page</div>;
// };

// export default page;
