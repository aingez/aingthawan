import React from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 24px;
  cursor: pointer;
`;

const Popup = ({ project, onClose }) => {
  return (
    <PopupContainer>
      <PopupContent>
        <CloseButton onClick={onClose}>×</CloseButton>
        <h2>{project.title}</h2>
        <p>{project.description}</p>
        <img src={project.image} alt={project.title} style={{ maxWidth: '100%' }} />
        <p>{project.details}</p>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
