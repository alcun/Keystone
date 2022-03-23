import React, { useState } from "react";
import { GalleryDataOne } from "../data/GalleryData";
import styled from "styled-components";

const GalleryContainer = styled.div`
margin: 20px;
`

const GalleryBox = styled.div`
max-width: 700px;
margin: auto;
padding: 1rem;

img {
    object-fit: cover;
}
`
const MainImg = styled.div`
img{
width: 100%;
}
`


const Thumbnails = styled.div`
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
grid-gap: 5px;
img{
    width: 100%;
    cursor: pointer;
}
`


const Gallery = ({image, description}) => {
    const [img, setImg] = useState(GalleryDataOne[0].image);
    const [imgDesc, setImgDesc] = useState(GalleryDataOne[0].description);

    const [images] = useState(GalleryDataOne);


    const handleImgChange = (e) => {
        setImg(e.target.src)
        setImgDesc(e.target.alt)

        document.getElementById("top").scrollIntoView();

    }

    const imgList = images.map((img) => {
        const { image, id, description } = img;
        return (
            
            <img onClick={handleImgChange}
            key={id} src={image} alt={description}/>
            
        )
    })


  return (
<GalleryContainer id="top"       data-aos="zoom-out"
               data-aos-duration="2000"
               data-aos-delay="1000"

               data-aos-once="true">
    <GalleryBox>
        <MainImg  >
        <img src={img} alt=""/>
        </MainImg>
        <p >{imgDesc}</p>
        <br/>
        <Thumbnails
      
        >
        {imgList}
        </Thumbnails>
    </GalleryBox>
</GalleryContainer>
  );
};

export default Gallery;
