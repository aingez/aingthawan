import React from 'react';
import profilePic from '../my_picture/contact_page_3.JPG';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiThingiverse } from "react-icons/si";

const Container = styled.div`
  padding: 8% 15%;
  padding-bottom: 15%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 768px) {
    padding-top: 20%;
    padding-bottom: 50%;
    flex-direction: column;
  }
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const PictureContainer = styled.div`
  width: 550px;
  height: 550px;
  margin-left: 0rem;
  top: 0rem;
  position: sticky;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 0%;
    height: auto;
  }
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 0rem;

  @media (max-width: 768px) {
    border-radius: 0rem;
  }
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #000;
  font-size: 1rem;
  padding-bottom: 0.2rem;
  &:hover {
    color: #004d8c;
  }

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  &:hover {
    color: #004d8c;
  }
`;

const ContactList = styled.div`
  margin-top: 0rem;
`;

const Contact = () => {
  const contact_list = [
    { id: 1, title: <MdEmail />, description: <span>AINGTHAWAN@GMAIL.COM</span> },
    { id: 2, title: <FaSquareGithub />, description: <StyledLink to="https://github.com/aingthawan" target="_blank" rel="noopener noreferrer">AINGTHAWAN K.</StyledLink> },
    { id: 2, title: <FaLinkedin />, description: <StyledLink to="https://www.linkedin.com/in/aingthawan-k-8b3b24245/" target="_blank" rel="noopener noreferrer">AINGTHAWAN K.</StyledLink> },
    { id: 4, title: <SiThingiverse />, description: <StyledLink to="https://www.thingiverse.com/aing1970/designs" target="_blank" rel="noopener noreferrer">AING1970</StyledLink> },
  ];

  return (
    <Container>
      <ContentContainer>
        <Title>Contact Me</Title>
        <ContactList>
          {contact_list.map((contact) => (
            <ContactItem key={contact.id}>
              {contact.title}{contact.description}
            </ContactItem>
          ))}
        </ContactList>
      </ContentContainer>
      <PictureContainer>
        <Picture src={profilePic} alt="Your Picture" />
      </PictureContainer>
    </Container>
  );
};

export default Contact;