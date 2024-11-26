import React, { useState } from "react";

const Gallery = () => {
  const images = [
    "/assets/gallery/g1.jpg",
    "/assets/gallery/g2.jpeg",
    "/assets/gallery/g3.webp",
    "/assets/gallery/Apartment Painting Service.jpg",
    "/assets/gallery/Asian Paints Painting Service.jpg",
    "/assets/gallery/House Painting Service.jpg",
    "/assets/gallery/Interior Wall Painting Service.jpg",
    "/assets/gallery/Rental Home Flats Painting Service.webp",
    "/assets/gallery/Enamal Painting Service.jpg",
    "/assets/gallery/g4.jpg",
    "/assets/gallery/g5.jpg",
    "/assets/gallery/pexels-apgpotr-1036863.jpg",
    "/assets/gallery/pexels-binyaminmellish-106399.jpg",
    "/assets/gallery/Residential Painting Service.jpg",
    "/assets/gallery/pexels-blue-bird-7218576.jpg",
    "/assets/gallery/g7.jpg",
  ];

  const [selectedImage, setSelectedImage] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImage(images[index]);
    setCurrentIndex(index);
  };

  const closeModal = () => {
    setSelectedImage(null);
    setCurrentIndex(null);
  };

  const nextImage = () => {
    if (currentIndex < images.length - 1) {
      setSelectedImage(images[currentIndex + 1]);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentIndex > 0) {
      setSelectedImage(images[currentIndex - 1]);
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="p-4">
      <div>
        <h2 className="text-5xl font-bold text-center mb-4">Gallery</h2>
        <p className="font-semibold text-center">Welcome to our gallery</p>
        <p className="px-4 lg:px-24 pt-4 pb-14 text-lg text-center text-gray-700">
          "Welcome to our curated gallery, where every painting tells a story,
          capturing moments of inspiration, emotion, and beauty. Our collection
          spans diverse styles and techniques, celebrating the richness of
          color, form, and imagination. Each artwork invites you to explore a
          unique perspective and connect with the artist's vision. Whether
          you’re an art enthusiast or simply exploring, we hope these pieces
          inspire, captivate, and bring a sense of wonder to your day. Thank you
          for visiting our gallery and supporting the beauty of art!"
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-lg group"
            onClick={() => openModal(index)}
          >
            <img
              src={image}
              alt={`Gallery item ${index + 1}`}
              className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        ))}
      </div>
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-full max-w-4xl mx-4">
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-70 transition"
            >
              X
            </button>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-full max-h-screen object-contain rounded-lg"
            />
            <div className="absolute top-1/2 left-4 transform -translate-y-1/2">
              <button
                onClick={prevImage}
                className="text-white text-4xl hover:text-gray-400"
              >
                &lt;
              </button>
            </div>
            <div className="absolute top-1/2 right-4 transform -translate-y-1/2">
              <button
                onClick={nextImage}
                className="text-white text-4xl hover:text-gray-400"
              >
                &gt;
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
