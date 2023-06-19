import React from "react";
import { AiTwotonePhone } from "react-icons/ai";
import { MdEmail } from "react-icons/md";
import { styled } from "styled-components";
import ContactForm from "./ContactForm";

const Contact = () => {
  const ContactWrapper = styled.section`
    height: 100vh;

    padding: 3rem 0rem;
    .main {
      display: flex;
      flex-direction: column;
      gap: 10px;
      justify-content: center;
      align-items: center;
    }
    h1 {
      font-size: 2.1rem;
      font-weight: 500;
    }
    .hr {
      width: 50px;
      height: 3px;
      background: #f3c745;
    }
  `;
  const ContentWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    /* align-items: center; */
    align-items: start;
    text-align: center;
    padding: 4rem 1rem;
  `;

  const ContactInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 10px;
    h3 {
      font-size: 1.2rem;
      font-weight: 400;
    }
    .contact {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 5px;
      h4 {
        font-size: 1.2rem;
        font-weight: 400;
        color: #f3c745;
        cursor: pointer;
      }
    }
  `;

  return (
    <ContactWrapper id="contact">
      <div className="main">
        <h1>Contact Me</h1>
        <div className="hr" />
      </div>

      <ContentWrapper>
        <ContactInfo>
          <h3>Islamabad, Pakistan</h3>
          <div className="contact">
            <AiTwotonePhone style={{ color: "#f3c745", fontSize: "1.2rem" }} />
            <h4>03185400971</h4>
          </div>
          <div className="contact">
            <MdEmail style={{ color: "#f3c745", fontSize: "1.2rem" }} />
            <h4>mubashirqureshi00786@gmail.com</h4>
          </div>
        </ContactInfo>
        <ContactForm />
      </ContentWrapper>
    </ContactWrapper>
  );
};

export default Contact;
