import React from "react";
import { styled } from "styled-components";

const MySkills = () => {
  const SkillsWrapper = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* align-items: center; */
    text-align: center;
    height: 100vh;
    width: 100%;
    hr {
      width: 5rem;
      height: 0.5rem;
      background-color: #f3c745;
      color: #f3c745;
      margin: 1rem 37rem;
    }
    .skills-section {
      display: flex;
      justify-content: space-between;
      align-items: start;
      padding: 3rem 4rem;
    }

    .skills-container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      /* align-items: center; */
      gap: 25px;
    }
    .main-per-conainer {
      display: flex;
      flex-direction: column;
      /* justify-content: space-between; */
      /* align-items: center; */
      gap: 20px;
    }
    .per-text {
      display: flex;
      justify-content: space-between;
    }
    .main-per {
      width: 20rem;
      border-radius: 4px;
      height: 4px;
      background: #ebebeb;
      z-index: -5;
      position: relative;
    }
    .per-body {
      background-color: #f3c745;
      height: 4px;
      border-radius: 4px;
      z-index: 20;
      transition: per 1s ease-in-out;
      position: absolute;
      width: 0%;
      top: 0;
      left: 0;
      animation: fillAnimation 2s ease-in-out forwards;
    }
    @keyframes fillAnimation {
      from {
        width: 0%;
      }
      to {
        width: ${(props) => props.percentage}%;
      }
    }
  `;

  return (
    <SkillsWrapper id="skills">
      <h1>My Skills</h1>
      <hr />
      <div className="skills-section">
        <div className="skills-container">
          <div className="main-per-conainer">
            <div className="per-text">
              <p>HTML</p>
              <p>90%</p>
            </div>
            <div className="main-per">
              <div
                className="per-body"
                style={{ width: "90%" }}
                percentage={"90%"}
              ></div>
            </div>
          </div>
          <div className="main-per-conainer">
            <div className="per-text">
              <p>CSS</p>

              <p>95%</p>
            </div>
            <div className="main-per">
              <div className="per-body" style={{ width: "95%" }}></div>
            </div>
          </div>
          <div className="main-per-conainer">
            <div className="per-text">
              <p>JAVASCRIPT</p>

              <p>65%</p>
            </div>
            <div className="main-per">
              <div className="per-body" style={{ width: "65%" }}></div>
            </div>
          </div>
          <div className="main-per-conainer">
            <div className="per-text">
              <p>REACT JS</p>
              <p>80%</p>
            </div>
            <div className="main-per">
              <div className="per-body" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="main-per-conainer">
            <div className="per-text">
              <p>Redux</p>
              <p>70%</p>
            </div>
            <div className="main-per">
              <div className="per-body" style={{ width: "70%" }}></div>
            </div>
          </div>
        </div>
        <div className="skills-container">
          <div className="main-per-conainer">
            <div className="per-text">
              <p>NEXT JS</p>

              <p>75%</p>
            </div>
            <div className="main-per">
              <div className="per-body" style={{ width: "75%" }}></div>
            </div>
          </div>
          <div className="main-per-conainer">
            <div className="per-text">
              <p>STYLED COMPONENT</p>

              <p>80%</p>
            </div>
            <div className="main-per">
              <div className="per-body" style={{ width: "80%" }}></div>
            </div>
          </div>
          <div className="main-per-conainer">
            <div className="per-text">
              <p>Material UI</p>

              <p>70%</p>
            </div>
            <div className="main-per">
              <div className="per-body" style={{ width: "70%" }}></div>
            </div>
          </div>
          <div className="main-per-conainer">
            <div className="per-text">
              <p>Bootstrap</p>
              <p>85%</p>
            </div>
            <div className="main-per">
              <div className="per-body" style={{ width: "85%" }}></div>
            </div>
          </div>
        </div>
      </div>
    </SkillsWrapper>
  );
};

export default MySkills;
