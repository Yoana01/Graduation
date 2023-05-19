import { createRef } from 'react';
import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Column, Row, InfoBox} from "./styleComponents/container.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import Versions from "./versions.png"
import Poster from "./THEAA.png"
import UIArch from "./uiarch.png"
import Moscow from "./MoSCoW.jpg"
import C4model from "./C4model.png"
import { SubNavBar } from "./styleComponents/navBar.Style";
import Scrollspy from 'react-scrollspy';
import FancyNav from "./FancyNav"
import ZoomImage from './ZoomImages';
// import Zoom from 'react-reveal/Zoom';
// import Slide from 'react-reveal/Slide';

function Numeration_Inter() {
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
      <Scrollspy items={[ 'preparation', 'understanding', 'exploring', 'materializing', 'conclusion']} currentClassName="active">
      <SubNavBar isSticky={isSticky}>
        <FancyNav href="#preparation" text="Preparation" ref={createRef()}></FancyNav>
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
        contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#F1C3AC', color: '#fff', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        > 
      {/* <Slide right cascade> */}
    <Row small id="preparation">
    <InfoBox>
          <Title>Preparation</Title> 
          <SmallInfo Resp>We had one additional week before the actual week, there we still did not know what our project is. This week was
          to get know each other. In our group we were in total 8 people, 5 from Fontys University, 1 – EPHEC (Belgium),
          1- Berliner Hochschule für Technik (Germany), 1 - Nantes l’Ecole Design (France). At the end of this week, we were supposed to 
          deliver a poster with the information that we learn from the inspirational talks that we had and about ourselves. I was 
          responsible for the poster. Everyone gave their information, and I was supposed to patch it in one.</SmallInfo>
        </InfoBox>
        <ZoomImage src={Poster} alt="" style={{'width': '350px', 'height': '450px'}}/>
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
    <Row small id="understanding">
    <InfoBox>
          <Title>Understanding</Title> 
          <SmallInfo Resp> I inspired myself by the design of other UX/UI designers as looking at their portfolios, I made 
            <span style={{color:"#F1C3AC"}}> trend analysis </span>for 2023. I did this because I wanted to make sure that my design 
            would not look old-fashion. Also, one designer needs to 
            know what are the trends right now, but also not put all of them if they are not relevant to the case that he is doing.
            Something that at the moment is trendy is the 3-D icons, however, I, personally, do not like them, so I did not include 
            them in my design. Nevertheless, I like to have some gradients in the design, that's why I chose to use it. 
            They are different opinions about them, but they are still being used.</SmallInfo>
          <SmallInfo Resp>Another method that I used is a  <span style={{color:"#F1C3AC"}}>mood board</span> there I started brainstorming what colours and typefaces, I wanted to have
             in my design. I was having different versions of what I wanted to look at the end, but at the end I decided to be more
              playful and represent my creativity and myself. That's why I got to the idea that I want to have some sunset colours. 
              Also, something that I wanted to have in my design is to have lines in my design. </SmallInfo>
        </InfoBox>
        {/* <Zoom> */}
        {/* <ZoomImage src={MooodBoard} alt="" style={{'width': '350px', 'height': '450px'}}/> */}
          {/* <img /> */}
        {/* </Zoom> */}
    </Row>
    
     {/* </Slide> */}
       
        </VerticalTimelineElement>
      {/* </Link> */}
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
    position={ 'right' }
    iconStyle={{ background: '#F1C3AC', color: '#fff', WebkitBoxShadow: "none" }}
    textClassName = {'1'}
    contentArrowStyle={ {border: "none" }} >
  {/* <Slide right cascade> */}
    <Row small id="exploring"> 
    <InfoBox>
          <Title>Exploring</Title> 
          <SmallInfo Resp>Since I was not sure how exactly my will look my design as well as the limited time of the project, 
            I started directly to <span style={{color:"#F1C3AC"}}>prototyping</span> digital versions of the design. I got through some until I got to the point
            where I believe it is closest to what I wanted to have. You can download to see the final version.</SmallInfo>
            <SmallInfo Resp> Another method that I used is the <span style={{color:"#F1C3AC"}}>UI Architecture</span> as again and 
            here I went through different iterations before going to the final version of my structure for the design. 
            I did and small brand style guide which to help with the components of my design.</SmallInfo>
            <a href="https://stichtingfontys-my.sharepoint.com/:u:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Portfolio/Portfolio.xd?csf=1&web=1&e=fqYXFq" target="_blank"> <Button> See more</Button> </a>
        </InfoBox>
        {/* <Zoom> */}
          <Column>
          <ZoomImage src={Versions} alt="" style={{'width': '500px', 'height': '250px'}}/>
          <ZoomImage src={UIArch} alt="" style={{'width': '300px', 'height': '450px'}}/>
          </Column>  
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
    contentArrowStyle={ {border: "none" }} >
  {/* <Slide right cascade> */}
    <Row small id="materializing">
    <InfoBox>
          <Title>Materializing</Title> 
          <SmallInfo Resp>I did a <span style={{color:"#F1C3AC"}}>peer reviews</span> with couple of my fellow students which gave me a feedback for my design. Based on this method, 
            I put more white space and removed  some elements that made the design to look more simple and clear. </SmallInfo>
            <SmallInfo Resp>I did a <span style={{color:"#F1C3AC"}}>MosCoW analysis</span>. This was important for me because I wanted to set some goals that I can achieve and not achieve. 
              Since I have a lot of things that I want to have but the  time that I have is not that big, I was supposed to put some
              borders to make some expectations of what I want to have and do not have. </SmallInfo>
            <SmallInfo Resp> I wanted to use <span style={{color:"#F1C3AC"}}>React Bootstrap</span> because they have already made templates. However, when I was brainstorming,
              I realized that my design is specific and it would not work. That's why after some talks with people with software 
              backgrounds, they advised me to use <span style={{color:"#F1C3AC"}}>styled-components</span>. 
              This is a React-specific CSS-in-JS styling solution that creates a platform for developers to write actual CSS code to style React components.
              This makes my work look cleaner and more professional and if someone wants to see my code it would be presented 
              in a structured way.
        </SmallInfo>
        </InfoBox>
      {/* <Zoom> */}
        <Column>
          <ZoomImage src={Moscow} alt="" style={{'width': '350px', 'height': '350px'}}/>
          <ZoomImage src={C4model} alt="" style={{'width': '450px', 'height': '450px'}}/>
        </Column> 
        <iframe width="560" height="315" src="https://www.youtube.com/embed/j3AnqXWBJTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        
<iframe width="560" height="315" src="https://www.youtube.com/embed/DR2SblG4_mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

        {/* </Zoom> */}
    </Row>
    
     {/* </Slide> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement
    className="vertical-timeline-element--work"
    contentStyle={{ background: 'none', color: '#fff', border:'none', WebkitBoxShadow: "none" }}
    position={ 'right' }
    iconStyle={{ background: '#FFCDB2', color: '#fff', WebkitBoxShadow: "none" }}
    textClassName = {'1'}
    contentArrowStyle={ {border: "none" }} >
    {/* <Slide right cascade> */}
    <Row small conclusion id="conclusion">
    <InfoBox>
          <Title>Conclusion</Title> 
          <SmallInfo Resp>The Dutch Design Charrette was one amazing experience because I really started thinking 
          beyond the screen. I knew that there is architecture and internal design, and they are also doing design 
          things. However, this project taught me that even UX/UI and the technology that we are studying now can 
          help me to solve a problem. So far, when it was something about creating a solution, I was limiting myself
          into thinking only about the mobile app or website. Moreover, working with different people with different 
          studies was also an amazing opportunity because you see the project from different perspective as an example 
          is the perspective of the architecture or the e-commerce. Also, during this week I challenged myself as I 
          took over the main account of Fontys ICT account since I want to develop myself in digital marketing. Overall,
          I think that I grow myself as professional. </SmallInfo>
        </InfoBox>
        
    </Row>
     {/* </Slide> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>  
       
   )
}

export default Numeration_Inter
