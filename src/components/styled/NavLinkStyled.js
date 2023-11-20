import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavLinkStyled = styled(NavLink)`
    color: #799283;    
    font-size: 1.8rem;
    font-weight:400;
    line-height: 2.1rem;
    text-decoration: none;
    display: flex;
        align-items: center;
        gap:2em;
    &.active {
    color: red;
    font-weight: 600;
  }
`