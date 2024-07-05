import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 15% 15%;
  padding-bottom: 30%;

  @media (max-width: 768px) {
    padding: 20% 10%;
    padding-bottom: 80%;
  }
`;

const Title = styled.h1`
  font-size: 5rem;
  font-weight: bold;
  margin-bottom: 0rem;
  overflow: hidden;
  border-right: 0.15em solid orange;
  // white-space: nowrap;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Description = styled.p`
  font-size: 1rem;
`;

const Button = styled.button`
  font-size: 1rem;
  padding: 0.5rem 1rem;
  background-color: #d66122;
  color: #fff;
  border: none;
  border-radius: 40px;
  cursor: pointer;
  transition: all 1s ease;
  &:hover {
    background-color: #000;
  }
`;

const Home = () => {
  const [title, setTitle] = useState('');

  useEffect(() => {
    const titleText = 'Aingthawan Khruakhlai';
    let index = 0;
    const interval = setInterval(() => {
      setTitle(titleText.slice(0, index));
      index++;
      if (index > titleText.length) {
        clearInterval(interval);
      }
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <Container>
      <Title>{title}</Title>
      {/* <SubTitle>อิงธวัล เครือคล้าย</SubTitle> */}
      {/* <Description>อิงธวัล เครือคล้าย</Description> */}
      <Description>Hi, Welcome to my personal website, Hope you can learn more about me and my work.</Description>
      <Link to="/portfolio" style={{ textDecoration: 'none' }}>
        <Button>View My Work</Button>
      </Link>
    </Container>
  );
};

export default Home;
