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
        This was a group assignment that involved six individuals with different backgrounds. 
        Our shared passion for UX/UI and the problem we needed to solve brought us together. 
        Our client was <span style={{color:"#F1C3AC"}}>Simac</span>, a Dutch-based company in Veldhoven, with two assignments to choose from. 
        We opted to tackle the challenge of onboarding non-Dutch people into the company. Currently, the majority of employees at Simac
        IT NL are Dutch, while the job market is providing more and more international and qualified candidates. Our team members had 
        experience dealing with cultural differences in Dutch workplaces, and we believed we could leverage our knowledge and experience
         to help Simac address this problem. <br></br>
         <span style={{color:"#F1C3AC"}}>It's worth noting that the broad nature of the project is what defines the assignment. </span> There 
         are no specific requirements expected by the stakeholders, but they do wish to deeply explore and validate a hook.
         Our research question, <span style={{color:"#F1C3AC"}}>"How can Simac become more attractive to non-Dutch people?"</span> 
         encapsulates the project's goal. Our team will focus on the onboarding process, which can be a sometimes dull and overwhelming
        experience, particularly for international individuals who don't speak Dutch and face cultural differences.
         <br />
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

 