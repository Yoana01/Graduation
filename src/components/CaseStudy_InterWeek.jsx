import React from 'react'
import Project from "./Images/sdgs.png"
import { Column, Row, InfoBox, CircleBox} from "./styleComponents/container.Style"
import { Title, SubTitle, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import Numeration_Inter from './Numeration_Inter'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import 'react-vertical-timeline-component/style.min.css';
import ScrollToTopButton from "./ScrollToTop"
import Theme from "./Images/Animation.gif"
import ZoomImage from './ZoomImages';
import DesignMethod from "./Images/Image7.png"

function CaseStudy_Portfolio() {
  return (
    <div>
      {/* <Fade cascade> */}
        <Row small even>
          <img src={Theme} alt="" className="IntrImg"/>
            <Slide right cascade>
            <InfoBox small> 
                <Title RespT>Schoolyard 14</Title>
                <SubTitle>Company:</SubTitle>
                <SmallInfo>The Cruyff Foundation</SmallInfo>
                <SubTitle>Duration:</SubTitle>
                <SmallInfo>1 week</SmallInfo>
                <SubTitle>Learning Outcomes:</SubTitle>
                  <Row learningOut>
                    <CircleBox> <SmallInfo learning learningText>User interaction</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>User interaction</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Software design</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Future-oriented organisation</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Personal leadership</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Goal-oriented interaction</SmallInfo> </CircleBox>   
                    <CircleBox> <SmallInfo learning learningText>Investigative problem solving</SmallInfo> </CircleBox>
                  </Row>
                <SubTitle>Contribution and Tools:</SubTitle>
                <SmallInfo> - Sustainable Development Goals <br />
                        - Design Thinking <br />
                        - DOT Framework/CMD methods <br />
                        - UX Research <br />
                        - UI <br />
                        </SmallInfo>
            </InfoBox>
            </Slide>
        </Row>
        <Slide cascade>
        <Row small homeA even>
        <Column sum>
        <Title>Summary</Title>
        <SmallInfo  small>
        During the Dutch Design Charrette, our group was assigned a project by Handpicked Agencies and <span style={{color:"#7c6aa6"}}>The Cruyff Foundation</span>. Our focus was on The Cruyff Foundation's Schoolyard 14, which consists of 14 different games. Our task was to <span style={{color:"#7c6aa6"}}>create an innovative fifth game that incorporates technology and can be accessed by all children, including those with disabilities or facing challenges such as poverty</span>. Addressing the issue of insufficient physical activity among children, which negatively impacts their motor and social skills. Our solution aimed to integrate synthetic media, mixed reality, artificial intelligence, and/or big data into the design of Schoolplein14 and its surrounding environment, effectively encouraging outdoor play and physical activities.
      </SmallInfo> 
      <a href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/International%20Project/International%20Project%20Reading%20Guide%20.pdf?csf=1&web=1&e=Svvrlu" target="_blank"> <Button> Check reading guide</Button> </a>
   </Column>
    <Column>
   <ZoomImage src={DesignMethod} alt="" id="sumImg"/>
   <ZoomImage src={Project} alt="" id="sumImg"/>
   </Column>
   </Row>
 </Slide>
     <Numeration_Inter/>
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

 