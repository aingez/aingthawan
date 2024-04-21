import React from 'react';
import styled from 'styled-components';
import { aboutData } from './aboutData';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 7% 15%;

  @media (max-width: 768px) {
    padding: 20% 10%;
    padding-bottom: 70%;
  }
`;

const PictureContainer = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 40%; /* 16:9 aspect ratio */
  overflow: hidden;
`;

const Picture = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 55%;
  object-fit: cover;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const DescriptionContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
`;

const DescriptionItem = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
  width: 50%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const Button = styled.button`
  background-color: #969696;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #db713b;
  }
`;

const About = ({ title, description, buttonText, imageSrc }) => {
  return (
    <Container>
      <PictureContainer>
        <Picture src={imageSrc || aboutData.imageSrc} alt="Your Picture" />
      </PictureContainer>
      <DescriptionContainer>
        <DescriptionItem>
          <Title>{title || aboutData.title}</Title>
          <Button>{buttonText || aboutData.buttonText}</Button>
        </DescriptionItem>
        <DescriptionItem>
          {(aboutData.description).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          <h3>In a nutshell, I . . .</h3>
          {(aboutData.ilike).map((paragraph, index) => (
            <li key={index}>{paragraph}</li>
          ))}
        </DescriptionItem>
      </DescriptionContainer>
    </Container>
  );
};

export default About;
