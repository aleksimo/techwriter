
import React from 'react';
import { Gallery } from "react-grid-gallery";
import useBaseUrl from '@docusaurus/useBaseUrl';


const MyGallery = () => {
    const images = [
    {
        src: useBaseUrl("/img/photos/DSC_3329.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSC_3341.webp"),
        width: 480,
    },

    {
        src: useBaseUrl("/img/photos/DSC_4133.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/IMG_20220608_220429_396.webp"),
        width: 480,
    },

    {
        src: useBaseUrl("/img/photos/IMG_20220612_083743_538.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/IMG_20220608_220432_959.webp"),
        width: 480,
    },

    {
        src: useBaseUrl("/img/photos/DSCF6951.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSC_4320.webp"),
        width: 480,
    },

    {
        src: useBaseUrl("/img/photos/IMG_20220612_083716_055.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF7270.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF6740.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF7284.webp"),
        width: 480,
    },

    {
        src: useBaseUrl("/img/photos/IMG_20220613_234458_743.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF5439.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF5458.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF5471.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF5632.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF5746.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF5788.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF6344.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF6404.webp"),
        width: 480,
    },

    {
        src: useBaseUrl("/img/photos/DSCF6521.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/IMG_20210422_144041_984.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/IMG_20210422_144048_377.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/IMG_20210422_144054_665.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF8804.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF8675.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF8738.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF6467.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF8863.webp"),
        width: 480,
    },
    {
        src: useBaseUrl("/img/photos/DSCF7722.webp"),
        width: 480,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    ];
    return <Gallery images={images} />;
    };

export default MyGallery;
