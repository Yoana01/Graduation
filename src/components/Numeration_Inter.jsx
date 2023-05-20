import { createRef } from 'react';
import React, { useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Column, Row, InfoBox} from "./styleComponents/container.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import Poster from "./THEAA.png"
import GroupPhoto from "./GroupPhoto.jpg"
import Rules from "./Rules.jpg"
import Technology from "./Technology.jpg"
import Songs from "./songs.png"
import Branding from "./Branding.png"
import C4model from "./C4model.drawio.png"
import Brainstroming from "./brain3.png"
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
        <Column>
        <ZoomImage src={Poster} alt="" style={{'width': '350px', 'height': '450px'}}/>
        <ZoomImage src={GroupPhoto} alt="" style={{'width': '300px', 'height': '250px'}}/>
        </Column>
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
          <SmallInfo Resp> The first day of the international week was got to know each other in person and to understand more about the project itself since this was the day that we got who what will do. We met with our client but before that we did <span style={{color:"#F1C3AC"}}>expert interview</span> so to understand more about what the client wants and needs. So, we got valuable information as if we have a budget limit, do they have requirements that they are looking for when they need to choose a game. Тhis was a good start of our project because we got inspired and we knew what the clients wants.</SmallInfo>
          <SmallInfo Resp> The second thing that I did was a <span style={{color:"#F1C3AC"}}>company research</span>. I understood about their 14th rules, more about Johan Cruyff. This helped me even more to understand and inspire myself from this person as well as what game I want to build and what games they have. This was the basis of our brainstorming session. We tried to keep the rules involved in our game.  </SmallInfo>
          <SmallInfo Resp>Another thing that we did is to  <span style={{color:"#F1C3AC"}}>observe</span> one of the yards that they have and to see how it looks like and if it accessible for everyone how the kids are acting. So, what we got as a result is that there is social hierarchy, and they are mixed culture. The yard was a football, so all the kids were males and that it is constantly busy. This provided value information about kids itself. </SmallInfo>  
          <SmallInfo Resp>It is always good to see what it is out there as technology that there is out there. Also, these kids are another generation, so their types of games are way different from ours. That’s why our team divided task to investigate. I did  <span style={{color:"#F1C3AC"}}>literature study</span> about different technologies. So, I looked in AR, Haptic feedback, and Motion tracking. I did not look into VR because the movement part will be limited. The Haptic feedback was something that I did not know about it, so it was interesting to know that there is such an innovative technology. Most of the examples, I got was Pokemon-Go.  We knew what technologies are out there and what we can do with them, so it was helpful for creating the concept of our project. We wanted to have projector for our concept, so I also looked if there are projectors that are enough strong for the sun since the game is outdoor and there some that could help us but the place that will be placed needs to carefully choose. </SmallInfo>      
        </InfoBox>
        <Column>
        <ZoomImage src={Rules} alt="" style={{'width': '380px', 'height': '450px'}}/>
        <ZoomImage src={Technology} alt="" style={{'width': '350px', 'height': '325px'}}/>
        </Column>
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
          <SmallInfo Resp>Our team did couple of times iteration of  <span style={{color:"#F1C3AC"}}>brainstorming</span> before we go to the final concept as we gave some period, because in this way we can be most productive. Each of us was supposed to come with some ideas as we had some small requirements that we wanted to follow as the game to interactive, to relate to music and to be played with teams. I came up with the idea of having avatars that can be showed on the screen while their playing. In this way, every kid will play in a team, but his uniqueness will be kept. </SmallInfo>
          <SmallInfo Resp><span style={{color:"#F1C3AC"}}>The concept </span>is to have a music game and the kids to have list of songs. Each team can have 4 players and they need to compete between each other. At the end there will be leaderboard. There will be different light sensors on the ground, when some of them is light, the kid needs to jump. We have 4 sections: drums, guitar and piano as they will work with motion tracking. The last one will be a singer they do not need specifically to sing, but also in this way the kids that have difficulties with moving can also join. There will be a screen where the kids can see themselves as it can be a screen. The other thing is that when the kids hear the music can also dance while the players are playing the game. There will be and AI generator for the avatars. Moreover, the AI can be used for creating the difficulty based on each kid. The students will have bracelets, so there will be kept all the information, and this is the way the game to start by identifying them as scanning them on a tablet. </SmallInfo>
          <SmallInfo Resp>I did a <span style={{color:"#F1C3AC"}}>high fidelity prototyping</span> since I want to become UX/UI so in this will help me to become achieve my goal for the semester. I did a small brand style guide. As since we are designing for kids I wanted the design to be playful and happy. That’s why I choose these type of color palette and typefaces. I wanted the design to be simple as possible. If you want to see the itereation that we got, you can click the button. </SmallInfo>        
          <a href="https://www.figma.com/file/hM2rTS8Yni3Am977mgAiiB/Avatars-UI?type=design&node-id=0%3A1&t=uiDeKPy1c87Zmkwv-1 " target="_blank"> <Button> See more</Button> </a>
        </InfoBox>
        {/* <Zoom> */}
          <Column>
          <ZoomImage src={Brainstroming} alt="" style={{'width': '485px', 'height': '300px'}}/>
          <ZoomImage src={Branding} alt="" style={{'width': '400px', 'height': '250px'}}/>
          <ZoomImage src={Songs} alt="" style={{'width': '400px', 'height': '250px'}}/>
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
          <SmallInfo Resp>Another thing that I did is to visualize the whole project is a  <span style={{color:"#F1C3AC"}}>C4 model</span>. In this way, the client can see what he needs as software technology and for the programmers will be easier to understand the concept that we came up with. </SmallInfo>
            <SmallInfo Resp>At the end of the project we needed to deliver everything by creating a video. This is the final result. </SmallInfo>
            <SmallInfo Resp> Another thing that I did is  <span style={{color:"#F1C3AC"}}>take over of Fontys ICT account in Instagram</span>. This was very important because I want to create media content for social medias but also and digital marketing. In this way, I developed myself and I enjoyed it. Because I learned so many things as that I need to make the content intriguing and to involve people in my story as asking me questions or asking them for good luck.
        </SmallInfo>
        </InfoBox>
      {/* <Zoom> */}
        <Column>
          <ZoomImage src={C4model} alt="" style={{'width': '450px'}}></ZoomImage>
        </Column>
    </Row>
    <br />
    <Row>
    <iframe width="560" height="315" src="https://www.youtube.com/embed/j3AnqXWBJTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/DR2SblG4_mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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