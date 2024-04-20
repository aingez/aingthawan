import React, { useState } from 'react';
import { portfolioData } from './portfolioData';
import styled from 'styled-components';
import Popup from './Popup';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); /* Adjust as needed */
  grid-gap: 16px; /* Adjust the gap between cards */
`;

export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #fff;

  &:hover {
    background-color: #dbdbdb;
  }
`;

export const CardTitle = styled.h3`
  margin-top: 0;
`;

export const CardDescription = styled.p`
  margin-bottom: 12px;
`;

export const ImageContainer = styled.div`
  width: auto;
  height: 200px;
  overflow: hidden;
  position: relative;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  top: 0;
  left: 0;
`;

export const CardLink = styled.a`
  margin-top: 5%;
  display: inline-block;
  padding: 8px 16px;
  background-color: #007bff;
  color: #fff;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

export const PortfolioContainer = styled.div`
  padding-top: 7%;
  padding-left: 15%;
  padding-right: 15%;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Portfolio = () => {
  const [selectedCardIndex, setSelectedCardIndex] = useState(null);

  const handleCardClick = (index) => {
    setSelectedCardIndex(index);
  };

  const handleClosePopup = () => {
    setSelectedCardIndex(null);
  };

  return (
    <PortfolioContainer>
      <Title>Portfolio</Title>
      <CardGrid>
        {portfolioData.map((project, index) => (
          <CardContainer key={index} onClick={() => handleCardClick(index)}>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
            <ImageContainer>
              <CardImage src={project.image} alt={project.title} />
            </ImageContainer>
            {/* <CardLink href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </CardLink> */}
          </CardContainer>
        ))}
      </CardGrid>
      {selectedCardIndex !== null && (
        <Popup
          project={portfolioData[selectedCardIndex]}
          onClose={handleClosePopup}
        />
      )}
    </PortfolioContainer>
  );
};

export default Portfolio;
