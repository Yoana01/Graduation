import { createRef } from 'react';
import React, { useState, useEffect, useRef } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Column, Row, InfoBox} from "./styleComponents/container.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
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
import { FaxRounded } from '@mui/icons-material';

// import Zoom from 'react-reveal/Zoom';
// import Slide from 'react-reveal/Slide';

function Numeration_Simac() {
  const [isSticky, setSticky] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    videoRef.current.play();
  }, []);

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
      <Scrollspy items={['planning','exploration','definition', 'ideation', 'materializing', 'conclusion']} currentClassName="active">
      <SubNavBar isSticky={isSticky}>
        <FancyNav href="#planning"  text="Planning" ref={createRef()} ></FancyNav>
        <FancyNav href="#exploration" text="Exploring" ref={createRef()}></FancyNav> 
        <FancyNav href="#definition" text="Defining" ref={createRef()}></FancyNav>
        <FancyNav href="#ideation" text="Ideation" ref={createRef()}></FancyNav>
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
    <Row small conclusion id="planning">
    <InfoBox>
          <Title>Set up and Planning</Title> 
          <SmallInfo Resp> I have a passion for organizing and leading people in planning and executing successful events. After conducting a<span style={{color:"#F1C3AC"}}> secondary reserch</span>, I found that Scrum-ban is the ideal project management methodology for our needs. I completed Scrum courses to enhance my skills as a <span style={{color:"#F1C3AC"}}>Scrum Master</span>. During the second sprint, I served as the Scrum Master and successfully achieved our sprint goal by being realistic with task assignments and setting small targets and deadlines, but having and good communication. </SmallInfo>
            <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/%D0%9Cethodology.docx?d=wf6e641bb63a44e7ca7823d7bb316029c&csf=1&web=1&e=0ervoT" target="_blank"> <Button> See more</Button> </a>
        </InfoBox>
       
    </Row> 
    <ZoomImage src={ProjectManagement} alt="" style={{'width': '800px', 'height': '500px'}}/>
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
          <SmallInfo Resp> Based on my <span style={{color:"#F1C3AC"}}>literature review</span> of Simac's documents, I found that their onboarding process consists of four stages. However, many employees feel overwhelmed on their first day due to the number of tasks they need to complete. It was also noted that some employees do not use SimacWeb. On the positive side, Simac personalizes the onboarding process and assigns a "buddy" to new hires during their initial days. These insights provide valuable information for our project.
         </SmallInfo>
         <a href="https://stichtingfontys-my.sharepoint.com/:b:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/Simac%20-Lit%20Study.pdf?csf=1&web=1&e=8YCl43" target="_blank"> <Button> See more</Button> </a> <br />

         <SmallInfo Resp> As there are various steps involved in the onboarding process over several months, I created a <span style={{color:"#F1C3AC"}}>customer journey map </span>to visualize it. The map includes a general overview, as well as two more specific maps detailing the first day and first week at work. If needed we will made changes later in the map.. </SmallInfo>
            <a href="https://miro.com/app/board/uXjVMXm3hSE=/?share_link_id=77056691624" target="_blank"> <Button> See more</Button> </a>
            <br/><br/>
            <SmallInfo Resp> I participated in <span style={{color:"#F1C3AC"}}> expert interviews </span> to gain insights into how Simac and other companies conduct their onboarding.
                 An interesting fact that was confirmed is that employees are not aware of the full capabilities of SimacWeb, 
                 and there are too many Word documents involved in the Simac onboarding process. 
                 Another company we talked to mentioned that they switched their company language from Dutch to English. They emphasized the 
                 importance of everyone feeling like an expert in their role and taking initiative. </SmallInfo>
    </InfoBox>
    <Column>
    <ZoomImage src={CustomerJourneyMap} alt="" style={{'width': '550px', 'height': '350px'}}/>
        <ZoomImage src={Expert} alt="" style={{'width': '550px', 'height': '350px'}}/>
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
    <Row small id="definition">
    <InfoBox>
          <Title>Definition</Title> 
          <SmallInfo Resp> After the research that we made we decided to go to the real user and understand how their onboarding process was. Our main target audience is people who are non-Dutch but it does not mean that our solution is excluding the Dutch people. In total we conducted 6 
          <span style={{color:"#F1C3AC"}}>interviews</span> as 3 external and 3 from Simac. I was supposed to conduct one interview and to be a chairperson of another way. In this way I was doing different roles in one observing the users and what he says and the other one is asking the questions that we prepared. After that I analyzed it.
          </SmallInfo>
          <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/Interview%20Analysis.docx?d=w591cef0b87aa44ea9c161650ec7b8851&csf=1&web=1&e=di7Rkb" target="_blank"> <Button> See more</Button> </a> <br />
          <SmallInfo Resp>Based on the interviews, my task was to create an <span style={{color:"#F1C3AC"}}>empathy map</span> . After that we realize that <span style={{color:"#F1C3AC"}}>affinity map</span> will be more efficient. An example, for something that was a key point wasthat I thought that there is a huge language barrier, but after the interviews NADSCY find out different. That gave us a starting point for the brainstorming sessions. </SmallInfo>
        </InfoBox>
        <Column>
        <ZoomImage src={Empathy} alt="" style={{'width': '450px', 'height': '350px'}}/>
        <ZoomImage src={Affinity} alt="" style={{'width': '550px', 'height': '400px'}}/>
        </Column>
       
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
    <Row small conclusion id="ideation">
    <InfoBox>
          <Title>Ideation and Solution</Title> 
          <SmallInfo Resp>I was participating in <span style={{color:"#F1C3AC"}}>3 brainstorming sessions</span> as they happened in different phases of the project. The first one was at the early stage of the project with the purpose to dive into the context to create the research question. As a method <span style={{color:"#F1C3AC"}}>Design Sprint</span>. The results were that the main problems were cultural differences, mental support, socializing, cultural and language differences.  </SmallInfo>
          <SmallInfo Resp>The second brainstorming session me the rest of the NADSCY used the <span style={{color:"#F1C3AC"}}>Dark-Side method</span> where we need to see the problem for the negative side of the problem. At the end there were different groups of same ideas that we combined and at the end the group voted on the one that we feel that we are the most important for solving the problem.</SmallInfo>  
          <SmallInfo Resp> The third one was after we conducted the interviews, we decided what we are going to develop as topic – socializing and from there each of the members were supposed to create concept. If you want to understand my concept, click on the button.</SmallInfo>       
          <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Group%20Project/Pitch%20Idea%20Simac.docx?d=w15115621618d4547b075146282c42b85&csf=1&web=1&e=B5LBJ7" target="_blank"> <Button> See more</Button> </a>
        </InfoBox>
        <Column>
        <video   ref={videoRef} autoPlay controls  style={{'width': '330px', 'height': '400px'}}>
        <source src={BrainstormingOne} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        <video   ref={videoRef} autoPlay  controls style={{'width': '550px', 'height': '400px'}}>
        <source src={Model} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <video   ref={videoRef} autoPlay controls style={{'width': '330px', 'height': '400px'}}>
        <source src={BrainstormingTwo} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
        </Column>
        
    </Row> 
   
     {/* </Slide> */}
       
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>  
       
   )
}

export default Numeration_Simac
    