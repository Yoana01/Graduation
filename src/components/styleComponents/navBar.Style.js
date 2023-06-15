import styled, { css } from 'styled-components'

export const  NavigationBar = styled.nav`
   padding : 16px;
   text-decoration: none;
   color: #151322;
   text-align: right;
   display: flex;
   justify-content: flex-end;
   flex-direction: row;
   gap:16px;
   font-family: "Poppins Regular"
  `;

export const  StyledLink = styled.link`
  color: red;
  `;

export const  SubNavBar = styled.nav`
position: fixed;
top: 9%;
display: flex;
justify-content: center;
gap:45px;
align-items: center;
margin-left: -40px;
width: 100%;
height: auto;
border-radius: 12px;
color: #7c6aa6;;
background: rgb(222, 214, 209, 0.65);
box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
transition: all 0.3s ease-in-out;
font-family: "Poppins Medium";
z-index: 5;
${props => props.RespN && css`
  @media (max-width: 768px) {
   display: none;}
  `}
`;

