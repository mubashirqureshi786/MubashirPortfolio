import React from "react";
import HeroSection from "../Hero/HeroSection";
import MySkills from "../skills/MySkills";
import Contact from "../contact/Contact";
import Map from "../map/Map";
import About from "../About/About";
import Footer from "../Footer/Footer";
import { styled } from "styled-components";
import { Route, Routes } from "react-router-dom";
import Togglephone from "../toggle-items/Togglephone";

const Home = () => {
  const HomeWrapper = styled.section`
    padding-top: 5rem;
  `;
  return (
    <>
      <HomeWrapper>
        {<HeroSection />}
        {<MySkills />}
        {<About />}
        {<Contact />}
        {<Map />}
        {<Footer />}
      </HomeWrapper>
    </>
  );
};

export default Home;
