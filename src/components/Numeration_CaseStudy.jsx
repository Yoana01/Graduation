import { Link } from "react-router-dom";
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { Column, Row, InfoBox} from "./styleComponents/container.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import Versions from "./versions.png"
import MooodBoard from "./moodboardV3.png"
import UIArch from "./uiarch.png"
import Moscow from "./MoSCoW.jpg"



function Numeration_CaseStudy() {

  return (
    <div>
      <VerticalTimeline animate={ true } layout={ '1-column-left'} >
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#6D6875', color: '#fff', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        > 
      <Slide right cascade>
    <Row small id="understanding">
    <InfoBox>
          <Title>Understanding</Title> 
          <SmallInfo> I inspired myself by the design of other UX/UI designers as looking at their portfolios, I made 
            <span style={{color:"#6D6875"}}> trend analysis </span>for 2023. I did this because I wanted to make sure that my design 
            would not look old-fashion. Also, one designer needs to 
            know what are the trends right now, but also not put all of them if they are not relevant to the case that he is doing.
            Something that at the moment is trendy is the 3-D icons, however, I, personally, do not like them, so I did not include 
            them in my design. Nevertheless, I like to have some gradients in the design, that's why I chose to use it. 
            They are different opinions about them, but they are still being used.</SmallInfo>
          <SmallInfo>Another method that I used is a  <span style={{color:"#6D6875"}}>mood board</span> there I started brainstorming what colours and typefaces, I wanted to have
             in my design. I was having different versions of what I wanted to look at the end, but at the end I decided to be more
              playful and represent my creativity and myself. That's why I got to the idea that I want to have some sunset colours. 
              Also, something that I wanted to have in my design is to have lines in my design. </SmallInfo>
        </InfoBox>
        <Zoom>
          <img src={MooodBoard} alt="" style={{'width': '350px', 'height': '450px'}}/>
        </Zoom>
    </Row>
    
     </Slide>
       
        </VerticalTimelineElement>
      {/* </Link> */}
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
    position={ 'right' }
    iconStyle={{ background: '#6D6875', color: '#fff', WebkitBoxShadow: "none" }}
    textClassName = {'1'}
    contentArrowStyle={ {border: "none" }} >
  <Slide right cascade>
    <Row small>
    <InfoBox>
          <Title>Exploring</Title> 
          <SmallInfo>Since I was not sure how exactly my will look my design as well as the limited time of the project, 
            I started directly to <span style={{color:"#6D6875"}}>prototyping</span> digital versions of the design. I got through some until I got to the point
            where I believe it is closest to what I wanted to have. You can download to see the final version.</SmallInfo>
            <SmallInfo> Another method that I used is the <span style={{color:"#6D6875"}}>UI Architecture</span> as again and 
            here I went through different iterations before going to the final version of my structure for the design. 
            I did and small brand style guide which to help with the components of my design.</SmallInfo>
            <a href="https://stichtingfontys-my.sharepoint.com/:f:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Portfolio?csf=1&web=1&e=U6fcJh" target="_blank"> <Button> See more</Button> </a>
        </InfoBox>
        <Zoom>
          <Column>
          <img src={Versions} alt="" style={{'width': '500px', 'height': '250px'}}/>
          <img src={UIArch} alt="" style={{'width': '300px', 'height': '450px'}}/>
          </Column>
        
        </Zoom>
    </Row>
    
     </Slide>
        </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
    position={ 'right' }
    iconStyle={{ background: '#6D6875', color: '#fff', WebkitBoxShadow: "none" }}
    textClassName = {'1'}
    contentArrowStyle={ {border: "none" }} >
  <Slide right cascade>
    <Row small>
    <InfoBox>
          <Title>Materializing</Title> 
          <SmallInfo>I did a <span style={{color:"#F1C3AC"}}>peer reviews</span> with couple of my fellow students which gave me a feedback for my design. Based on this method, 
            I put more white space and removed  some elements that made the design to look more simple and clear. </SmallInfo>
            <SmallInfo>I did a <span style={{color:"#F1C3AC"}}>MosCoW analysis</span>. This was important for me because I wanted to set some goals that I can achieve and not achieve. 
              Since I have a lot of things that I want to have but the  time that I have is not that big, I was supposed to put some
              borders to make some expectations of what I want to have and do not have. </SmallInfo>
            <SmallInfo> I wanted to use <span style={{color:"#F1C3AC"}}>React Bootstrap</span> because they have already made templates. However, when I was brainstorming,
              I realized that my design is specific and it would not work. That's why after some talks with people with software 
              backgrounds, they advised me to use <span style={{color:"#F1C3AC"}}>styled-components</span>. 
              This is a React-specific CSS-in-JS styling solution that creates a platform for developers to write actual CSS code to style React components.
              This makes my work look cleaner and more professional and if someone wants to see my code it would be presented 
              in a structured way.
        </SmallInfo>
        </InfoBox>
      <Zoom> 
          <img src={Moscow} alt="" style={{'width': '450px', 'height': '450px'}}/>
        </Zoom>
    </Row>
    
     </Slide>
        </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
    position={ 'right' }
    iconStyle={{ background: '#FFCDB2', color: '#fff', WebkitBoxShadow: "none" }}
    textClassName = {'1'}
    contentArrowStyle={ {border: "none" }} >
    <Slide right cascade>
    <Row small conclusion>
    <InfoBox>
          <Title>Conclusion</Title> 
          <SmallInfo>In conclusion, I am proud of what they accomplished in a short amount of time, but I acknowledge that the project is still a work in progress and some components may change over time. 
            I believe they stuck to the project plan, but I understand the fact that projects can be unpredictable, so it's important to not make big 
            promises to stakeholders. Moreover, I developed both programming and design skills over these four weeks. </SmallInfo>
        </InfoBox>
    </Row>
    
     </Slide>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>  
       
   )
}

export default Numeration_CaseStudy
