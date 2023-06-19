import React from "react";
import { styled } from "styled-components";
import AboutImg from "./AboutImg";

const About = () => {
  const AboutWrapper = styled.section`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 4rem 1rem;
  `;
  const MainWrapper = styled.div`
    width: 40%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    /* align-items: center; */
    gap: 20px;
  `;
  const Heading = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

    h1 {
      font-size: 2.1rem;
      font-weight: 500;
    }
    .hr {
      width: 5rem;
      height: 4px;
      background-color: #f3c745;
    }
  `;
  const Paragraph = styled.p`
    line-height: 1.6rem;
  `;

  return (
    <>
      <AboutWrapper id="about">
        <MainWrapper>
          <Heading>
            <h1>About</h1>
            <div className="hr"></div>
          </Heading>
          <Paragraph style={{ textAlign: "justify" }}>
            The About page is the core description of your website. Here is
            where you let clients know what your website is about. You can edit
            all of this text and replace it with what you want to write. For
            example you can let them know how long you have been in business,
            what makes your company special, what are its core values and more.
            Edit your About page from the Pages tab by clicking the edit button.
          </Paragraph>
        </MainWrapper>
        <AboutImg />
      </AboutWrapper>
    </>
  );
};

export default About;
