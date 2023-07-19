
import React from 'react';
import { Gallery } from "react-grid-gallery";

const MyGallery = () => {
    const images = [
    {
        src: "/img/photos/DSC_3329.png",
        width: 480,
    },
    {
        src: "/img/photos/DSC_3341.png",
        width: 480,
    },

    {
        src: "/img/photos/DSC_4133.png",
        width: 480,
    },
    {
        src: "/img/photos/IMG_20220608_220429_396.png",
        width: 480,
    },

    {
        src: "/img/photos/IMG_20220612_083743_538.png",
        width: 480,
    },
    {
        src: "/img/photos/IMG_20220608_220432_959.png",
        width: 480,
    },

    {
        src: "/img/photos/DSCF6951.png",
        width: 480,
    },
    {
        src: "/img/photos/DSC_4320.png",
        width: 480,
    },

    {
        src: "/img/photos/IMG_20220612_083716_055.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF7270.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF6740.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF7284.png",
        width: 480,
    },

    {
        src: "/img/photos/IMG_20220613_234458_743.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF5439.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF5458.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF5471.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF5632.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF5746.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF5788.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF6344.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF6404.png",
        width: 480,
    },

    {
        src: "/img/photos/DSCF6521.png",
        width: 480,
    },
    {
        src: "/img/photos/IMG_20210422_144041_984.png",
        width: 480,
    },
    {
        src: "/img/photos/IMG_20210422_144048_377.png",
        width: 480,
    },
    {
        src: "/img/photos/IMG_20210422_144054_665.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8804.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8675.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8738.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF6467.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8863.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF7722.png",
        width: 480,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    ];
    return <Gallery images={images} />;
    };

export default MyGallery;
