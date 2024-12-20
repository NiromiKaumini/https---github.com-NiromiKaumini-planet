"use client";  

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation'; 
import './globals.css'; 

const images = [
  { src: '/image/pic4.png', highRes: '/image/highRes/pic4.jpg' },
  { src: '/image/pic5.png', highRes: '/images/highRes/pic5.jpg' },
  { src: '/image/pic6.png', highRes: '/images/highRes/pic6.jpg' },
  { src: '/image/pic7.png', highRes: '/image/highRes/pic1.jpg' },
  { src: '/image/pic8.png', highRes: '/images/highRes/pic2.jpg' },
  { src: '/image/pic10.png', highRes: '/image/highRes/pic4.jpg' },
  { src: '/image/pic2.png', highRes: '/images/highRes/pic2.jpg' },
  { src: '/image/pic3.png', highRes: '/image/highRes/pic4.jpg' },
];

const Gallery = () => {
  const router = useRouter();  

  const handleImageClick = async (image: { highRes: string }) => {
    try {
      const res = await fetch(`/api/checkImage?img=${image.highRes.split('/').pop()}`);
      const data = await res.json();

      if (data.exists) {
        // Open image in new tab if it exists
        window.open(image.highRes, '_blank');
      } else {
        // Redirect to the 404 page if the image doesn't exist
        router.push('/404');  // Using router from next/navigation
      }
    } catch (error) {
      console.error("Error fetching image:", error);
      // Optionally handle errors here
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 text-black-800 py-20">
      <header className="text-center mb-12">
        <h1 className="text-5xl mb-4 m-5.5">About the Planets</h1>
        <p className="text-xl mb-6">The solar system has eight planets: Mercury, Venus, Earth, Mars, Jupiter, Saturn, Uranus, and Neptune.</p>
      </header>

      <section className="gallery-grid">
        {images.map((image, index) => (
          <div
            className="gallery-item"
            key={index}
            onClick={() => handleImageClick(image)}
          >
            <Image
              src={image.src}
              alt={`Gallery image ${index + 1}`}
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Gallery;
