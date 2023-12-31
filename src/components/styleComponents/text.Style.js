import styled, {
  css
}from 'styled-components'

export const  Title = styled.div`
  font-family: 'Poppins SemiBold';
   font-size: 32px;
   padding-bottom: 32px;
   ${props => props.RespT && css`
   @media (max-width: 768px) {
    text-align: center;
    width:285px;
    height: 100%;}
  `}
  ${props => props.CTitle && css`
     text-align: center;
  `}
  `;
export const  SubTitle = styled.div`
  font-family: 'Poppins Regular';
  font-size: 20px;
  padding-top:16px;
  padding-bottom: 24px;
 `;
export const SmallInfo = styled.div`
    font-family: 'Poppins Regular';
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
     font-family:'Poppins Light';
  `}
  ${props => props.Resp && css`
  @media (max-width: 768px) {
    max-width: 350px;
     width:auto;
     height: 100%;}
  `}
`
export const SpecialText = styled.div`
    font-size: 36px;
    font-family: 'Poppins SemiBold';
    font-weight: 500;
    margin-bottom: -137px;
    line-height: 45px;
    margin-left: 18px;
    z-index: 5;
`