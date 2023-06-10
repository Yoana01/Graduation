import styled, {
    css
} from 'styled-components';

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    gap:${(props) => props.home ? '0px' : '45px'};
    /* align-items: center; */
    justify-content: center;
    flex-wrap: wrap;
    align-content: center;
    margin-top: 10px;
    ${props => props.sum && css`
      display: flex;
      gap:30px;
      justify-content: flex-start;
      align-items: flex-start;
      flex-wrap: nowrap;
      margin-left: 70px;
  `}
  ${props => props.aboutCon && css`
  gap:0px;
  align-items: flex-start;
    align-content: space-around;
    @media (max-width: 768px) {
    width: 100%;
    height: 100%;
    margin: auto;
    padding-left: 8px;
  }
  `}
`;
export const Row = styled.div `
    height:auto;
    display: flex;
    gap:${(props) => props.homeR ? '0px' : props.homeR1 ? '150px' : props.tag ? '16px' : '100px'};
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: ${(props) => props.homeA ? 'center' :  'flex-start'};
    /* justify-content: space-between; */
    justify-content: ${(props) => props.even ? 'space-evenly' :  'space-between'};;
    ${props => props.small && css`
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap:24px;
      justify-content: center;
      align-items: center;
      /* padding:16px; */
      /* max-width:380px;
      width: auto;
      height: 100%; */
    }
  `}
  ${props => props.about && css`
      display: flex;
      gap:30px;
      justify-content: flex-start;
      align-items: stretch;
      padding:16px;
  `}
  ${props => props.learningOut && css`
      display: flex;
      gap:30px;
      max-width:650px;
      flex-wrap: wrap;
      justify-content: flex-start;
      @media (max-width: 768px) {
      width: 380px;
      height: 100%;
    }
  `}
`
export const InfoBox = styled.div `
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   padding:16px;
   width: auto;
   ${props => props.small && css`
    @media (max-width: 768px) {
        margin-left: 50px;
    }
  `}
`

export const Box = styled.div `
    width:524px;
    height:250px;
    padding:32px;
    ${props => props.smallBox && css`
    @media (max-width: 768px) {
        height: 100%;
        width:300px;
    }
  `}
`
export const FeedbackBox = styled.div `
    background: rgb(245,245,245, 0.19);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
    border-radius: 32px;
    color:#151322;
    width: 500px;
    height: 300px;
    align-items: center;
    display: flex;
    padding:16px;
    margin-bottom: 24px;
    font-family: 'Poppins Light';
`
/* background: rgb(181,131,141, 0.39);
/* opacity: 0.39; */
/* box-shadow: 11px 5px 3px rgba(0, 0, 0, 0.160784); */ 
/* background: #EDE9EF; */
/* color: black; */
/* margin:auto; */
/* height: 100%; */

export const CircleBox = styled.div`
  background: #FFFFFF;
  opacity: 0.84;
  width: 100px;
  height: 42px;
  padding:4px;
  border-radius: 16px;
  color:#151322;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: 600;

`
export const Tag = styled.div`
background: rgb(189, 178, 207);
box-shadow: -1px -1px 2px rgba(208, 196, 228, 0.3), 1px 1px 2px rgba(170, 160, 186, 0.5), inset 5px -5px 10px rgba(170, 160, 186, 0.2), inset -5px 5px 10px rgba(170, 160, 186, 0.2), inset 5px 5px 10px rgba(208, 196, 228, 0.9), inset -5px -5px 13px rgba(170, 160, 186, 0.9);
border-radius: 8px;
padding:8px;
font-family: "Poppins Medium";
font-size: 12px;
margin-bottom: 16px;
text-align: center;
`

export const QuoteBox = styled.div`
    /* background: rgb(181,131,141, 0.39);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     border-radius: 32px;  */
    font-family: 'Dekko';
    width: 500px;
    height: 100%;
    padding: 16px;
    font-size: 26px;
    line-height: 46px;
    transform: rotateY(34deg);
    ${props => props.small && css`
    @media (max-width: 768px) {
        width:auto;
    }
  `}

`
export const CardBox = styled.div`
 box-sizing: border-box;
  width: 190px;
  height: 254px;
  background: rgba(217, 217, 217, 0.58);
  border: 1px solid white;
  box-shadow: 12px 17px 51px rgba(0, 0, 0, 0.22);
  backdrop-filter: blur(6px);
  border-radius: 17px;
  text-align: center;
  cursor: pointer;
  transition: all 0.5s;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* justify-content: center; */
  user-select: none;
  font-weight: bolder;
  color: black;
    ${props => props.small && css`
    @media (max-width: 768px) {
        margin:auto;
        width:300px;
        height: auto;
        padding: 0px 0px 16px 0px;
    }
    ${props =>
    props.hover &&
    css`
     transform: scale(1.05);
    `}
    ${props =>
    props.active &&
    css`
   transform: scale(0.95) rotateZ(1.7deg);
    `}
  `}
`



export const FancyPic = styled.div`
    display: flex;
    flex-direction: column;
   
`