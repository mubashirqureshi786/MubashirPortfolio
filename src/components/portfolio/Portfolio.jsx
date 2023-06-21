import React from "react";
import { Link } from "react-router-dom";
import { styled } from "styled-components";

const Portfolio = () => {
  const PortfolioWrapper = styled.section`
    width: 100%;
    height: 100vh;

    .text-main {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }

    h1 {
      font-size: 2.1rem;
      font-weight: 500;
    }
    .hr {
      width: 70px;
      height: 3px;
      background: #f3c745;
    }
  `;
  const CardsWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 4rem 6rem;
    /* gap: 30px; */
  `;
  const Card = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: auto;
    width: 17rem;
    padding: 0.5rem 1rem;
    /* background: #000;/ */
    position: relative;
    border-radius: 16px;
    overflow: hidden;
    transition: all 1s;
    &:hover {
      background-color: rgba(0, 0, 0, 0.69);
    }
  `;
  const Image = styled.img`
    width: 200px;
    height: 200px;
    z-index: 4;
    margin-bottom: 3rem;
  `;
  //   const Button = styled.div`
  //     display: flex;
  //     justify-content: center;
  //     align-items: center;
  //     width: 100%;
  //     height: 6rem;
  //     position: absolute;
  //     cursor: pointer;
  //     left: 0;
  //     bottom: 0px;
  //     z-index: -1;
  //     background-color: #f3c547;
  //     a {
  //       position: absolute;
  //       bottom: 0;
  //       width: 70%;
  //       height: auto;
  //       padding: 0.5rem 0.9rem;
  //       background-color: antiquewhite;
  //       cursor: pointer;
  //       text-align: center;
  //     }
  //   `;
  const Button = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 6rem;
    position: absolute;
    /* cursor: pointer; */
    left: 0;
    bottom: 0px;
    background-color: #f3c547;

    a {
      position: absolute;
      bottom: 0;
      width: 70%;
      height: auto;
      padding: 0.5rem 0.9rem;
      background-color: antiquewhite;
      text-decoration: none;
      color: #090909;
      font-size: 18px;
      cursor: pointer;
      text-align: center;
      margin-bottom: 10px;
      transition: all 1s;
      &:hover {
        background-color: #ffbc05;
        color: #fff;
      }
    }
  `;
  const SeemoreBtn = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    a {
      padding: 1rem 2.5rem;
      border-radius: 12px;
      background-color: #f3c547;
      font-size: 20px;
      font-weight: 400;
      text-decoration: none;
      color: #090909;
      transition: all 0.3s;
      &:hover {
        padding: 1.2rem 2.7rem;
        background-color: #ffbc05;
        color: #fff;
      }
    }
  `;

  return (
    <PortfolioWrapper id="portfolio">
      <div className="text-main">
        <h1>Portfolio</h1>
        <div className="hr" />
      </div>
      <CardsWrapper>
        <Card>
          <Image
            src={
              "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            }
            alt={""}
          />
          <Button>
            <a href={"/"}>view</a>
          </Button>
        </Card>
        <Card>
          <Image
            src={
              "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            }
            alt={""}
          />
          <Button>
            <a href={"/"}>view</a>
          </Button>
        </Card>
        <Card>
          <Image
            src={
              "https://images.unsplash.com/photo-1569693799105-4eb645d89aea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29kaW5nJTIwcHJvamVjdHxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=1000&q=60"
            }
            alt={""}
          />
          <Button>
            <a href={"/"}>view</a>
          </Button>
        </Card>
      </CardsWrapper>
      <SeemoreBtn>
        <a href="/">See More</a>
      </SeemoreBtn>
    </PortfolioWrapper>
  );
};

export default Portfolio;
