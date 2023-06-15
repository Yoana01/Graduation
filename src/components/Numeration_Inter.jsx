import React, { createRef, useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Column, Row, InfoBox, Tag, CircleBox} from "./styleComponents/container.Style"
import { Title,SubTitle, SmallInfo } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import Poster from "./Images/THEAA.png"
import GroupPhoto from "./Images/GroupPhoto.jpg"
import Rules from "./Images/Rules.jpg"
import Technology from "./Images/Technology.jpg"
import Songs from "./Images/songs.png"
import Branding from "./Images/Branding.png"
import C4model from "./Images/C4model.drawio.png"
import Brainstroming from "./Images/brain3.png"
import { SubNavBar } from "./styleComponents/navBar.Style";
import Scrollspy from 'react-scrollspy';
import FancyNav from "./FancyNav"
import ZoomImage from './ZoomImages';
import Theme from "./Images/Animation.gif"
import DesignMethod from "./Images/Image7.png"
import Project from "./Images/sdgs.png"
import Slide from 'react-reveal/Slide';


function Numeration_Inter() {
  return (
    <div>
      <Scrollspy items={[ 'genInfo', 'understanding', 'exploring', 'materializing', 'conclusion']} activeNavClass="is-active">
      <SubNavBar RespN>
        <FancyNav href="#genInfo" text="General Information">Gen Info</FancyNav>
        <FancyNav href="#preparation" text="Preparation">Prep</FancyNav>
        <FancyNav href="#understanding"  text="Understanding" >Under</FancyNav>
        <FancyNav href="#exploring" text="Exploring">Explo</FancyNav> 
        <FancyNav href="#materializing" text="Materializing">Mat</FancyNav>
        <FancyNav href="#conclusion" text="Conclusion">Conc</FancyNav>
        {/* <FancyNav href="#genInfo" text="General Information" ref={createRef()}></FancyNav>
        <FancyNav href="#preparation" text="Preparation" ref={createRef()}></FancyNav>
        <FancyNav href="#understanding"  text="Understanding" ref={createRef()} ></FancyNav>
        <FancyNav href="#exploring" text="Exploring" ref={createRef()}></FancyNav> 
        <FancyNav href="#materializing" text="Materializing" ref={createRef()}></FancyNav>
        <FancyNav href="#conclusion" text="Conclusion" ref={createRef()}></FancyNav> */}
      </SubNavBar> 
      </Scrollspy>
      <br /> <br />
      <VerticalTimeline animate={ true } layout={ '1-column-left'} >
        <div id="genInfo">
        <VerticalTimelineElement 
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#76aa6', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
        <Row small even>
          <img src={Theme} alt="" className="IntrImg"/>
            <Slide right cascade>
            <InfoBox small> 
                <Title RespT>Schoolyard 14</Title>
                <SubTitle>Company:</SubTitle>
                <SmallInfo>The Cruyff Foundation</SmallInfo>
                <SubTitle>Duration:</SubTitle>
                <SmallInfo>1 week</SmallInfo>
                {/* <SubTitle>Learning Outcomes:</SubTitle> */}
                  {/* <Row learningOut>
                    <CircleBox> <SmallInfo learning learningText>User interaction</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>User interaction</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Software design</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Future-oriented organisation</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Personal leadership</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Goal-oriented interaction</SmallInfo> </CircleBox>   
                    <CircleBox> <SmallInfo learning learningText>Investigative problem solving</SmallInfo> </CircleBox>
                  </Row> */}
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
   </Column>
    <Column>
   <ZoomImage src={DesignMethod} alt="" id="sumImg"/>
   <ZoomImage src={Project} alt="" id="sumImg"/>
   </Column>
   </Row>
      </Slide>
        </VerticalTimelineElement>
        </div>
              
        <VerticalTimelineElement id="preparation"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#76aa6', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
    <Row small >
    <InfoBox>
          <Title>Preparation</Title> 
          <Tag>Goal-oriented interaction</Tag>
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
        <VerticalTimelineElement id="understanding"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#76aa6', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
    <Row small >
    <InfoBox>
    <Title>Understanding</Title> 
      <Row tag>
      <Tag>User Interaction</Tag>
          <Tag>Future-oriented organisation</Tag>
          <Tag>Investigative problem solving</Tag>
      </Row>
          <SmallInfo Resp>During the first day of the international week, we introduced ourselves and clarified the project details. We conducted <span style={{color:"#7c6aa6"}}>expert interviews</span> to understand the client's needs, including budget limitations and their game selection criteria. This productive start inspired us and gave us a clear direction for the project.</SmallInfo>
          <SmallInfo Resp> The second thing that I did was a <span style={{color:"#7c6aa6"}}>company research</span>. I understood about their 14th rules, more about Johan Cruyff. This helped me even more to understand and inspire myself from this person as well as what game I want to build and what games they have. This was the basis of our brainstorming session. We tried to keep the rules involved in our game.  </SmallInfo>
          <SmallInfo Resp>Another thing that we did is to  <span style={{color:"#7c6aa6"}}>observe</span> one of the yards that they have and to see how it looks like and if it accessible for everyone how the kids are acting. So, what we got as a result is that there is social hierarchy, and they are mixed culture. The yard was a football, so all the kids were males and that it is constantly busy. This provided value information about kids itself. </SmallInfo>  
          <SmallInfo Resp>
I recognized the importance of exploring different technologies, considering the advancements and the distinct gaming preferences of the younger generation. My focus was to make <span style={{color:"#7c6aa6"}}>research</span>on AR (Augmented Reality), Haptic feedback, and Motion tracking. I excluded VR (Virtual Reality) due to its limitations in movement. The concept of Haptic feedback was particularly intriguing to me, and I found Pokemon Go to be a prominent example. Understanding the available technologies and their potential applications was beneficial in shaping our project concept. Additionally, we considered the feasibility of using projectors for our outdoor game, specifically investigating whether there are projectors strong enough to withstand sunlight, although careful consideration of the placement would be necessary.</SmallInfo>      
        </InfoBox>
        <Column>
        <ZoomImage src={Rules} alt="" style={{'width': '380px', 'height': '450px'}}/>
        <ZoomImage src={Technology} alt="" style={{'width': '350px', 'height': '250px'}}/>
        </Column>
    </Row>
    
     {/* </Slide> */}
       
        </VerticalTimelineElement>
        <VerticalTimelineElement id="exploring"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
  {/* <Slide right cascade> */}
    <Row small > 
    <InfoBox>
          <Title>Exploring</Title> 
    <Tag>User Interaction</Tag>
    <Tag>Investigative problem solving</Tag>
          <SmallInfo Resp>Our team did couple of times iteration of  <span style={{color:"#7c6aa6"}}>brainstorming</span> before we go to the final concept as we gave some period, because in this way we can be most productive. Each of us was supposed to come with some ideas as we had some small requirements that we wanted to follow as the game to interactive, to relate to music and to be played with teams. I came up with the idea of having avatars that can be showed on the screen while their playing. In this way, every kid will play in a team, but his uniqueness will be kept. </SmallInfo>
          {/* <SmallInfo Resp><span style={{color:"#7c6aa6"}}>The concept </span>is to have a music game and the kids to have list of songs. Each team can have 4 players and they need to compete between each other. At the end there will be leaderboard. There will be different light sensors on the ground, when some of them is light, the kid needs to jump. We have 4 sections: drums, guitar and piano as they will work with motion tracking. The last one will be a singer they do not need specifically to sing, but also in this way the kids that have difficulties with moving can also join. There will be a screen where the kids can see themselves as it can be a screen. The other thing is that when the kids hear the music can also dance while the players are playing the game. There will be and AI generator for the avatars. Moreover, the AI can be used for creating the difficulty based on each kid. The students will have bracelets, so there will be kept all the information, and this is the way the game to start by identifying them as scanning them on a tablet. </SmallInfo> */}
          <SmallInfo Resp>I did a <span style={{color:"#7c6aa6"}}>high fidelity prototyping</span> since I want to become UX/UI so in this will help me to become achieve my goal for the semester. I did a small brand style guide. As since we are designing for kids I wanted the design to be playful and happy. That’s why I choose these type of color palette and typefaces. I wanted the design to be simple as possible. If you want to see the itereation that we got, you can click the button. </SmallInfo>        
          <a href="https://www.figma.com/file/hM2rTS8Yni3Am977mgAiiB/Avatars-UI?type=design&node-id=0%3A1&t=uiDeKPy1c87Zmkwv-1 " target="_blank"> <Button> Read more</Button> </a>
        </InfoBox>
        {/* <Zoom> */}
          <Column>
          <ZoomImage src={Brainstroming} alt="" style={{'width': '350px', 'height': '250px'}}/>
          <ZoomImage src={Branding} alt="" style={{'width': '350px', 'height': '250px'}}/>
          <ZoomImage src={Songs} alt="" style={{'width': '350px', 'height': '250px'}}/>
          </Column>  
        {/* </Zoom> */}
    </Row>
     {/* </Slide> */}
        </VerticalTimelineElement>
        <VerticalTimelineElement id="materializing"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
  {/* <Slide right cascade> */}
    <Row small >
    <InfoBox>
          <Title>Materializing</Title> 
          <Row tag>
          <Tag>Software Design</Tag>
          <Tag>Investigative problem solving</Tag>
          <Tag>Personal leadership</Tag>
      </Row>
          <SmallInfo Resp>Another thing that I did is to visualize the whole project is a  <span style={{color:"#7c6aa6"}}>C4 model</span>. In this way, the client can see what he needs as software technology and for the programmers will be easier to understand the concept that we came up with. </SmallInfo>
            <SmallInfo Resp>At the end of the project we needed to deliver everything by creating a video. This is the final result. </SmallInfo>
            <SmallInfo Resp> Another thing that I did is  <span style={{color:"#7c6aa6"}}>take over of Fontys ICT account in Instagram</span>. This was very important because I want to create media content for social medias but also and digital marketing. In this way, I developed myself and I enjoyed it. Because I learned so many things as that I need to make the content intriguing and to involve people in my story as asking me questions or asking them for good luck.
        </SmallInfo>
        </InfoBox>
      {/* <Zoom> */}
        <Column>
          <ZoomImage src={C4model} alt="" style={{'width': '350px'}}></ZoomImage>
          <iframe width="350" height="250" src="https://www.youtube.com/embed/j3AnqXWBJTk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Column>
    </Row>
    <br />
        </VerticalTimelineElement>
        <VerticalTimelineElement id="conclusion"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
    {/* <Slide right cascade> */}
    <Row small conclusion >
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
        <iframe width="350" height="250" src="https://www.youtube.com/embed/DR2SblG4_mk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </Row>
     {/* </Slide> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>  
       
   )
}

export default Numeration_Inter