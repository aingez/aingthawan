import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
  background-color: #3333331f;
  color: #000;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

const LeftText = styled.div`
  text-align: left;
`;

const RightText = styled.div`
  text-align: right;
  padding-right: 2rem;
  font-size: 10px;
`;

const Footer = () => {
  return (
    <FooterContainer>
      <LeftText>
      </LeftText>
      <RightText>
        <p>"To see the world, things dangerous to come to, to see behind walls, draw closer, to find each other, and to feel. That is the purpose of life"</p>
        <p>- Henry Luce</p>
        <p>&copy; 2024 Aingthawan K. All rights reserved.</p>
      </RightText>
    </FooterContainer>
  );
};

export default Footer;
