import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css'; 

const CarouselComponent = () => {
    const images = [
        { src: "img/ux_samples/models.webp", legend: "Starting screen with model training options" },
        { src: "img/ux_samples/dataset_list.webp", legend: "Dataset list for model training" },
        { src: "img/ux_samples/model_create_dataset.webp", legend: "Dataset creation" },
        { src: "img/ux_samples/model_test.webp", legend: "Model testing" },
        { src: "img/ux_samples/empty_queue.webp", legend: "Empty state 1" },
        { src: "img/ux_samples/empty_screen.webp", legend: "Empty state 2" },
        { src: "img/ux_samples/user_acc.webp", legend: "User account" },
        { src: "img/ux_samples/error_screen.webp", legend: "Error messages" }
    ]; 
    const [photoIndex, setPhotoIndex] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    return (
       <div>
          <Carousel showThumbs={false} onClickItem={(index) => { setPhotoIndex(index); setIsOpen(true); }}>
             {images.map((image, index) => 
                <div key={index}>
                   <img src={image.src} alt="Carousel item" />
                   <p className="legend">{image.legend}</p>
                </div>
             )}
          </Carousel>
          {isOpen && (
             <Lightbox
                mainSrc={images[photoIndex].src}
                nextSrc={images[(photoIndex + 1) % images.length].src}
                prevSrc={images[(photoIndex + images.length - 1) % images.length].src}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                   setPhotoIndex((photoIndex + images.length - 1) % images.length)
                }
                onMoveNextRequest={() =>
                   setPhotoIndex((photoIndex + 1) % images.length)
                }
             />
          )}
       </div>
    );
}
 
export default CarouselComponent;
