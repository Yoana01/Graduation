import { createRef } from 'react';
import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Column, Row, InfoBox} from "./styleComponents/container.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import Versions from "./Images/versions.png"
import MooodBoard from "./Images/moodboardV3.png"
import UIArch from "./Images/uiarch.png"
import Moscow from "./Images/MoSCoW.jpg"
import C4model from "./Images/C4model.png"
import { SubNavBar } from "./styleComponents/navBar.Style";
import Scrollspy from 'react-scrollspy';
import FancyNav from "./FancyNav"
import ZoomImage from './ZoomImages';
// import Zoom from 'react-reveal/Zoom';
// import Slide from 'react-reveal/Slide';

function Numeration_CaseStudy() {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 1450) {
      setSticky(true);
    } else {
      setSticky(false);
    }
  };
  let activeStyle = {
    color: "#FFCDB2", 
    textDecoration : "underline"
  }
  return (
    <div>
      <br /> <br />
      <Scrollspy items={['understanding', 'exploring', 'materializing', 'conclusion']} currentClassName="active">
      <SubNavBar isSticky={isSticky}>
        <FancyNav href="#understanding"  text="Understanding" ref={createRef()} ></FancyNav>
        <FancyNav href="#exploring" text="Exploring" ref={createRef()}></FancyNav> 
        <FancyNav href="#materializing" text="Materializing" ref={createRef()}></FancyNav>
        <FancyNav href="#conclusion" text="Conclusion" ref={createRef()}></FancyNav>
      </SubNavBar>
    
      </Scrollspy>
      <br /> <br />
      <VerticalTimeline animate={ true } layout={ '1-column-left'} >
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        > 
      {/* <Slide right cascade> */}
    <Row small id="understanding">
    <InfoBox>
          <Title>Understanding</Title> 
          <SmallInfo Resp> I inspired myself by the design of other UX/UI designers as looking at their portfolios, I made 
            <span style={{color:"#7c6aa6"}}> trend analysis </span>for 2023. I did this because I wanted to make sure that my design 
            would not look old-fashion. Also, one designer needs to 
            know what are the trends right now, but also not put all of them if they are not relevant to the case that he is doing.
            Something that at the moment is trendy is the 3-D icons, however, I, personally, do not like them, so I did not include 
            them in my design. Nevertheless, I like to have some gradients in the design, that's why I chose to use it. 
            They are different opinions about them, but they are still being used.</SmallInfo>
          <SmallInfo Resp>Another method that I used is a  <span style={{color:"#7c6aa6"}}>mood board</span> there I started brainstorming what colours and typefaces, I wanted to have
             in my design. I was having different versions of what I wanted to look at the end, but at the end I decided to be more
              playful and represent my creativity and myself. That's why I got to the idea that I want to have some sunset colours. 
              Also, something that I wanted to have in my design is to have lines in my design. </SmallInfo>
        </InfoBox>
        {/* <Zoom> */}
        <ZoomImage src={MooodBoard} alt="" style={{'width': '350px', 'height': '450px'}}/>
          {/* <img /> */}
        {/* </Zoom> */}
    </Row>
    
     {/* </Slide> */}
       
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
    <Row small  id="exploring"> 
    <InfoBox>
          <Title>Exploring</Title> 
          <SmallInfo Resp>Since I was not sure how exactly my will look my design as well as the limited time of the project, 
            I started directly to <span style={{color:"#7c6aa6"}}>prototyping</span> digital versions of the design. I got through some until I got to the point
            where I believe it is closest to what I wanted to have. You can download to see the final version.</SmallInfo>
            <SmallInfo Resp> Another method that I used is the <span style={{color:"#7c6aa6"}}>UI Architecture</span> as again and 
            here I went through different iterations before going to the final version of my structure for the design. 
            I did and small brand style guide which to help with the components of my design.</SmallInfo>
            <a href="https://stichtingfontys-my.sharepoint.com/:u:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Portfolio/Portfolio.xd?csf=1&web=1&e=fqYXFq" target="_blank"> <Button> See more</Button> </a>
        </InfoBox>
          <Column>
          <ZoomImage src={Versions} alt="" style={{'width': '500px', 'height': '250px'}}/>
          <ZoomImage src={UIArch} alt="" style={{'width': '300px', 'height': '450px'}}/>
          </Column>  
    </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
  {/* <Slide right cascade> */}
    <Row small id="materializing">
    <InfoBox>
          <Title>Materializing</Title> 
          <SmallInfo Resp>I did a <span style={{color:"#7c6aa6"}}>peer reviews</span> with couple of my fellow students which gave me a feedback for my design. Based on this method, 
            I put more white space and removed  some elements that made the design to look more simple and clear. </SmallInfo>
            <SmallInfo Resp>I did a <span style={{color:"#7c6aa6"}}>MosCoW analysis</span>. This was important for me because I wanted to set some goals that I can achieve and not achieve. 
              Since I have a lot of things that I want to have but the  time that I have is not that big, I was supposed to put some
              borders to make some expectations of what I want to have and do not have. </SmallInfo>
            <SmallInfo Resp> I wanted to use <span style={{color:"#7c6aa6"}}>React Bootstrap</span> because they have already made templates. However, when I was brainstorming,
              I realized that my design is specific and it would not work. That's why after some talks with people with software 
              backgrounds, they advised me to use <span style={{color:"#7c6aa6"}}>styled-components</span>. 
              This is a React-specific CSS-in-JS styling solution that creates a platform for developers to write actual CSS code to style React components.
              This makes my work look cleaner and more professional and if someone wants to see my code it would be presented 
              in a structured way.
        </SmallInfo>
        <SmallInfo Resp> 
Based on a <span style={{color:"#7c6aa6"}}>360-degree feedback
</span> from my fellow students, I received positive feedback for my planning skills, structured approach, timely delivery, research documentation, and empathy in design. However, there are areas for improvement, such as creating more minimalistic plans, highlighting key research points, being open to change in group work, thinking beyond limitations in problem-solving, and not taking feedback personally. Overall, I have good qualities but need to be more flexible and open-minded.
              <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Portfolio/Documentation/360%20Feedback.docx?d=w531d685c0e434fd3b498a423fda062ea&csf=1&web=1&e=F0HFOK" target="_blank"> <Button> See more</Button> </a>
        </SmallInfo>
      
        </InfoBox>
        <Column>
          <ZoomImage src={Moscow} alt="" style={{'width': '350px', 'height': '350px'}}/>
          <ZoomImage src={C4model} alt="" style={{'width': '450px', 'height': '450px'}}/>
        </Column> 
    </Row>
    
     {/* </Slide> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
    {/* <Slide right cascade> */}
    <Row small conclusion id="conclusion">
    <InfoBox>
          <Title>Conclusion</Title> 
          <SmallInfo Resp>In conclusion, I am proud of what they accomplished in a short amount of time, but I acknowledge that the project is still a work in progress and some components may change over time. 
            I believe they stuck to the project plan, but I understand the fact that projects can be unpredictable, so it's important to not make big 
            promises to stakeholders. Moreover, I developed both programming and design skills over these four weeks. </SmallInfo>
        </InfoBox>
        
    </Row>
     {/* </Slide> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>  
       
   )
}

export default Numeration_CaseStudy
