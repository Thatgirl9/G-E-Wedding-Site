import React from "react";
import { Link } from "react-router-dom";

const gallery = [
  {
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412143/TAP_5654.jpg",
    alt: "Wedding couple",
    className: "gallery-tall",
  },
  {
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790425917/IMG_7865_1.jpg",
    alt: "Wedding details",
    className: "",
  },
  {
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790412150/TAP_5980.jpg",
    alt: "Bride and groom",
    className: "gallery-wide",
  },
  {
    src: "https://res.cloudinary.com/dtqlkvi26/image/upload/v1790421659/IMG_9462.jpg",
    alt: "Bride and groom-black and white",
    className: "",
  },
  
];

const GalleryOverview = () => {
  return (
     <section className="gallery-section" id="gallery">
          <div className="section-heading centered">
            <p className="eyebrow">A FEW OF OUR FAVOURITE MOMENTS</p>
            <h2>Our story,<br /><em>in photographs.</em></h2>
          </div>

          <div className="gallery-grid">
            {gallery.map((image) => (
              <figure className={image.className} key={image.src}>
                <img src={image.src} alt={image.alt} loading="lazy" />
              </figure>
            ))}
          </div>
         <div className="button-container">
          <Link to="/gallery" className="button">
            View our Gallery ↗
          </Link>
        </div>
        </section>
  )
};

export default GalleryOverview;