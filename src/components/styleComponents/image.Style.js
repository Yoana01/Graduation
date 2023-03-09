import styled, {
  css
} from 'styled-components';

export const  Logo = styled.img`
    width: 100px;
  `;

export const Image = styled.img`
  width: 300px; 
  height: 550px;
  mix-blend-mode:luminosity;
 ${props => props.small && css`
    @media (max-width: 768px) {
      width:350px;
      height:300px;
    }
  `}
`;