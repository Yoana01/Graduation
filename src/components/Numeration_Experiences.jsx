
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
import PullAndBear from "./pullandbear.jpg"
import ProxyVideo from "./ProxyVideo.mp4"



function Numeration_Experiences() {

  return (
    <div>
      <VerticalTimeline animate={ true } layout={ '1-column-left'} >
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
                <Title>Promoter</Title> 
                2019-2020
                Working as a promoter for different brand
              </InfoBox>
              <Zoom>
                <Column>
                <img src={Versions} alt="" style={{'width': '500px', 'height': '250px'}}/>
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
        contentArrowStyle={ {border: "none" }}> 
      <Slide right cascade>
    <Row small id="understanding">
    <InfoBox>
    <Title>PR AT FONTYS UNIVERSITY</Title> 
        2021 - PRESENT
        - Helping in the intro week, where I was supposed to show around the city and Help the new students to set up
        - Organizing Open days
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
          <Title> PULL AND BEAR</Title> 
          JUN 2022 - AUG 2022
          Working as a sale assistant
        </InfoBox>
      <Zoom> 
          <img src={PullAndBear} alt="" style={{'width': '250px', 'height': '150px'}}/>
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
          <Title>BOSCH SECURITY AND SAFETY SYSTEMS</Title> 
          AUG 2022 - JAN 2023
          Intern as a UX/UI Designer and Front-End developer
        </InfoBox>
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
    <InfoBox><Title>PROXY STUDENT ASSOSIATION</Title> 
          OCT 2022 - PRESENT
          - Head of Internal department
          - Vice Presedient of the organisation
        </InfoBox>
       
    </Row>
    <div id="VideoDiv">
          <iframe
                id="videoFrame"
                src={ProxyVideo}
                allow="autoplay muted; encrypted-media"
                allowFullScreen
                title="video"
              />
         </div>
     </Slide>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>  
       
   )
}

export default Numeration_Experiences
