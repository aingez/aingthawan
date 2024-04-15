import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10% 15%;
  padding-bottom: 30%;

  @media (max-width: 768px) {
    padding: 20% 10%;
    padding-bottom: 70%;
  }
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const Description = styled.p`
  font-size: 1rem;
  margin-bottom: 1rem;
`;

const Button = styled.button`
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 0.25rem;
  padding: 0.75rem 1.5rem;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }
`;

const About = () => {
  return (
    <Container>
      <Title>About Me</Title>
      <Description>
        I am a [Your Profession] with [X] years of experience. I have a passion for [Your Passion] and I'm dedicated to creating [Describe Your Work].
      </Description>
      <Description>
        In my free time, I enjoy [Your Hobbies and Interests]. I'm also passionate about [Your Other Passions].
      </Description>
      <Button>Download Resume</Button>
    </Container>
  );
};

export default About;
