import React from 'react'
import BigPic from "./Images/Image6.png"
import DesignMethod from "./Images/Image7.png"
import { Column, Row, InfoBox, CircleBox} from "./styleComponents/container.Style"
import { Title, SubTitle, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import Numeration_CaseStudy from './Numeration_CaseStudy'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import 'react-vertical-timeline-component/style.min.css';
import { Link } from "react-router-dom";
import ScrollToTopButton from "./ScrollToTop"
import ZoomImage from './ZoomImages';


function CaseStudy_Portfolio() {
  return (
    <div>
      {/* <ScrollHandle/>
   <Link to={'/caseStudyPortfolio#understanding'}> ggg </Link> */}
        <Row small even>
          <img src={BigPic} alt="" className="PortfolioImg" />
            <Slide right cascade>
            <InfoBox small> 
                <Title>Portfolio</Title>
                <SubTitle>Company:</SubTitle>
                <SmallInfo>Fontys University of Applied Science</SmallInfo>
                <SubTitle>Duration:</SubTitle>
                <SmallInfo>4 weeks</SmallInfo>
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
                        - React JavaScript
                        - Styled-Components</SmallInfo>
            </InfoBox>
            </Slide>
        </Row>
        {/* <Column sum> */}
        <Slide cascade>
          <Row small homeA even>
            <Column home>
            <Title>Summary</Title>
        <SmallInfo  small>
The assignment is to create a portfolio for the first four weeks, which is important for presenting oneself and showcasing capabilities. The main question guiding the portfolio and the semester's goal is about the desired IT professional identity. The Agile methodology was employed for flexibility in the project, while the Design Thinking Method, particularly the CMD approach, allowed for iterations and adjustments. These methods align more with UX/UI practices.
         </SmallInfo>
         <a href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Portfolio/Documentation/Reading%20Guide%20Portfolio.pdf?csf=1&web=1&e=cHHMAp" target="_blank"> <Button> Check reading guide</Button> </a>
            </Column>
            <ZoomImage src={DesignMethod} alt="" id="sumImg"/>
          </Row>
        
      </Slide>
   {/* </Column> */}
  
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

  {/* </VerticalTimeline> */}
    
      
      
      {/* <Row>
        <InfoBox>
          <Title>Exploring</Title> 
          <SmallInfo>The people who took part in our testing said that their overall impression of the app is that it is a sports application for training, where you can motivate yourself and connect with friends and compete with each other, which is our idea, so we were satisfied with the answers that we received. All of the participants feel confident in using the app. People like the idea of creating content because is something different from the other apps for sports as well as the discount part. The thing that we have to change is the navbar to be static and to include more free things. They would share with their friends especially because they can compete with each other. </SmallInfo>
          <Button>Read More</Button>
        </InfoBox>
        <img src={Sample} alt="" style={{'width': '500px', 'height': '250px'}}/>
      </Row>
      <Row>
        <InfoBox>
          <Title>Materializing</Title> 
          <SmallInfo>The people who took part in our testing said that their overall impression of the app is that it is a sports application for training, where you can motivate yourself and connect with friends and compete with each other, which is our idea, so we were satisfied with the answers that we received. All of the participants feel confident in using the app. People like the idea of creating content because is something different from the other apps for sports as well as the discount part. The thing that we have to change is the navbar to be static and to include more free things. They would share with their friends especially because they can compete with each other. </SmallInfo>
          <Button>Read More</Button>
        </InfoBox>
        <img src={Sample} alt="" style={{'width': '500px', 'height': '250px'}}/>
      </Row>
      <Title>Conclusion</Title> 
          <SmallInfo>The people who took part in our testing said that their overall impression of the app is that it is a sports application for training, where you can motivate yourself and connect with friends and compete with each other, which is our idea, so we were satisfied with the answers that we received. All of the participants feel confident in using the app. People like the idea of creating content because is something different from the other apps for sports as well as the discount part. The thing that we have to change is the navbar to be static and to include more free things. They would share with their friends especially because they can compete with each other. </SmallInfo> */}
   