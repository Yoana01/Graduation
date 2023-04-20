import styled, {
  css
}from 'styled-components'

export const  Title = styled.div`
  font-family: 'Lato Black';
   font-size: 32px;
   padding-bottom: 32px;
  `;
export const  SubTitle = styled.div`
  font-family: 'Lato';
  font-weight: 600;
  font-size: 20px;
  padding-top:16px;
  padding-bottom: 24px;
 `;
export const SmallInfo = styled.div`
    font-family: 'Lato Light';
    max-width: 550px;
    width: 450px;
    padding-bottom:${(props) => props.learning ? '0px' : '16px'};
    font-size:${(props) => props.learningText ? '12px' : '16px'};
    ${props => props.sumText && css`
     max-width: 1200px;
     width: auto;
     font-size: 18px;
  `}
   ${props => props.CardText && css`
     width: auto;
     padding:16px;
  `}
`
export const SpecialText = styled.div`
    font-size: 36px;
    font-family: 'Lato Black';
    margin-bottom: -137px;
    line-height: 45px;
    margin-left: 18px;
    z-index: 5;
`