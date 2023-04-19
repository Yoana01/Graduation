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
import ScrollHandle from "./ScrollHandle";
function CaseStudy_Portfolio() {
  return (
    <div>
      {/* <ScrollHandle/>
   <Link to={'/caseStudyPortfolio#understanding'}> ggg </Link> */}
        <Row small>
          <img src={BigPic} alt="" style={{'width': '500px', 'height': '450px'}}/>
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
   