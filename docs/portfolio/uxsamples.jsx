import React from 'react';
import Lightbox from "yet-another-react-lightbox";
import Inline from "yet-another-react-lightbox/plugins/inline";
import "yet-another-react-lightbox/styles.css"; // Don't forget to import the styles
import Captions from "yet-another-react-lightbox/plugins/captions";
import "yet-another-react-lightbox/plugins/captions.css";

const CarouselComponent = () => {
   const [open, setOpen] = React.useState(false);
   const [index, setIndex] = React.useState(0);

   const toggleOpen = (state) => () => setOpen(state);
   const updateIndex = ({ index: current }) => setIndex(current);

   const slides = [
      { src: "../../img/ux_samples/models.webp", description: "Starting screen with model training options", },
      { src: "../../img/ux_samples/dataset_list.webp", description: "Dataset list for model training" },
      { src: "../../img/ux_samples/model_create_dataset.webp", description: "Dataset creation" },
      { src: "../../img/ux_samples/model_test.webp", description: "Model testing" },
      { src: "../../img/ux_samples/empty_queue.webp", description: "Empty state 1" },
      { src: "../../img/ux_samples/empty_screen.webp", description: "Empty state 2" },
      { src: "../../img/ux_samples/user_acc.webp", description: "User account" },
      { src: "../../img/ux_samples/error_screen.webp", description: "Error messages" }
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

export default CarouselComponent;
