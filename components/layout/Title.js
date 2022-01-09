import React from "react";
import styled from "styled-components";

const TitleStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h1,
  h3,
  p {
    line-height: 0.01rem;
  }
  h3 {
    color: #acc6e5;
    font-size: 1rem;
    letter-spacing: 0.5rem;
    font-weight: 600;
    margin-bottom: 0;
    margin-top: 0;
    /* padding-top: 0.3rem; */
  }
  h1 {
    color: #d8e1ed;
    font-size: 2.4rem;
    letter-spacing: 0.2rem;
    font-weight: 600;
    margin: 2rem 0;
  }
  p {
    color: #acc6e5;
    font-size: 0.9rem;
    letter-spacing: 0.4rem;
    font-weight: 400;
    margin: 0;
    padding-bottom: 3.5rem;
  }
  @media (max-width: 768px) {
    h3 {
      font-size: 0.9rem;
    }
    h1 {
      font-size: 2.2rem;
    }
    p {
      font-size: 0.85rem;
    }
  }
  @media (max-width: 540px) {
    h3 {
      font-size: 0.8rem;
    }
    h1 {
      font-size: 2rem;
    }
    p {
      font-size: 0.75rem;
    }
  }
  @media (max-width: 414px) {
    h3 {
      padding-top: 0.5rem;
      font-size: 0.75rem;
    }
    h1 {
      font-size: 1.9rem;
    }
    p {
      font-size: 0.7rem;
    }
  }
  @media (max-width: 320px) {
    h3 {
      font-size: 0.7rem;
    }
    h1 {
      font-size: 1.5rem;
    }
    p {
      font-size: 0.6rem;
      letter-spacing: 0.3rem;
    }
  }
`;

const Title = () => {
  return (
    <TitleStyle>
      <h3>TRYING TO LEARN</h3>
      <h1>WEB DEVELOPMENT</h1>
      <p>NEW TRICKS FOR OLD DOGS</p>
    </TitleStyle>
  );
};

export default Title;
