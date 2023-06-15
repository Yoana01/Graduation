import React, { createRef, useState, useEffect } from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { Column, Row, InfoBox, CircleBox, Tag} from "./styleComponents/container.Style"
import { Title, SubTitle,SmallInfo } from "./styleComponents/text.Style"
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
import BigPic from "./Images/Image6.png"
import DesignMethod from "./Images/Image7.png"
import Slide from 'react-reveal/Slide';

function Numeration_CaseStudy() {
  return (
    <div>
      <Scrollspy items={['generalInfo', 'understanding', 'exploring', 'materializing', 'conclusion']} activeNavClass="is-active" >
        <SubNavBar RespN >
          <FancyNav href="#generalInfo"  text="Genaral Information" ref={createRef()} ></FancyNav>
          <FancyNav href="#understanding"  text="Understanding" ref={createRef()} ></FancyNav>
          <FancyNav href="#exploring" text="Exploring" ref={createRef()}></FancyNav> 
          <FancyNav href="#materializing" text="Materializing" ref={createRef()}></FancyNav>
          <FancyNav href="#conclusion" text="Conclusion" ref={createRef()}></FancyNav>
       </SubNavBar>
      </Scrollspy>
      <br /> <br />
      <VerticalTimeline animate={ true } layout={ '1-column-left'} >
        <VerticalTimelineElement id="generalInfo"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}
        > 
        <Row small even>
          <img src={BigPic} alt="" className="PortfolioImg" />
            <Slide right cascade>
            <InfoBox small> 
                <Title>Portfolio</Title>
                <SubTitle>Company:</SubTitle>
                <SmallInfo>Fontys University of Applied Science</SmallInfo>
                <SubTitle>Duration:</SubTitle>
                <SmallInfo>4 weeks</SmallInfo>
                {/* <SubTitle>Learning Outcomes:</SubTitle> */}
                  {/* <Row tag>
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
                        - React JavaScript
                        - Styled-Components</SmallInfo>
            </InfoBox>
            </Slide>
        </Row>
        <Slide cascade>
          <Row small homeA even>
            <Column home>
            <Title>Summary</Title>
        <SmallInfo  small>
The assignment is to create a portfolio for the first four weeks, which is important for presenting myself and showcasing capabilities. The main question guiding the portfolio and the semester's goal is about the desired IT professional identity. The Agile methodology was employed for flexibility in the project, while the Design Thinking Method, particularly the CMD approach, allowed for iterations and adjustments as these methods align more with UX/UI practices.
         </SmallInfo>
      
            </Column>
            <ZoomImage src={DesignMethod} alt="" id="sumImg"/>
          </Row>
        
      </Slide>
      
       
        </VerticalTimelineElement>
        <VerticalTimelineElement id="understanding"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}> 
          <Row small >
          <InfoBox>
                <Title>Understanding</Title> 
                <Row tag>
                <Tag>User Interaction</Tag>
                <Tag>Investigative problem solving</Tag>
                <Tag>Future-oriented organisation</Tag>
                </Row>
              
                <SmallInfo Resp> I inspired myself by the design of other UX/UI designers as looking at their portfolios, I made 
                  <span style={{color:"#7c6aa6"}}> trend analysis </span>for 2023. I did this because I wanted to make sure that my design 
                  would not look old-fashion. Also, one designer needs to 
                  know what are the trends right now, but also not put all of them if they are not relevant to the case that he is doing.
                 I used colours that are trendy at the moment.</SmallInfo>
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
        </VerticalTimelineElement>
        <VerticalTimelineElement id="exploring"
         className="vertical-timeline-element--work"
         contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
         position={ 'right' }
         iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
         textClassName = {'1'}
         contentArrowStyle={ {border: "none" }}
        >
    <Row small  > 
    <InfoBox>
          <Title>Exploring</Title> 
          <Tag>User Interaction</Tag>
          <SmallInfo Resp>Since I was not sure how exactly my design will look as well as the limited time of the project, I started directly to implement  <span style={{color:"#7c6aa6"}}>high-fidelity prototypes</span>. I got through some until I got to the point where I believe it is closest to what I wanted to have.  In the begging I used gradient as a background, then I did it only purple, but I was feeling that it was crashing, so I kept the purple but I put a white background. Also, I changed a couple of times the typeface until I find the best one.</SmallInfo>
            <SmallInfo Resp> Another method that I used is the <span style={{color:"#7c6aa6"}}>UI Architecture</span> as again and 
            here I went through different iterations before going to the final version of my structure for the design. 
            I did and small brand style guide which to help with the components of my design.</SmallInfo>
            <a href="https://stichtingfontys-my.sharepoint.com/:u:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Portfolio/Portfolio.xd?csf=1&web=1&e=fqYXFq" target="_blank"> <Button> Prototype and Architecture</Button> </a>
        </InfoBox>
          <Column>
          <ZoomImage src={Versions} alt="" style={{'width': '350px', 'height': '250px'}}/>
          <ZoomImage src={UIArch} alt="" style={{'width': '300px', 'height': '450px'}}/>
          </Column>  
    </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement id="materializing"
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
          <Row small >
    <InfoBox>
          <Title>Materializing</Title> 
          <Row tag>
          <Tag>User Interaction</Tag>
          <Tag>Software design</Tag>
          <Tag>Personal leadership</Tag>
          </Row>
          <SmallInfo Resp>I did a <span style={{color:"#7c6aa6"}}>peer reviews</span> with couple of my fellow students which gave me a feedback for my design. Based on this method, 
            I put more white space and removed  some elements that made the design to look more simple and clear. </SmallInfo>
            <SmallInfo Resp>I did a <span style={{color:"#7c6aa6"}}>MosCoW analysis</span>. This was important for me because I wanted to set some goals that I can achieve and not achieve. 
              Since I have a lot of things that I want to have but the  time that I have is not that big, I was supposed to put some
              borders to make some expectations of what I want to have and do not have. </SmallInfo>
            <SmallInfo Resp> I wanted to use <span style={{color:"#7c6aa6"}}>React Bootstrap</span> because they have already made templates. However, when I was brainstorming,
              I realized that my design is specific and it would not work. That's why after some talks with people with software 
              backgrounds, they advised me to use <span style={{color:"#7c6aa6"}}>styled-components</span>. 
              This makes my work look cleaner and more professional and if someone wants to see my code it would be presented 
              in a structured way.
        </SmallInfo>
        <SmallInfo Resp> 
Based on a <span style={{color:"#7c6aa6"}}>360-degree feedback
</span> from my fellow students, I received positive feedback for my planning skills, structured approach, timely delivery, research documentation, and empathy in design. However, there are areas for improvement, such as creating more minimalistic plans, highlighting key research points, being open to change in group work, thinking beyond limitations in problem-solving, and not taking feedback personally. Overall, I have good qualities but need to be more flexible and open-minded.
        </SmallInfo>
        <a href="https://stichtingfontys-my.sharepoint.com/:w:/r/personal/455146_student_fontys_nl/Documents/Portfolio%20Semester%206/Portfolio/Documentation/360%20Feedback.docx?d=w531d685c0e434fd3b498a423fda062ea&csf=1&web=1&e=F0HFOK" target="_blank"> <Button>Feedback Document</Button> </a>
        </InfoBox>
        <Column>
          <ZoomImage src={Moscow} alt="" style={{'width': '350px', 'height': '250px'}}/>
          <ZoomImage src={C4model} alt="" style={{'width': '450px', 'height': '450px'}}/>
        </Column> 
          </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement id="conclusion"
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
          <SmallInfo Resp> After reflecting on my journey, I take pride in my accomplishments as a UI designer. My goal of incorporating critical thinking and engaging user interactions has been achieved. I recognize the significance of thorough research in validating concepts and designs. Furthermore, I have learned the importance of balancing my own expectations with the need to please everyone. This transformative process has provided invaluable lessons and a clear sense of direction moving forward.</SmallInfo>
        </InfoBox>
        
    </Row>
     {/* </Slide> */}
        </VerticalTimelineElement>
      </VerticalTimeline>
      
    </div>  
       
   )
}

export default Numeration_CaseStudy
