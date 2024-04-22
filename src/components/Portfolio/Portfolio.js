import React, { useState } from 'react';
import { portfolioData } from './portfolioData';
import styled from 'styled-components';
import Popup from './Popup';

export const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 16px;

  /* Media queries for responsive layout */
  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;


export const CardContainer = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  background-color: #fff;
  cursor: pointer;
  transition: box-shadow 1s ease;
  &:hover {
    background-color: #fff9f2;
    box-shadow: 4px 4px 4px #d1d1d1;
  }

  @media (max-width: 768px) {
    padding: 12px;
  }

  @media (max-width: 480px) {
    padding: 8px;
  }
`;

export const CardTitle = styled.h3`
  margin-top: 0;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }

  @media (max-width: 480px) {
    font-size: 1rem;
  }
`;

export const CardDescription = styled.p`
  margin-bottom: 12px;
`;

export const ImageContainer = styled.div`
  width: auto;
  height: 200px;
  overflow: hidden;
  position: relative;

  @media (max-width: 768px) {
    height: 150px;
  }

  @media (max-width: 480px) {
    height: 120px;
  }
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
`;

export const PortfolioContainer = styled.div`
  padding-top: 7%;
  padding-left: 15%;
  padding-right: 15%;
  max-width: 1200px; /* Add a max-width for larger screens */
  margin: 0 auto; /* Center the container */
  @media (max-width: 480px) {
    padding-top: 20%;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
  @media (max-width: 480px) {
    font-size: 2rem;
  }
`;

const CardTags = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 8px;
`;

const Tag = styled.span`
  background-color: #f0f0f0;
  color: #333;
  padding: 4px 8px;
  border-radius: 4px;
  margin-right: 8px;
  margin-bottom: 4px;
  font-size: 12px;
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
      <Title>What I've Done</Title>
      <CardGrid>
        {portfolioData.map((project, index) => (
          <CardContainer key={index} onClick={() => handleCardClick(index)}>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
            <ImageContainer>
              <CardImage src={project.image} alt={project.title} />
            </ImageContainer>
            <CardTags>
              {project.tags.map((tag, tagIndex) => (
                <Tag key={tagIndex}>{tag}</Tag>
              ))}
            </CardTags>
          </CardContainer>
        ))}
      </CardGrid>
      {selectedCardIndex !== null && (
        <Popup project={portfolioData[selectedCardIndex]} onClose={handleClosePopup} />
      )}
    </PortfolioContainer>
  );
};

export default Portfolio;
