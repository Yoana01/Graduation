import styled, {
    css
} from 'styled-components';

export const Column = styled.div `
    display: flex;
    flex-direction: column;
    gap:${(props) => props.home ? '0px' : '75px'};
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
    gap:${(props) => props.homeR ? '0px' : props.homeR1 ? '150px' :  '100px'};
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    /* justify-content: space-evenly; */
    justify-content: ${(props) => props.conclusion ? 'space-between' :  'space-evenly'};;
    ${props => props.small && css`
    @media (max-width: 768px) {
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap:24px;
      justify-content: center;
      align-items: center;
      /* padding:16px; */
      max-width:400px;
      width: auto;
      height: 100%;
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
    color:#FFFFFF;
    width: 500px;
    height: 250px;
    align-items: center;
    display: flex;
    padding:16px;
    margin-bottom: 24px;
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
  color:black;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  font-weight: 600;

`
export const QuoteBox = styled.div`
    /* background: rgb(181,131,141, 0.39);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
     border-radius: 32px;  */
    font-family: 'Lato Light';
    width: 500px;
    height: 100%;
    padding: 16px;
    font-size: 26px;
    line-height: 46px;
    font-style: italic;
    transform: rotateY(34deg);
    ${props => props.small && css`
    @media (max-width: 768px) {
        width:auto;
    }
  `}

`
export const CardBox = styled.div`
    background: rgb(245,245,245, 0.19);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); 
    border-radius: 16px;
    width: 400px;
    height: 450px;
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    ${props => props.small && css`
    @media (max-width: 768px) {
        margin:auto;
        width:300px;
        height: auto;
        padding: 0px 0px 16px 0px;
    }
  `}
`
export const FancyPic = styled.div`
    display: flex;
    flex-direction: column;
   
`