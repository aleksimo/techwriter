import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css"; // Don't forget to import the styles
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const MyGallery = () => {
   const [open, setOpen] = React.useState(false);
   const [index, setIndex] = React.useState(0);

   const toggleOpen = (state) => () => setOpen(state);
   const updateIndex = ({ index: current }) => setIndex(current);

   const slides = [
      {src: "../../img/photos/DSC_2574.webp", description: "Norway"},
      {src: "../../img/photos/DSC_3081.webp", description: "Norway"},
      {src: "../../img/photos/DSC_2439.webp", description: "Norway"},
      {src: "../../img/photos/DSC_2966.webp", description: "Norway"},
      {src: "../../img/photos/DSC_2917.webp", description: "Norway"},
      {src: "../../img/photos/DSC_2518.webp", description: "Norway"},
      {src: "../../img/photos/DSC_2397.webp", description: "Norway"},
      {src: "../../img/photos/DSC_2223.webp", description: "Norway"},
      {src: "../../img/photos/DSC_1971.webp", description: "Norway"},
      {src: "../../img/photos/DSC_1821.webp", description: "Norway"},
      {src: "../../img/photos/DSC_1723.webp", description: "Norway"},
      {src: "../../img/photos/DSC_1561.webp", description: "Norway"},
      {src: "../../img/photos/DSC_1052.webp", description: "Norway"},
      {src: "../../img/photos/DSC_3329.webp", description: "Iceland"},
      {src:"../../img/photos/DSC_3341.webp", description: "Iceland"},
      {src:"../../img/photos/DSC_4133.webp", description: "Iceland"},
      {src:"../../img/photos/IMG_20220608_220429_396.webp", description: "Iceland"},
      {src:"../../img/photos/IMG_20220612_083743_538.webp", description: "Iceland"},
      {src:"../../img/photos/IMG_20220608_220432_959.webp", description: "Iceland"},
      {src:"../../img/photos/DSCF6951.webp", description: "Iceland"},
      {src:"../../img/photos/DSC_4320.webp", description: "Iceland"},
      {src:"../../img/photos/IMG_20220612_083716_055.webp", description: "Iceland"},
      {src:"../../img/photos/DSCF7270.webp", description: "Iceland"},
      {src:"../../img/photos/DSCF6740.webp", description: "Iceland"},
      {src:"../../img/photos/DSCF7284.webp", description: "Iceland"},
      {src:"../../img/photos/IMG_20220613_234458_743.webp", description: "Iceland"},
      {src:"../../img/photos/DSCF5439.webp", description: "Greece"},
      {src:"../../img/photos/DSCF5458.webp", description: "Greece"},
      {src:"../../img/photos/DSCF5471.webp", description: "Greece"},
      {src:"../../img/photos/DSCF5632.webp", description: "Greece"},
      {src:"../../img/photos/DSCF5746.webp", description: "Greece"},
      {src:"../../img/photos/DSCF5788.webp", description: "Greece"},
      {src:"../../img/photos/DSCF6344.webp", description: "Georgia"},
      {src:"../../img/photos/DSCF6404.webp", description: "Georgia"},
      {src:"../../img/photos/DSCF6521.webp", description: "Georgia"},
      {src:"../../img/photos/IMG_20210422_144041_984.webp", description: "Montenegro"},
      {src:"../../img/photos/IMG_20210422_144048_377.webp", description: "Montenegro"},
      {src:"../../img/photos/IMG_20210422_144054_665.webp", description: "Montenegro"},
      {src:"../../img/photos/DSCF8804.webp", description: "Poland"},
      {src:"../../img/photos/DSCF8675.webp", description: "Poland"},
      {src:"../../img/photos/DSCF8738.webp", description: "Poland"},
      // {src:"../../img/photos/DSCF6467.webp", description: "Iceland"},
      {src:"../../img/photos/DSCF8863.webp", description: "Poland"},
      {src:"../../img/photos/DSCF7722.webp", description: "Italy"},
   ];

   const inline = {
      style: {
        width: "100%",
        maxWidth: "900px",
        aspectRatio: "3 / 2",
        margin: "0 auto",
      },
    };

   return (
      <>
         <Lightbox
            index={index}
            plugins={[Inline, Captions]}
            slides={slides}
            inline={inline}
            on={{
               view: updateIndex,
               click: toggleOpen(true),
            }}
            carousel={{
               finite: 'true',
               padding: 0,
               spacing: 0,
               imageFit: 'contain',
            }}
         />

         {/* Fullscreen Lightbox when an image is clicked */}
         <Lightbox
            open={open}
            close={toggleOpen(false)}
            index={index}
            slides={slides}
            on={{ view: updateIndex }}
            animation={{ fade: 0 }}
            controller={{ closeOnPullDown: true, closeOnBackdropClick: true }}
         />
            <p>
            </p>
      </>
   );
}

export default MyGallery;
