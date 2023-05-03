import { createRef } from 'react';
import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Column, Row, InfoBox} from "./styleComponents/container.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import { SubNavBar } from "./styleComponents/navBar.Style";
import Scrollspy from 'react-scrollspy';
import FancyNav from "./FancyNav"
import ZoomImage from './ZoomImages';
// import Zoom from 'react-reveal/Zoom';
// import Slide from 'react-reveal/Slide';

function Numeration_Simac() {
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
      <Scrollspy items={['planning','exploration','definition', 'materializing', 'conclusion']} currentClassName="active">
      <SubNavBar isSticky={isSticky}>
        <FancyNav href="#planning"  text="Planning" ref={createRef()} ></FancyNav>
        <FancyNav href="#exploration" text="Exploring" ref={createRef()}></FancyNav> 
        <FancyNav href="#definition" text="Defining" ref={createRef()}></FancyNav>
        <FancyNav href="#conclusion" text="Conclusion" ref={createRef()}></FancyNav>
      </SubNavBar>
    
      </Scrollspy>
      <br /> <br />
      <VerticalTimeline animate={ true } layout={ '1-column-left'} >
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#F1C3AC', color: '#fff', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        > 
      {/* <Slide right cascade> */}
    <Row small id="planning">
    <InfoBox>
          <Title>Set up and Planning</Title> 
          <SmallInfo> I have a strong passion for organizing my life and daily activities, which is why I aspire to lead and organize 
            people around me by planning and executing successful events. To achieve this, I conducted   <span style={{color:"#F1C3AC"}}>
            literature research on project management methodologies </span> that would best suit our project needs and goals. After careful consideration,
            I determined that Scrum-ban was the ideal approach as it allows for flexibility and adjustments throughout the project,
             particularly when there are no concrete user requirements as in the case of our project.
             To further my knowledge and skills in this area, I completed several Scrum courses for Scrum Master. This experience provided me with valuable 
            insight into the role of a project manager and helped me determine if this is a career path I would like to pursue in the future.</SmallInfo>
        </InfoBox>
        {/* <Zoom> */}
        {/* <ZoomImage src={MooodBoard} alt="" style={{'width': '350px', 'height': '450px'}}/> */}
          {/* <img /> */}
        {/* </Zoom> */}
    </Row>
    
     {/* </Slide> */}
       
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#F1C3AC', color: '#fff', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        > 
      {/* <Slide right cascade> */}
    <Row small id="exploration">
    <InfoBox>
          <Title>Exploration</Title> 
          <SmallInfo> Our team has decided to conduct  <span style={{color:"#F1C3AC"}}>literature research </span>
          on the topic before presenting it to the end stakeholders to be prepared for what is out there. 
          Each team member has been assigned a specific topic, and mine was to <span style={{color:"#F1C3AC"}}>understand the current onboarding process at Simac</span>. 
          To achieve this, I conducted a literature review of the documents provided by Simac. One of the documents was a feedback survey 
          from their employees, while the other outlined the flow and best practices that Simac can implement.
          Based on these documents, I discovered that there are four stages of onboarding, and most employees feel overwhelmed on their 
          first day due to the many tasks they need to complete. Another interesting finding was that many employees do not use SimacWeb.
          However, the company is doing some things right, such as personalizing the onboarding process based on individuals and assigning
         a "buddy" for the first few days. These insights provided our team with valuable information to guide our project. </SmallInfo>
         <SmallInfo> As there are various steps involved in the onboarding process over several months, we created a
         <span style={{color:"#F1C3AC"}}>customer journey map </span>
            to visualize it. The map includes a general overview, as well as two more specific maps detailing the first day and 
            first week at work. Since many actions are happening these days, our team decided to create the maps early on. 
            We can make changes later based on the inputs we receive from the interviews. </SmallInfo>
            <SmallInfo> I participated in <span style={{color:"#F1C3AC"}}> expert interviews </span> to gain insights into how Simac and other companies conduct their onboarding.
                 An interesting fact that was confirmed is that employees are not aware of the full capabilities of SimacWeb, 
                 and there are too many Word documents involved in the Simac onboarding process. 
                 Another company we talked to mentioned that they switched their company language from Dutch to English. They emphasized the 
                 importance of everyone feeling like an expert in their role and taking initiative. </SmallInfo>
    </InfoBox>
        {/* <ZoomImage src={MooodBoard} alt="" style={{'width': '350px', 'height': '450px'}}/> */}
    </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#F1C3AC', color: '#fff', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        > 
      {/* <Slide right cascade> */}
    <Row small id="definition">
    <InfoBox>
          <Title>Definition</Title> 
          <SmallInfo> I inspired myself by the design of other UX/UI designers as looking at their portfolios, I made 
            <span style={{color:"#F1C3AC"}}> trend analysis </span>for 2023. I did this because I wanted to make sure that my design 
            would not look old-fashion. Also, one designer needs to 
            know what are the trends right now, but also not put all of them if they are not relevant to the case that he is doing.
            Something that at the moment is trendy is the 3-D icons, however, I, personally, do not like them, so I did not include 
            them in my design. Nevertheless, I like to have some gradients in the design, that's why I chose to use it. 
            They are different opinions about them, but they are still being used.</SmallInfo>
          <SmallInfo>Another method that I used is a  <span style={{color:"#F1C3AC"}}>mood board</span> there I started brainstorming what colours and typefaces, I wanted to have
             in my design. I was having different versions of what I wanted to look at the end, but at the end I decided to be more
              playful and represent my creativity and myself. That's why I got to the idea that I want to have some sunset colours. 
              Also, something that I wanted to have in my design is to have lines in my design. </SmallInfo>
        </InfoBox>
        {/* <ZoomImage src={MooodBoard} alt="" style={{'width': '350px', 'height': '450px'}}/> */}
    </Row>
    
     {/* </Slide> */}
       
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>  
       
   )
}

export default Numeration_Simac
    