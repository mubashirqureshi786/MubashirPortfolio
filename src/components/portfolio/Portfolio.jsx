import React from "react";
import { styled } from "styled-components";
import tiktaktoe from "../../Assets/tiktaktoe.png";
import todo from "../../Assets/todolist.png";
import calculator from "../../Assets/calculator.png";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";

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
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 50px;
    margin: 3rem 0;
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
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={tiktaktoe}
            sx={{ width: "100%", height: "250px" }}
          />
          <CardActions
            sx={{
              justifyContent: "center",
              padding: "1rem 0",
            }}
          >
            <Button
              size="large"
              sx={{ backgroundColor: "#f3c547", padding: ".5rem 3rem" }}
              onClick={() =>
                (window.location.href = "https://bashi-tik-tak-toe.netlify.app")
              }
            >
              view
            </Button>
            <Button
              size="large"
              sx={{ backgroundColor: "#f3c547", with: "50%" }}
            >
              Source Code
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={calculator}
            sx={{ width: "100%", height: "250px" }}
          />
          <CardActions
            sx={{
              justifyContent: "center",
              padding: "1rem 0",
            }}
          >
            <Button
              size="large"
              sx={{ backgroundColor: "#f3c547", padding: ".5rem 3rem" }}
              onClick={() =>
                (window.location.href = "https://bashi-calculator.netlify.app")
              }
            >
              view
            </Button>
            <Button
              size="large"
              sx={{ backgroundColor: "#f3c547", with: "50%" }}
            >
              Source Code
            </Button>
          </CardActions>
        </Card>
        <Card sx={{ maxWidth: 345 }}>
          <CardMedia
            component="img"
            alt="green iguana"
            height="140"
            image={todo}
            sx={{ width: "100%", height: "250px" }}
          />
          <CardActions
            sx={{
              justifyContent: "center",
              padding: "1rem 0",
            }}
          >
            <Button
              size="large"
              sx={{ backgroundColor: "#f3c547", padding: ".5rem 3rem" }}
              onClick={() =>
                (window.location.href = "https://bashi-todo-list.netlify.app")
              }
            >
              view
            </Button>
            <Button
              size="large"
              sx={{ backgroundColor: "#f3c547", with: "50%" }}
            >
              Source Code
            </Button>
          </CardActions>
        </Card>
      </CardsWrapper>
      <SeemoreBtn>
        <a href="/">See More</a>
      </SeemoreBtn>
    </PortfolioWrapper>
  );
};
export default Portfolio;
