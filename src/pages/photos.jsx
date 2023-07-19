
import React from 'react';
import { Gallery } from "react-grid-gallery";

const MyGallery = () => {
    const images = [
    {
        src: "/img/photos/DSCF7722.png",
        width: 480,
        isSelected: true,
        caption: "After Rain (Jeshu John - designerspics.com)",
    },
    {
        src: "/img/photos/DSCF7802.png",
        width: 480,
        tags: [
            { value: "Ocean", title: "Ocean" },
            { value: "People", title: "People" },
        ],
        alt: "Boats (Jeshu John - designerspics.com)",
    },
    {
        src: "/img/photos/DSCF8675.png",
        width: 480,
        thumbnailCaption: "Big Ben",
    },
    {
        src: "/img/photos/DSCF8738.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8804.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8863.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8738.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8804.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8863.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8738.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8804.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8863.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8738.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8804.png",
        width: 480,
    },
    {
        src: "/img/photos/DSCF8863.png",
        width: 480,
    },
    ];
    return <Gallery images={images} />;
    };

export default MyGallery;
