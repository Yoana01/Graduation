import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "./styleComponents/button.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
import { Column, Row, InfoBox  } from "./styleComponents/container.Style"
import Project01 from "./Images/Image6.png"
import Project02 from "./Images/Logo.png"
import Project03 from "./Images/Eindhoven.jpg"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Projects() {
  return (
    <Column>
     <Fade left cascade>
      <Row small>
        <img src={Project02} alt="" className="cardImg"/>
        <InfoBox small>
          <Title>Onboarding Simac</Title> 
          <SmallInfo Resp>If you want to understand more about what is the solution for the onboarding process at Simac, you can click the button.</SmallInfo>
          <Link to={'/caseStudySimac'}> <Button>Read More</Button></Link>
        </InfoBox>       
      </Row>
      </Fade>
      <Fade left cascade>
      <Row small>
      <InfoBox small>
          <Title>Dutch Design Charrette</Title> 
          <SmallInfo Resp>This was one incredible week of working where we worked with people from different
          university and create project for The Cruyff Foundation, you can click the button.</SmallInfo>
          <Link to={'/caseStudyInterWeek'}> <Button>Read More</Button></Link>
        </InfoBox>    
        <img src={Project03} alt="" className="cardImg"/>
      </Row>
      </Fade>
    <Fade right cascade>
      <Row small>
        <img src={Project01} alt="" className="cardImg" />
        <InfoBox small>
          <Title>Portfolio</Title> 
          <SmallInfo Resp>If you want to understand more about how I have created this portfolio, you can click the button.</SmallInfo>
          <Link to={'/caseStudyPortfolio'}> <Button>Read More</Button></Link>
        </InfoBox>  
      </Row>
    </Fade>
     
    </Column>
  )
}

export default Projects