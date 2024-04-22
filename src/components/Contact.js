import React, { useState } from 'react';
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
    // position: static;
    // margin-top: 2rem;
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

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  margin-bottom: 0.5rem;
  margin-top: 1.5rem;
  margin-right: 30%;

  @media (max-width: 768px) {
    margin-right: 0;
  }
`;

const FormField = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const FieldLabel = styled.label`
  position: absolute;
  top: 50%;
  left: 1rem;
  transform: translateY(-50%);
  color: #aaa;
  pointer-events: none;
  transition: all 0.3s ease;
  opacity: ${({ focused, hasValue }) => (focused || hasValue) ? 0 : 1};
`;

const Textarea = styled.textarea`
  padding: 2rem 1rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  resize: vertical;
  &:focus {
    outline: none;
    border-color: #656566;
  }
`;

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 10px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #656566;
  }
`;

const SubmitButton = styled.button`
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

  @media (max-width: 768px) {
    font-size: 0.9rem;
    padding: 0.4rem 0.8rem;
  }
`;

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [nameFocused, setNameFocused] = useState(false);
  const [emailFocused, setEmailFocused] = useState(false);
  const [messageFocused, setMessageFocused] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can add your own logic to handle the form submission here
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Message:', message);
    // Reset the form fields
    setName('');
    setEmail('');
    setMessage('');
  };

  const contact_list = [
    { id: 1, title: <MdEmail />, description: <a>AINGTHAWAN@GMAIL.COM</a> },
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
        <form onSubmit={handleSubmit}>
          <FormContainer>
            <FormField>
              <Input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                onFocus={() => setNameFocused(true)}
                onBlur={() => setNameFocused(false)}
              />
              <FieldLabel focused={nameFocused} hasValue={name.length > 0}>Name</FieldLabel>
            </FormField>
            <FormField>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onFocus={() => setEmailFocused(true)}
                onBlur={() => setEmailFocused(false)}
              />
              <FieldLabel focused={emailFocused} hasValue={email.length > 0}>Email</FieldLabel>
            </FormField>
            <FormField>
              <Textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onFocus={() => setMessageFocused(true)}
                onBlur={() => setMessageFocused(false)}
              ></Textarea>
              <FieldLabel focused={messageFocused} hasValue={message.length > 0}>Message</FieldLabel>
            </FormField>
          </FormContainer>
          <SubmitButton type="submit">Submit</SubmitButton>
        </form>

      </ContentContainer>
      <PictureContainer>
        <Picture src={profilePic} alt="Your Picture" />
      </PictureContainer>
    </Container>
  );
};

export default Contact;
