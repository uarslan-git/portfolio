import React from 'react';
import styled, { css } from 'styled-components';

const StyledSVG = styled.svg`
  transition: transform 0.3s ease;
  ${props => props.isOpen && css`
    transform: rotate(90deg);
  `}
`;

const Line = styled.line`
  transition: transform 0.3s ease, opacity 0.3s ease;
  
  &:nth-child(1) {
    ${props => props.isOpen && css`
      transform: translate(6px, 6px) rotate(45deg);
      transform-origin: left center;
    `}
  }
  
  &:nth-child(2) {
    ${props => props.isOpen && css`
      opacity: 0;
    `}
  }
  
  &:nth-child(3) {
    ${props => props.isOpen && css`
      transform: translate(6px, -6px) rotate(-45deg);
      transform-origin: left center;
    `}
  }
`;

export const HamburgerIcon = ({ isOpen = false, ...props }) => (
  <StyledSVG
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width="24"
    height="24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    isOpen={isOpen}
    {...props}
  >
    <Line x1="3" y1="12" x2="21" y2="12" isOpen={isOpen} />
    <Line x1="3" y1="6" x2="21" y2="6" isOpen={isOpen} />
    <Line x1="3" y1="18" x2="21" y2="18" isOpen={isOpen} />
  </StyledSVG>
);
