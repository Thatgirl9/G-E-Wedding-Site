import React from "react";
import "./GalleryPage.css";
import Header from "./Components/Header";

const galleryImages = [
  {
    id: 1,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790425917/IMG_7865_1.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 2,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790425923/IMG_7826.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 3,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790421662/IMG_9477.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 4,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790425922/IMG_7875.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 5,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790440306/IMG_7824.jpg",
    alt: "Wedding details",
    className: "",
  },

  {
    id: 6,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412152/TAP_5954.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 7,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790421645/IMG_9556.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 8,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790421660/IMG_9455.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 9,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790421660/IMG_9470.jpg",
    alt: "Wedding details",
    className: "",
  },

  {
    id: 10,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412152/TAP_5989.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 11,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412150/TAP_5987.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 12,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412150/TAP_5978.jpg",
    alt: "Wedding details",
    className: "",
  },

  {
    id: 13,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412149/TAP_5956.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    id: 14,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412143/TAP_5654.jpg",
    alt: "Wedding couple",
    className: "gallery-tall",
  },

  {
    id: 15,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412150/TAP_5980.jpg",
    alt: "Bride and groom",
    className: "gallery-wide",
  },
  {
    id: 16,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790421659/IMG_9462.jpg",
    alt: "Bride and groom-black and white",
    className: "",
  },
  {
    id: 17,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412146/TAP_5700.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 18,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412148/TAP_5715.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 19,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412149/TAP_5696.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 20,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412145/TAP_5676.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 21,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412145/TAP_5691.jpg",
    alt: "Bride and groom",
    className: "",
  },

  {
    id: 22,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412145/TAP_5661.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 23,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412144/TAP_5689.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 24,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412143/TAP_5654.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 25,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412141/TAP_5622.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 26,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412141/TAP_5652.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 27,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412140/TAP_5649.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 28,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412140/TAP_5632.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 29,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412140/TAP_5638.jpg",
    alt: "Bride and groom",
    className: "",
  },
  {
    id: 30,
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412137/TAP_5629.jpg",
    alt: "Bride and groom",
    className: "",
  },
];

const GalleryPage = () => {
  return (
    <main className="gallery-page-section">
      <Header />
      <section className="gallery-page">
        <div className="section-heading centered">
          <p className="eyebrow">A FEW OF OUR FAVOURITE MOMENTS</p>
          <h2>
            Our story,
            <br />
            <em>in photographs.</em>
          </h2>
        </div>
        <div className="gallery-page-grid">
          {galleryImages.map((image) => (
            <figure className={image.className} key={image.src}>
              <img src={image.src} alt={image.alt} loading="lazy" />
            </figure>
          ))}
        </div>
      </section>
    </main>
  );
};

export default GalleryPage;
