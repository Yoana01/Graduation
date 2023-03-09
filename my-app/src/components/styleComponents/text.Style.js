import styled, {
  css
}from 'styled-components'

export const  Title = styled.div`
   font-size: 32px;
   font-weight: 600;
   padding-bottom: 32px;
  `;
export const  SubTitle = styled.div`
  font-size: 20px;
  padding-top:16px;
  padding-bottom: 24px;
 `;
export const SmallInfo = styled.div`
    max-width: 550px;
    width: 450px;
    padding-bottom:${(props) => props.learning ? '0px' : '16px'};
    font-size:${(props) => props.learningText ? '12px' : '16px'};
    ${props => props.sumText && css`
     max-width: 1200px;
     width: auto;
     font-size: 18px;
  `}
`
export const SpecialText = styled.div`
    font-size: 36px;
    font-weight: 600;
    margin-bottom: -137px;
    margin-left: 18px;
    z-index: 5;
`