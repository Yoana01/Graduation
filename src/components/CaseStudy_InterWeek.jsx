import React from 'react'
import Project from "./sdgs.png"
import { Column, Row, InfoBox, CircleBox} from "./styleComponents/container.Style"
import { Title, SubTitle, SmallInfo } from "./styleComponents/text.Style"
import Numeration_Inter from './Numeration_Inter'
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import 'react-vertical-timeline-component/style.min.css';
import ScrollToTopButton from "./ScrollToTop"
import Theme from "./Animation.gif"
import ZoomImage from './ZoomImages';
import DesignMethod from "./Image7.png"

function CaseStudy_Portfolio() {
  return (
    <div>
      {/* <Fade cascade> */}
        <Row small>
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
        <Column sum>
        <Slide cascade>
        <Title>Summary</Title>
        <SmallInfo sumText small>
        The Dutch Design Charrette was one week where different schools from all over Europe to work on a project.
        There were in total 9 groups that were divided into 3 projects. My project was given from Handpicked Agencies and
        The Cruyff Foundation. <br/> <br />
        The assignment was about <span style={{color:"#F1C3AC"}}>The Cruyff Foundation</span>. They have in total three different type of playgrounds, 
        but we focused on their Schoolyard 14. There are 14 games, and we were supposed to <span style={{color:"#F1C3AC"}}>create a new game, 
        a fifth one that needs to be innovative and involves some technology. The games need to be reached by any 
        kid which mean and disabled kid (physical problem, poverty, etc.)</span> Research shows that 25% of all children do
         not exercise enough. This is supported by research showing that the school period is the most inactive 
         period of the day.  A negative effect is a decline in motor and social skills.
         In addition, 15.5% of all elementary school children are overweight.
         Our solution was based on Sustainable Development goals. So, if I have to define the project in one sentence,
        it would sound like this:<span style={{color:"#F1C3AC"}}>"How can the integration of synthetic media, mixed reality, artificial intelligence, 
        and/or big data in the design of Schoolplein14 and its surrounding environment effectively encourage children 
        and young people to engage in outdoor play and physical activities?”</span>
        
      </SmallInfo>
      </Slide>
   </Column>
   <Column>
   <Row>
   <ZoomImage src={DesignMethod} alt="" id="sumImg"/>
   <ZoomImage src={Project} alt="" id="sumImg"/>
   </Row>
   
   </Column>

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

 