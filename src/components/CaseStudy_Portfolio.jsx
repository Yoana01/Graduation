import React from 'react'
import BigPic from "./Image6.png"
import DesignMethod from "./Image7.png"
import { Column, Row, InfoBox, CircleBox} from "./styleComponents/container.Style"
import { Title, SubTitle, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import Sample from "./dummyImg.jpg"
import Numeration_CaseStudy from './Numeration_CaseStudy'
import { DarkLine } from './styleComponents/lines.Style'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
// import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
function CaseStudy_Portfolio() {
  return (
    <div>
      <Fade cascade>
        <Row small>
          <Zoom>
          <img src={BigPic} alt="" style={{'width': '500px', 'height': '450px'}}/>
          </Zoom>
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
        <Column sum>
        <Slide cascade>
        <Title>Summary</Title>
        <SmallInfo sumText>Our teachers gave us the assignment to create a portfolio for the first four weeks.
         This is something important for me because I would like to present myself in the best possible way in 
         front of the world and show my capabilities. The question that best represents what my portfolio 
         represents as well as the goal of this semester is: <span style={{color:"#F1C3AC"}}>"What kind of IT professional do I want to be?" </span> </SmallInfo>
      </Slide>
   </Column>
   <Column>
   <Zoom>
        <img src={DesignMethod} alt="" style={{ 'height': '350px', 'margin': "auto"}}/>
     </Zoom>  
   </Column>

     <Numeration_CaseStudy/>
     </Fade>
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
   