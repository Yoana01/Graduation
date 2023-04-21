import styled, { css } from 'styled-components'

export const  NavigationBar = styled.nav`
   padding : 16px;
   text-decoration: none;
   color: white;
   text-align: right;
   display: flex;
   justify-content: flex-end;
   flex-direction: row;
   gap:16px;
  `;

export const  StyledLink = styled.link`
  color: red;
  `;

export const  SubNavBar = styled.nav`
display: flex;
justify-content: center;
gap:45px;
align-items: center;
margin: auto;
width:700px;
height: auto;
border-radius: 32px;
color:black;
background: rgb(255, 205, 178, 0.65);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
transition: all 0.3s ease-in-out;

${(props) =>
  props.isSticky &&
  css`
    position: fixed;
    top:20px;
    display:flex;
    z-index: 999;
    margin-left: 400px;
   
  `}
`;

