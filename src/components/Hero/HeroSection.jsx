import React from "react";
import { styled } from "styled-components";
import "../../App.css";

const HeroSection = () => {
  const WrapperSection = styled.div`
    width: 100%;
    height: 80vh;
    /* background-image: url("./Assets/hero.png"); */
    background-color: #1b262c;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    gap: 20px;
  `;
  const BoldText = styled.h1`
    font-size: 50px;
    color: #fff;
  `;
  const HrLine = styled.hr`
    width: 150px;
    height: 10px;
    background: #f3c745;
    text-shadow: rgba(0, 0, 0, 0.5) 1px 1px 2px;
  `;
  const HeroText = styled.h3`
    font-size: 19px;
    font-weight: 400;
    color: white;
  `;
  return (
    <>
      <WrapperSection id="herosection">
        {/* <HeroBG /> */}
        {/* <BoldText>I am Your Freelancer</BoldText> */}
        <div class="wrapper">
          <span class="first-text">I'm a</span>
          <ul class="sec-texts">
            <li>
              <span>Freelancer</span>
            </li>
            <li>
              <span>Developer</span>
            </li>
            <li>
              <span>Freelancer</span>
            </li>
            <li>
              <span>Designer</span>
            </li>
          </ul>
        </div>
        <HrLine />
        <HeroText>Web Designer. Web Developer. UI/UX Expert.</HeroText>
      </WrapperSection>
    </>
  );
};

export default HeroSection;
