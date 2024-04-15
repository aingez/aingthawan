import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #fff;
  color: #000;
  font-size: 0.7rem;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: relative;
  bottom: 0;
  left: 0;
  right: 0;

  @media (max-width: 768px) {
    /* No need for max-width rule */
  }
`;

const FooterText = styled.div`
  flex: 1;
  text-align: center;
`;


const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>
        <p>"To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life"</p>
        <p>- Henry Luce -</p>
        <p>&copy; 2024 Aingthawan K. All rights reserved.</p>
      </FooterText>
      {/* <FooterText>
      </FooterText> */}
    </FooterContainer>
  );
};

export default Footer;
