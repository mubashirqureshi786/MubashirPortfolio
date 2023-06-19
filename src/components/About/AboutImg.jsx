import React from "react";
import image from "../../Assets/DSC_0071.JPG";
import { styled } from "styled-components";

const AboutImg = () => {
  const Image = styled.figure`
    width: 440px;
    height: 500px;
    .image {
      width: 100%;
      height: 100%;
      filter: brightness(100%) contrast(100%) saturate(150%);
      border: 4px solid #f0f0f0;
      border-radius: 10px;
      box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
      transition: opacity 0.3s ease-in-out;
      position: relative;
    }
  `;
  return (
    <Image>
      <img src={image} alt="" className="image" />
    </Image>
  );
};

export default AboutImg;
