import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { MdEmail } from "react-icons/md";
import { FaSquareGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { SiThingiverse } from "react-icons/si";
import styled from 'styled-components';
import profilePic from '../my_picture/contact_page_2.JPG';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
`;

const ContentContainer = styled.div`
  flex: 1;
`;

const PictureContainer = styled.div`
  width: 550px;
  height: 550px;
  margin-left: 0rem;
  position: sticky;
  top: 0rem;
  overflow: hidden;
`;

const Picture = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Title = styled.div`
  font-size: 3rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const ContactItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 1rem;
  text-decoration: none;
  color: #000;
  font-size: 1.5rem;

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
  margin-right: 50%;
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

const Input = styled.input`
  padding: 0.5rem 1rem;
  border: 1px solid #ccc;
  border-radius: 40px;
  font-size: 1rem;
  &:focus {
    outline: none;
    border-color: #656566;
  }
`;

const Textarea = styled.textarea`
  padding: 1rem 1rem 0.5rem;
  border: 1px solid #ccc;
  border-radius: 20px;
  font-size: 1rem;
  resize: vertical;
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
  { id: 1, title: <MdEmail />, description: <a href="mailto:aingthawan@gmail.com">AINGTHAWAN@GMAIL.COM</a> },
  { id: 2, title: <FaSquareGithub />, description: <Link to="https://github.com/aingthawan" target="_blank" rel="noopener noreferrer">AINGTHAWAN K.</Link> },
  { id: 3, title: <FaLinkedin />, description: <a href="https://www.linkedin.com/in/aingthawan-k-8b3b24245/" target="_blank" rel="noopener noreferrer">AINGTHAWAN K.</a> },
  { id: 4, title: <SiThingiverse />, description: <Link to="https://www.thingiverse.com/aing1970/designs" target="_blank" rel="noopener noreferrer">AING1970</Link> },
];

  return (
    <Container>
      <ContentContainer>
        <Title>Contact Me</Title>
        <ContactList>
          {contact_list.map((contact) => (
            <ContactItem key={contact.id}>
              {contact.title} : {contact.description}
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
