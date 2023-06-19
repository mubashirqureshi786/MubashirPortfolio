import React from "react";
import { styled } from "styled-components";
import { Link, Route, Routes } from "react-router-dom";
import { AiFillPhone } from "react-icons/ai";
import { IoMdMail } from "react-icons/io";

import * as Scroll from "react-scroll";
import { useNavigate } from "react-router-dom";
import Togglephone from "../toggle-items/Togglephone";

const Navbar = () => {
  const navigate = useNavigate();

  const ClickContactHandle = () => {
    navigate("/togglephone");
  };

  let Link = Scroll.Link;

  const WrapperHeader = styled.header`
    position: fixed;
    width: 100%;
    z-index: 50;
    box-shadow: rgb(0 0 0 / 35%) 0px 2px 12px 2px;
    .navbar {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 90px;
      width: 100%;
      padding: 0px 30px;
      background-color: #fff;
    }
  `;
  const Brand = styled.div`
    a {
      text-decoration: none;
      font-size: 24px;
      font-weight: 900;
      font-family: "Dancing Script", cursive;
      font-style: oblique;
      color: #604906;
      cursor: pointer;
    }
  `;
  const NavLinks = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    gap: 10px;
    a {
      text-decoration: none;
      color: #604906;
      font: 15px;
      font-weight: bolder;
      padding: 7px 15px;
      border-radius: 20px;

      &:hover {
        background-color: #604906;
        color: #fff;
      }
    }
  `;

  return (
    <>
      <WrapperHeader>
        <nav className="navbar">
          <Brand>
            <Link
              to={"/herosection"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={800}
            >
              Mubashir Hussain
            </Link>
          </Brand>
          <NavLinks>
            <Link
              to={"herosection"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Home
            </Link>
            <Link
              to={"skills"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              My Skills
            </Link>
            <Link
              to={"about"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              About
            </Link>
            <Link
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
            >
              Contact
            </Link>
            <Link to={"/togglephone"} onClick={ClickContactHandle}>
              <AiFillPhone />
            </Link>
            <Link to={"/"}>
              <IoMdMail />
            </Link>
          </NavLinks>
        </nav>
      </WrapperHeader>
    </>
  );
};

export default Navbar;
