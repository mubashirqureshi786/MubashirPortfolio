import React from "react";
import { styled } from "styled-components";

const Togglephone = () => {
  const WrapperContact = styled.div`
    width: 100%;
    height: 86vh;
    background: #1b262c;
    display: grid;
    justify-items: center;
    align-content: center;

    h2 {
      font-size: 30px;
      font-weight: 700;
      color: #f6f6f6;
    }
  `;
  return (
    <WrapperContact>
      <h2>03185400971</h2>
    </WrapperContact>
  );
};

export default Togglephone;
