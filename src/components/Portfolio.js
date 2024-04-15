import React from 'react';
import styled from 'styled-components';

const PortfolioWrapper = styled.div`
  padding: 8rem;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
`;

const ProjectsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 2rem;
`;

const ProjectWrapper = styled.div`
  background-color: #f0f0f0;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProjectTitle = styled.h3`
  padding: 1rem;
  text-align: center;
`;

const ProjectDescription = styled.p`
  padding: 1rem;
  font-size: 0.9rem;
  line-height: 1.4;
`;

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      image: 'project1.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      image: 'project2.jpg',
    },
    {
      id: 3,
      title: 'Project 4',
      description: 'This is a description of Project 3.',
      image: 'project3.jpg',
    },
    {
      id: 4,
      title: 'Project 5',
      description: 'This is a description of Project 3.',
      image: 'project3.jpg',
    },
    {
      id: 4,
      title: 'Project 6',
      description: 'This is a description of Project 3.',
      image: 'project3.jpg',
    },
    {
      id: 6,
      title: 'Project 7',
      description: 'This is a description of Project 3.',
      image: 'project3.jpg',
    },
  ];

  return (
    <PortfolioWrapper>
      <Title>My Portfolio</Title>
      <ProjectsWrapper>
        {projects.map((project) => (
          <ProjectWrapper key={project.id}>
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectTitle>{project.title}</ProjectTitle>
            <ProjectDescription>{project.description}</ProjectDescription>
          </ProjectWrapper>
        ))}
      </ProjectsWrapper>
    </PortfolioWrapper>
  );
};

export default Portfolio;

