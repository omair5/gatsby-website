import { Link } from 'gatsby';
import React from 'react';
import styled from 'styled-components';

const Button = ({ title, linkto }) => {
  return (
    <Link to={linkto}>
      <StyledButton> {title} </StyledButton >
    </Link>
  );
}

export default Button;

const StyledButton = styled.button`
  padding:15px 20px;
  background-color:#F26A2E;
  outline:none;
  border:none;
  border-radius:5px;
  cursor:pointer;
  color:white;
  transition:0.5s;
&:hover{
  background-color:#24a0ed;
}
`;