import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "./styleComponents/button.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
import { Column, Row, InfoBox  } from "./styleComponents/container.Style"
import Sample from "./dummyImg.jpg"
import BigPic from "./Image6.png"
import Project01 from "./Image8.png"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Projects() {
  return (
    <Column>
    <Fade right cascade>
      <Row small>
        <Zoom cascade>
        <img src={BigPic} alt="" style={{'width': '400px', 'height': '250px'}}/>
        </Zoom>
        <InfoBox small>
          <Title>Portfolio</Title> 
          <SmallInfo>If you want to understand more about how I have created this portfolio, you can click the button.</SmallInfo>
          <Link to={'/caseStudyPortfolio'}> <Button>Read More</Button></Link>
        </InfoBox>       
      </Row>
      </Fade>
      <Fade left cascade>
      <Row small>
        <InfoBox small>
          <Title>Simac Project</Title> 
          <SmallInfo>The aim of this project was to create a PWA for 4 weeks as we were focusing on the meaningful, gamified and to be user-friendly.</SmallInfo>
          <Button>Read More</Button>
        </InfoBox>
        <Zoom cascade>
        <img src={Project01} alt="" style={{'width': '500px', 'height': '250px'}}/>
        </Zoom>
      </Row>
      </Fade>
      <Fade right cascade>
      <Zoom cascade>
        <img src={Sample} alt="" style={{'width': '500px', 'height': '250px'}}/>
        </Zoom>
        <InfoBox small>
          <Title>Challenger Beyond the sport</Title> 
          <SmallInfo sumText>The aim of this project was to create a PWA for 4 weeks as we were focusing on the meaningful, gamified and to be user-friendly.</SmallInfo>
          <Button>Read More</Button>
        </InfoBox>
      </Fade>
    </Column>
  )
}

export default Projects