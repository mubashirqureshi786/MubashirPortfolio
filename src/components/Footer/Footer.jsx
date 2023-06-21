import React from "react";
import { styled } from "styled-components";
import { RiGithubLine } from "react-icons/ri";
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
const Footer = () => {
  const FooterWrapper = styled.footer`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    height: 60vh;
    width: 100%;
    background-color: #1b262c;
    color: #fff;
  `;
  const FooterIcons = styled.div`
    display: flex;
    justify-content: center;
    gap: 10px;
  `;
  const Icon = styled.a`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    background-color: #f3c745;
    color: #090909;
    display: grid;
    justify-items: center;
    align-content: center;
    cursor: pointer;
    transition: all 0.3s;
    &:hover {
      background-color: #fcd96fbe;
      color: #fff;
    }
  `;
  const FooterNav = styled.ul`
    display: flex;
    justify-content: center;
    gap: 30px;
  `;
  const FooterNavList = styled.li`
    list-style: none;
    a {
      font-size: 20px;
      text-decoration: none;
      color: #fff;
      &:hover {
        color: #f3c745;
      }
    }
  `;
  const FooterText = styled.p`
    font-size: 18px;
  `;
  return (
    <FooterWrapper>
      <FooterIcons>
        <Icon href="https://github.com/mubashirqureshi786">
          <RiGithubLine style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon href="https://www.linkedin.com/in/mubashir-qureshi-148029226/">
          <FaLinkedinIn style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon href="https://twitter.com/qazibashi">
          <BsTwitter style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon href="https://www.facebook.com/bashi.bhai.338">
          <FaFacebookF style={{ width: "30px", height: "30px" }} />
        </Icon>
        <Icon href="https://instagram.com/qazi_bashiii?igshid=MzNlNGNkZWQ4Mg==">
          <BsInstagram style={{ width: "30px", height: "30px" }} />
        </Icon>
      </FooterIcons>
      <FooterNav>
        <FooterNavList>
          <a href="/">Home</a>
        </FooterNavList>
        <FooterNavList>
          <a href="/">MySkills</a>
        </FooterNavList>
        <FooterNavList>
          <a href="/">About </a>
        </FooterNavList>
        <FooterNavList>
          <a href="/">Contact </a>
        </FooterNavList>
      </FooterNav>
      <FooterText>
        Copyright © 2023 All rights reserved - Mubashir Hussain
      </FooterText>
    </FooterWrapper>
  );
};

export default Footer;
