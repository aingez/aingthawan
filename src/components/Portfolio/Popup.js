import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #00000080;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
`;

const PopupContent = styled.div`
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  max-width: 60%;
  height: 80%;
  overflow-y: auto; /* Enable vertical scrolling */

`;

export const ImageContainer = styled.div`
  width: 100%;
  height: 70vh; /* Set a fixed height for the image container */
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain; /* Maintain aspect ratio and fit within the container */
  }
`;

export const ContentContainer = styled.div`
  background-color: #fff;
  padding: 10px;
`;

const Popup = ({ project, onClose }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onClose]);

  return (
    <PopupContainer>
      <PopupContent ref={popupRef}>
        <ImageContainer>
          <img src={project.image} alt={project.title} />
        </ImageContainer>
        <ContentContainer>
          <h2>{project.title}</h2>
          {/* <p>{project.description}</p> */}
          {(project.details).map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
          {project.link.map((url, index) => (
            <li key={index}>
              <a href={url} target="_blank" rel="noopener noreferrer">
                {url}
              </a>
            </li>
          ))}
        </ContentContainer>
      </PopupContent>
    </PopupContainer>
  );
};

export default Popup;
