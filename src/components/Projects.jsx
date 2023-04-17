import React from 'react'
import { Link } from "react-router-dom";
import { Button } from "./styleComponents/button.Style"
import { Title, SmallInfo } from "./styleComponents/text.Style"
import { Column, Row, InfoBox  } from "./styleComponents/container.Style"
import Project01 from "./Image6.png"
import Project02 from "./Logo.jpg"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';

function Projects() {
  return (
    <Column>
     <Fade left cascade>
      <Row small>
        <Zoom cascade>
        <img src={Project02} alt="" style={{'width': '300px', 'height': '300px'}}/>
        </Zoom>
        <InfoBox small>
          <Title>Onboarding Process Simac</Title> 
          <SmallInfo>If you want to understand more about what is the solution for the onboarding process at Simac, you can click the button.</SmallInfo>
          <Link to={'/caseStudySimac'}> <Button>Read More</Button></Link>
        </InfoBox>       
      </Row>
      </Fade>
    <Fade right cascade>
      <Row small>
      <InfoBox small>
          <Title>Portfolio</Title> 
          <SmallInfo>If you want to understand more about how I have created this portfolio, you can click the button.</SmallInfo>
          <Link to={'/caseStudyPortfolio'}> <Button>Read More</Button></Link>
        </InfoBox>  
        <Zoom cascade>
        <img src={Project01} alt="" style={{'width': '400px', 'height': '250px'}}/>
        </Zoom>
           
      </Row>
    </Fade>
     
    </Column>
  )
}

export default Projects