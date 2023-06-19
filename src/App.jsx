import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import { styled } from "styled-components";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import Navbar from "./components/Header/Navbar";
// import { Link } from "react-scroll";
// import * as Scroll from "react-scroll";
import Togglephone from "./components/toggle-items/Togglephone";

const App = () => {
  // const navigate = useNavigate();

  // const ScrollClickhandle = (e) => {
  //   e.preventDefault();
  //   navigate("/");
  // };

  const AppMain = styled.section`
    position: sticky;
  `;
  const ScrollUp = styled.a`
    display: grid;
    justify-items: center;
    align-content: center;
    width: 60px;
    height: 60px;
    background-color: #00000078;
    color: #fff;
    position: fixed;
    z-index: 20;
    right: 3rem;
    top: 28rem;
    border: 1px solid #f3c745;
    outline: none;
    box-shadow: 0px 0px 10px rgba(243, 197, 71, 1);

    &::before {
      content: "";

      min-width: calc(60px + 12px);
      min-height: calc(60px + 12px);
      border: 6px solid #f3c547;
      box-shadow: 0 0 20px rgba(243, 197, 71, 1);
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover,
    :focus {
      color: #fff;
      transform: translateY(-6px);
    }
    &:hover::before,
    :focus::before {
      opacity: 1;
    }
    &::after {
      content: "";
      width: 65px;
      height: 65px;

      border: 6px solid #f3c547;
      position: absolute;
      z-index: -1;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      animation: ring 1.5s infinite;
    }
    &:hover::after,
    :focus::after {
      animation: none;
      display: none;
    }
  `;
  const DownloadCv = styled.div`
    position: fixed;
    z-index: 20;
    left: 3rem;
    top: 28rem;
    .wrap {
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .Buttonn {
      display: flex;
      justify-content: center;
      align-items: center;
      text-decoration: none;
      min-width: 10rem;
      min-height: 60px;
      font-family: "Nunito", sans-serif;
      font-size: 22px;
      text-transform: uppercase;
      letter-spacing: 1.3px;
      font-weight: 700;
      color: #313133;
      background: #f3c547;
      background: linear-gradient(
        90deg,
        rgb(243, 197, 71) 0%,
        rgba(243, 197, 71, 1) 100%
      );
      border: none;
      border-radius: 1000px;
      box-shadow: 0px 0px 14px rgba(243, 197, 71, 1);
      transition: all 0.3s ease-in-out 0s;
      cursor: pointer;
      outline: none;
      position: relative;
      padding: 10px;

      &::before {
        content: "";
        border-radius: 1000px;
        min-width: calc(10rem + 12px);
        min-height: calc(60px + 12px);
        border: 6px solid #f3c547;
        box-shadow: 0 0 20px rgba(243, 197, 71, 1);
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        opacity: 0;
        transition: all 0.3s ease-in-out 0s;
      }

      &:hover,
      :focus {
        color: #313133;
        transform: translateY(-6px);
      }
      &:hover::before,
      :focus::before {
        opacity: 1;
      }
      &::after {
        content: "";
        width: 30px;
        height: 30px;
        border-radius: 100%;
        border: 6px solid #f3c547;
        position: absolute;
        z-index: -1;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        animation: ring 1.5s infinite;
      }
      &:hover::after,
      :focus::after {
        animation: none;
        display: none;
      }
      @keyframes ring {
        0% {
          width: 30px;
          height: 30px;
          opacity: 1;
        }
        100% {
          width: 300px;
          height: 300px;
          opacity: 0;
        }
      }
    }
  `;
  return (
    <AppMain>
      <ScrollUp href="/">
        <AiOutlineArrowUp />
      </ScrollUp>
      <DownloadCv>
        <div class="wrap">
          <a href="/" class="Buttonn">
            Resume <AiOutlineArrowDown />
          </a>
        </div>
      </DownloadCv>
      <BrowserRouter>
        <Navbar />
        <Home />
      </BrowserRouter>
    </AppMain>
  );
};

export default App;
