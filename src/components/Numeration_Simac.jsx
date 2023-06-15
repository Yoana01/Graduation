import React, { useState, useEffect, useRef, createRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Column, Row, InfoBox, Tag, CircleBox} from "./styleComponents/container.Style"
import { Title, SmallInfo, SubTitle } from "./styleComponents/text.Style"
import { Button } from "./styleComponents/button.Style"
import { SubNavBar } from "./styleComponents/navBar.Style";
import Scrollspy from 'react-scrollspy';
import FancyNav from "./FancyNav"
import ZoomImage from './ZoomImages';
import ProjectManagement from './Images/Monday.png';
import CustomerJourneyMap from './Images/CustomerJourney Map.jpg';
import Expert from './Images/expert.jpg';
import Empathy from './Images/Empatymap.png';
import Affinity from './Images/SIMAC Affinity map 1.png';
import Model from './Images/3dModel.webm';
import BrainstormingOne from './Images/Brainstorming1.mp4';
import BrainstormingTwo from './Images/Brainstorming2.mp4';
// import BigPic from "./Images/Image6.png"
import Project from "./Images/ProjectbreakdownSIMAC.png"
// import Project02 from "./Images/Logo.png"
import Theme from "./Images/Project Theme.jpg"
import Slide from 'react-reveal/Slide';
import { green } from '@mui/material/colors';
import { HashLink } from 'react-router-hash-link';

function Numeration_Simac() {
  // const [isSticky, setSticky] = useState(false);
  const videoRef = useRef(null);
  const gInfo = useRef();
  const planning = useRef();
  

  useEffect(() => {
    videoRef.current.play();
  }, []);

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);

  //   return () => {
  //     window.removeEventListener('scroll', handleScroll);
  //   };
  // }, []);

  // const handleScroll = () => {
  //   if (window.scrollY > 1450) {
  //     setSticky(true);
  //   } else {
  //     setSticky(false);
  //   }
  // };
  // let activeStyle = {
  //   color: "red", 
  //   textDecoration : "underline"
  // }
 


  return (
    <div>
      <br /> <br />
      <Scrollspy items={["gInfo", 'planning', 'exploration', 'definition', 'ideation', "proto",  "conclusion"]} activeNavClass="is-active">
      <SubNavBar RespN>
      <FancyNav  href="#gInfo" text="General Information"  ref={createRef()} />
        <FancyNav  href="#planning" text="Planning"  ref={createRef()} />
        <FancyNav  href="#exploration" text="Exploring"  ref={createRef()} />
        <FancyNav href="#definition" text="Defining"  ref={createRef()}/> 
        <FancyNav href="#ideation" text="Ideation"  ref={createRef()}/>  
        <FancyNav href="#proto" text="Prototypes"  ref={createRef()}/>  
        <FancyNav href="#conclusion" text="Conclusion"  ref={createRef()}/> 
        </SubNavBar>
      </Scrollspy>
     
      <VerticalTimeline animate={ true } layout={ '1-column-left'} > 
      <VerticalTimelineElement  id="gInfo"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
       >   
     <Row small even>
          <img src={Theme} alt="" className="SimacImg"/>
            <Slide right cascade>
            <InfoBox small> 
                <Title RespT>Onboarding process Simac</Title>
                <SubTitle>Company:</SubTitle>
                <SmallInfo>Simac IT NL</SmallInfo>
                <SubTitle>Duration:</SubTitle>
                <SmallInfo>12 weeks</SmallInfo>
                {/* <SubTitle>Learning Outcomes:</SubTitle> */}
                  {/* <Row learningOut>
                    <CircleBox> <SmallInfo learning learningText>User interaction</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Software design</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Future-oriented organisation</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Personal leadership</SmallInfo> </CircleBox>
                    <CircleBox> <SmallInfo learning learningText>Goal-oriented interaction</SmallInfo> </CircleBox>
                  </Row> */}
                <SubTitle>Contribution and Tools:</SubTitle>
                <SmallInfo>- Agile <br />
                        - Design Thinking <br />
                        - DOT Framework/CMD methods <br />
                        - UX Research <br />
                        - UI <br />
                        </SmallInfo>
            </InfoBox>
            </Slide>
        </Row>
        {/* <Column sum> */}
        <Slide cascade>
        <Row small homeA even>
          <Column home>
          <Title>Summary</Title>
          <SmallInfo  small>
          The assignment brought together six individuals with diverse backgrounds, sharing a passion for UX/UI. We partnered with <span style={{color:"#7c6aa6"}}>Simac</span>, a Dutch company in Veldhoven, and chose to address the onboarding of non-Dutch employees. Our goal is to <span style={{color:"#7c6aa6"}}> make Simac more attractive to international candidates by improving the onboarding process, considering language barriers and cultural differences.</span>
          </SmallInfo>
          </Column>
      <ZoomImage src={Project} alt="" id="sumImg"/>
        </Row>
      </Slide>

     {/* </Slide> */}
       
        </VerticalTimelineElement>
        <VerticalTimelineElement  id="planning"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
       >   
    <Row small conclusion > 
    <InfoBox>
          <Title>Set up and Planning</Title> 
          <Row tag>
            <Tag>Investigative problem solving</Tag>
            <Tag>Future-oriented organisation</Tag>
          </Row>
          <SmallInfo Resp> I have a passion for organizing and leading people in planning and executing successful events. After conducting a<span style={{color:"#7c6aa6"}}> secondary reserch</span>, I found that Scrum-ban is the ideal project management methodology for the needs of the project. I completed Scrum courses to enhance my skills as a <span style={{color:"#7c6aa6"}}>Scrum Master</span>. During the second sprint, I served as the Scrum Master and successfully achieved our sprint goal by being realistic with task assignments and setting small targets and deadlines, but having and good communication. </SmallInfo>
            <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/%D0%9Cethodology.docx?d=wf6e641bb63a44e7ca7823d7bb316029c&csf=1&web=1&e=0ervoT" target="_blank"> <Button> Methodology Research </Button> </a>
        </InfoBox>
        <ZoomImage src={ProjectManagement} alt="" style={{'width': '350px', 'height': '250px'}}/>
    </Row> 

     {/* </Slide> */}
       
        </VerticalTimelineElement>
        <VerticalTimelineElement  id="exploration"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
    <Row small >
    <InfoBox>
          <Title>Exploration</Title> 
          <Row tag>
            <Tag>Personal leadership</Tag>
          </Row>
          <SmallInfo Resp> Based on my <span style={{color:"#7c6aa6"}}>literature review</span> of Simac's documents, I found that their onboarding process consists of four stages. However, many employees feel overwhelmed on their first day due to the number of tasks they need to complete. It was also noted that some employees do not use SimacWeb. On the positive side, Simac personalizes the onboarding process and assigns a "buddy" to new hires during their initial days. These insights provide valuable information.
         </SmallInfo>
         <a href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/Simac%20-Lit%20Study.pdf?csf=1&web=1&e=8YCl43" target="_blank"> <Button> Read more</Button> </a> <br />

         <SmallInfo Resp> As there are various steps involved in the onboarding process over several months, I created a <span style={{color:"#7c6aa6"}}>customer journey map </span>to visualize it. The map includes a general overview, as well as two more specific maps detailing the first day and first week at work. </SmallInfo>
            <a href="https://miro.com/app/board/uXjVMXm3hSE=/?share_link_id=77056691624" target="_blank"> <Button> Customer journey map</Button> </a>
            <br/><br/>
            <SmallInfo Resp> I participated in <span style={{color:"#7c6aa6"}}> expert interviews </span> to gain insights into how Simac and other companies conduct their onboarding.
                 An interesting fact that was confirmed is that employees are not aware of the full capabilities of SimacWeb, 
                 and there are too many Word documents involved in the Simac onboarding process. 
                 Another company we talked to mentioned that they switched their company language from Dutch to English. They emphasized the 
                 importance of everyone feeling like an expert in their role and taking initiative. </SmallInfo>
    </InfoBox>
    <Column>
    <ZoomImage src={CustomerJourneyMap} alt="" style={{'width': '350px', 'height': '250px'}}/>
        <ZoomImage src={Expert} alt="" style={{'width': '350px', 'height': '250px'}}/>
    </Column>
    </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement id="definition"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
      {/* <Slide right cascade> */}
    <Row small >
    <InfoBox>
          <Title>Definition</Title> 
          <Tag>User interaction</Tag>
          <SmallInfo Resp>After the gathered information, I conducted one <span style={{color:"#7c6aa6"}}>interviews</span>  with non-Dutch employees in Simac and another company to understand their onboarding experience. Surprisingly, language difficulties were not a major concern. Next, I analyzed the interviews and created an  <span style={{color:"#7c6aa6"}}> empathy map </span>to capture users' emotions, feelings, and thoughts. This informed the creation of personas and user requirements by my team members.
          </SmallInfo>
          <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/Interview%20Analysis.docx?d=w591cef0b87aa44ea9c161650ec7b8851&csf=1&web=1&e=di7Rkb" target="_blank"> <Button> Read more</Button> </a> <br />
          <SmallInfo Resp>Based on client feedback, we conducted an  <span style={{color:"#7c6aa6"}}>affinity mapping</span> on the interviews' analysis to identify key elements we had missed. It revealed that socializing, particularly among international and non-Dutch employees, was underdeveloped at Simac. This became a crucial focus area for the project as we moved on to finding a solution for the problem. </SmallInfo>
        </InfoBox>
        <Column>
        <ZoomImage src={Empathy} alt="" style={{'width': '350px', 'height': '250px'}}/>
        <ZoomImage src={Affinity} alt="" style={{'width': '350px', 'height': '200px'}}/>
        </Column>
       
    </Row>
    
     {/* </Slide> */}
       
        </VerticalTimelineElement>
        <VerticalTimelineElement id="ideation"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
      {/* <Slide right cascade> */}
    <Row small >
    <InfoBox>
          <Title>Ideation</Title> 
          <Tag>User interaction</Tag>
          <SmallInfo Resp>After gathering all the necessary information, the project's focus shifted to addressing the socializing aspect. Sometimes, solving a problem requires focusing on a specific part rather than tackling the entire issue. Developing a concept based on these requirements. Inspired by the international week, I initially considered a concept that involved tracking employees, but we realized it was not legally feasible and abandoned the idea. I created sketches and presented them to the team, teachers, and the client during a pitch session.
          </SmallInfo>
          <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/Pitch%20Idea%20Simac.docx?d=w15115621618d4547b075146282c42b85&csf=1&web=1&e=B5LBJ7" target="_blank"> <Button> Read more</Button> </a>
          <SmallInfo Resp>In the end, we consolidated the key features from each idea and developed a concept. The concept involved a screen on the wall at Simac and an accompanying app with a Personal Development Plan (PDP) functionality. To enhance my design skills, I decided to create wireframes, as I usually jump straight into high-fidelity prototypes. I learned about the different types of wireframes and wanted to explore their benefits. Moreover, with multiple design options within the team, wireframes helped us choose the best layout and present it clearly. However, during the pitch to our clients, they expressed a preference for a concept that fostered employee bonding rather than focusing solely on HR-related aspects like the PDP. </SmallInfo>
          <SmallInfo Resp>Taking a risk and starting the whole concept from scratch was scary since it was the end of the semester. The whole team went through a lot of different interactions until we got to the final one. A challenge-based app for new employees, fostering interaction and collaboration. It includes a world map highlighting cultural diversity within the company. The aim is to create an engaging and inclusive work environment.  This time NADSCY verified the idea after it was approved.  </SmallInfo>
        </InfoBox>
        <Column>
        <ZoomImage src={Empathy} alt="" style={{'width': '350px', 'height': '250px'}}/>
        <ZoomImage src={Affinity} alt="" style={{'width': '350px', 'height': '200px'}}/>
        </Column>
       
    </Row>
    
     {/* </Slide> */}
       
        </VerticalTimelineElement>
        <VerticalTimelineElement id="proto"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
    <Row small conclusion >
    <InfoBox>
          <Title>Prototyping</Title>
          <Tag>Investigative problem solving</Tag> 
          <SmallInfo Resp>In the project, my assigned responsibility was to create the Scanning and Congratulating component in high-fidelity. This component utilized image recognition to verify completed tasks. While I found a plugin for image recognition, I acknowledged that it may not be the most accurate option available. To ensure optimal performance, I went through multiple iterations, refining the component's functionality and accuracy.  </SmallInfo>
          <SmallInfo Resp> Upon completion of the project, I conducted extensive testing to evaluate both the design and the concept of the app. The results were highly positive, with the app achieving its goal of being simple and easy-to-navigate. Users who participated in the testing praised the user-friendly interface and rated the app 9 out of 10. This positive feedback indicates a high level of satisfaction with the app's usability and functionality, validating the effectiveness of the design decisions and the successful implementation of the concept.</SmallInfo>  
          <SmallInfo Resp> The semester coach is pleased with the project and praises the six ladies for their commendable work on a challenging task. While they propose a plausible idea, the absence of testing is a notable gap. The importance of testing and the complexity of delivering tangible products or prototypes in an organizational setting are highlighted. The group is recognized for their professionalism, effective tools, and organizational skills.</SmallInfo>       
          <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/Pitch%20Idea%20Simac.docx?d=w15115621618d4547b075146282c42b85&csf=1&web=1&e=B5LBJ7" target="_blank"> <Button> Read more</Button> </a>
        </InfoBox>
        <Column>
        <video   ref={videoRef} autoPlay controls  style={{'width': '350px', 'height': '250px'}}>
        <source src={BrainstormingOne} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <video   ref={videoRef} autoPlay  controls style={{'width': '350px', 'height': '250px'}}>
        <source src={Model} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video   ref={videoRef} autoPlay controls style={{'width': '350px', 'height': '350px'}}>
        <source src={BrainstormingTwo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </Column>
        
    </Row> 
   
     {/* </Slide> */}
       
        </VerticalTimelineElement>
        <VerticalTimelineElement id="conclusion"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        >
          <Row small conclusion >
            <InfoBox>
               <Title>Conclusion</Title> 
              <SmallInfo Resp>This project was a transformative opportunity for my professional growth. In the begining, but I was uncertain, I gained clarity on my goals and became highly motivated to pursue them. Stepping out of my comfort zone taught me the value of taking risks and fostering creativity. My design thinking has also evolved to be more simplistic and minimalistic. I am grateful to my team, teachers, and stakeholders for making this project a successful and invaluable experience.</SmallInfo>
        </InfoBox>
        </Row>
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>  
       
   )
}

export default Numeration_Simac
    