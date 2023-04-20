import React from 'react'
import BigPic from "./Image6.png"
import DesignMethod from "./Image7.png"
import { Column, Row, InfoBox, CircleBox} from "./styleComponents/container.Style"
import { Title, SubTitle, SmallInfo } from "./styleComponents/text.Style"
import Numeration_CaseStudy from './Numeration_CaseStudy'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTop"
import Project02 from "./Logo.jpg"
import Theme from "./Project Theme.jpg"
function CaseStudy_Portfolio() {
  return (
    <div>
      {/* <ScrollHandle/>
   <Link to={'/caseStudyPortfolio#understanding'}> ggg </Link> */}
      {/* <Fade cascade> */}
        <Row small>
          <img src={Theme} alt="" style={{'width': '500px', 'height': '680px'}}/>
            <Slide right cascade>
            <InfoBox small> 
                <Title>Onboarding process Simac</Title>
                <SubTitle>Company:</SubTitle>
                <SmallInfo>Simac IT NL</SmallInfo>
                <SubTitle>Duration:</SubTitle>
                <SmallInfo>12 weeks</SmallInfo>
                <SubTitle>Learning Outcomes:</SubTitle>
                  <Row learningOut>
                    <CircleBox> <SmallInfo learning learningText>User interaction</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Software design</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Future-oriented organisation</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Personal leadership</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Goal-oriented interaction</SmallInfo> </CircleBox>
                  </Row>
                <SubTitle>Contribution and Tools:</SubTitle>
                <SmallInfo>- Agile <br />
                        - Design Thinking <br />
                        - DOT Framework/CMD methods <br />
                        - UX Research <br />
                        - UI <br />
                        </SmallInfo>
            </InfoBox>
            </Slide>
        </Row>
        <Column sum>
        <Slide cascade>
        <Title>Summary</Title>
        <SmallInfo sumText>Our teachers gave us the assignment to create a portfolio for the first four weeks.
         This is something important for me because I would like to present myself in the best possible way in 
         front of the world and show my capabilities. The question that best represents what my portfolio 
         represents as well as the goal of this semester is: <span style={{color:"#F1C3AC"}}>"What kind of IT professional do I want to be?" </span> 
         <br></br>
         For these four weeks, I was using the <span style={{color:"#F1C3AC"}}>Agile methodology</span> in this way because this helped me 
         to be flexible during the project.
         <br />
         Since the project is pretty dynamic. I chose to use the <span style={{color:"#F1C3AC"}}>Design Thinking Method</span> because I can do 
         different iterations and if something did not go as I planned it or it needs more research I could
         easily go one step back. The methods that I used were the <span style={{color:"#F1C3AC"}}>CMD</span> ones. They are based on the <span style={{color:"#F1C3AC"}}>DOT framework</span>,
          but there are more relatable to the UX/UI methods.
         </SmallInfo>
      </Slide>
   </Column>
   <Column>
        <img src={DesignMethod} alt="" style={{ 'height': '350px', 'margin': "auto"}}/>
   </Column>

     <Numeration_CaseStudy/>
     <Row>
      <div></div>
      <div></div>
      <div></div>
      <ScrollToTopButton></ScrollToTopButton>
    </Row>
     </div>
    
  
  )
}

export default CaseStudy_Portfolio

 