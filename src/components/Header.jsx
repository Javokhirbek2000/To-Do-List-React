import React from "react";
import styled from "styled-components";

const StyledHeading = styled.h1`
    color: #2ccce4;
    text-align: center;
    font-size: 2em;
    font-weight: bold;
`;

const Header = () => <StyledHeading>To Do List</StyledHeading>; 


export default Header;