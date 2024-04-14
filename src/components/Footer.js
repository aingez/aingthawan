import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #3333331f;
  color: #000;
  font-size: 0.7rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
`;

const FooterText = styled.div`
  flex: 1;
  text-align: left; /* Adjust alignment as needed */
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <p>"To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life"</p>
        <p>- Henry Luce</p>
      </FooterText>
      <FooterText>
        <p>&copy; 2024 Aingthawan K. All rights reserved.</p>
      </FooterText>
    </FooterContainer>
  );
};

export default Footer;
