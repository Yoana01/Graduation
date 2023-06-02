import React from 'react'
import BigPic from "./Images/Image6.png"
import Project from "./Images/ProjectbreakdownSIMAC.png"
import { Column, Row, InfoBox, CircleBox} from "./styleComponents/container.Style"
import { Title, SubTitle, SmallInfo } from "./styleComponents/text.Style"
import Numeration_Simac from './Numeration_Simac'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTop"
import Project02 from "./Images/Logo.png"
import Theme from "./Images/Project Theme.jpg"
import ZoomImage from './ZoomImages';

function CaseStudy_Portfolio() {
  return (
    <div>
      {/* <Fade cascade> */}
        <Row small>
          <img src={Theme} alt="" className="SimacImg"/>
            <Slide right cascade>
            <InfoBox small> 
                <Title RespT>Onboarding process Simac</Title>
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
        <SmallInfo sumText small>
        Our group assignment brought together six individuals with diverse backgrounds, sharing a passion for UX/UI. We partnered with <span style={{color:"#F1C3AC"}}>Simac</span>, a Dutch company in Veldhoven, and chose to address the onboarding of non-Dutch employees. Our goal is to <span style={{color:"#F1C3AC"}}> make Simac more attractive to international candidates by improving the onboarding process, considering language barriers and cultural differences.</span>
      </SmallInfo>
      </Slide>
   </Column>
   <Column>
   <ZoomImage src={Project} alt="" id="sumImg"/>
   </Column>

     <Numeration_Simac/>
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

 