
import { Link } from "react-router-dom";
import React from 'react'
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import { Column, Row, InfoBox} from "./styleComponents/container.Style"
import { Title, SubTitle, SmallInfo } from "./styleComponents/text.Style"
import ZoomImage from './ZoomImages';
import PullAndBear from "./Images/PullAndBear.png"
import Bosch from "./Images/Bosch.png"
import Promoter from "./Images/Promoter.jpg"
import ProxyVideo from "./Images/Proxy.mp4"



function Numeration_Experiences() {

  return (
    <div>
      <VerticalTimeline animate={ true } layout={ '1-column-left'} >
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
          <Row small>
            <InfoBox>
                <Title RespT>Promoter</Title> 
                <SubTitle>2019-2020 </SubTitle>
                <SmallInfo>Working as a promoter for different brands</SmallInfo>
              </InfoBox>
                <ZoomImage src={Promoter} alt="" style={{'width': '250px', 'height': '325px'}}/>
          </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
          <Row small>
            <InfoBox>
                <Title RespT>PR AT FONTYS UNIVERSITY</Title> 
                <SubTitle>2021 - PRESENT</SubTitle>
                <SmallInfo> - Helping in the intro week, where I was supposed to show around the city and Help the new students to set up <br/>       
                  - Organizing Open days <br />
                  - Helping with Social Media</SmallInfo>
              </InfoBox>
              <div id="VideoDiv">
              <iframe width="350" height="250" src="https://www.youtube.com/embed/8RitzmtguBk?start=1" 
              title="YouTube video player" 
              frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; 
              picture-in-picture; web-share" allowfullscreen></iframe>
         </div>
          </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
    <Row small>
    <InfoBox>
          <Title RespT> PULL AND BEAR</Title> 
          <SubTitle>JUN 2022 - AUG 2022</SubTitle>
          <SmallInfo>  Working as a sale assistant</SmallInfo>
        </InfoBox>
          <ZoomImage src={PullAndBear} alt="" style={{'width': '350px', 'height': '250px'}}/>
    </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
    <Row small>
    <InfoBox>
          <Title RespT>BOSCH SECURITY AND SAFETY SYSTEMS</Title> 
          <SubTitle>AUG 2022 - JAN 2023</SubTitle> 
          <SmallInfo>Intern as a UX/UI Designer and Front-End developer for Conference and Discussion Department for Video Switching Feature</SmallInfo> 
        </InfoBox>
        <ZoomImage src={Bosch} alt="" style={{'width': '400px', 'height': '450px'}}/>
    </Row>
        </VerticalTimelineElement>
        <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{ background: 'none', color: '#151322', border:'none', WebkitBoxShadow: "none" }}
        position={ 'right' }
        iconStyle={{ background: '#bdb2cf', color: '#DED6D1', WebkitBoxShadow: "none" }}
        textClassName = {'1'}
        contentArrowStyle={ {border: "none" }}>
    <Row small >
    <InfoBox><Title RespT>PROXY STUDENT ASSOSIATION</Title> 
     <SubTitle>OCT 2022 - PRESENT</SubTitle>    
    <SmallInfo>
          - Head of Internal department <br></br>
          - Vice Presedient of the organisation
      </SmallInfo>  
        </InfoBox>
        <div id="VideoDiv">
          <iframe
                width="350" 
                height="250"
                id="videoFrame"
                src={ProxyVideo}
                allow="autoplay; encrypted-media"
                allowFullScreen
                title="video"
              />
         </div>
    </Row>
   
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>  
       
   )
}

export default Numeration_Experiences
