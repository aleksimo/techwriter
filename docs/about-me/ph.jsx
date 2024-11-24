import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
// import Lightbox from 'react-image-lightbox';
// import 'react-image-lightbox/style.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

const CarCom = () => {
    const images = [
      {src: useBaseUrl("img/photos/DSC_3329.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSC_3341.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSC_4133.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/IMG_20220608_220429_396.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/IMG_20220612_083743_538.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/IMG_20220608_220432_959.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF6951.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSC_4320.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/IMG_20220612_083716_055.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF7270.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF6740.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF7284.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/IMG_20220613_234458_743.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF5439.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF5458.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF5471.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF5632.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF5746.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF5788.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF6344.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF6404.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF6521.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/IMG_20210422_144041_984.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/IMG_20210422_144048_377.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/IMG_20210422_144054_665.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF8804.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF8675.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF8738.webp"), legend: "Iceland"},
      // {src: useBaseUrl("/img/photos/DSCF6467.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF8863.webp"), legend: "Iceland"},
      {src: useBaseUrl("/img/photos/DSCF7722.webp"), legend: "Iceland"},
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
 
export default CarCom;
