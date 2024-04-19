import React from 'react';
import { portfolioData } from './portfolioData';
import styled from 'styled-components';

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
  padding-top: 5%;
  padding: 10%;
`;

export const PortfolioTitle = styled.h1`

`;

const Portfolio = () => {
  return (
    <PortfolioContainer>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <CardGrid>
        {portfolioData.map((project, index) => (
          <CardContainer key={index}>
            <CardTitle>{project.title}</CardTitle>
            <CardDescription>{project.description}</CardDescription>
            <ImageContainer>
              <CardImage src={project.image} alt={project.title} />
            </ImageContainer>
            <CardLink href={project.link} target="_blank" rel="noopener noreferrer">
              Visit Project
            </CardLink>
          </CardContainer>
        ))}
      </CardGrid>
    </PortfolioContainer>
  );
};

export default Portfolio;
