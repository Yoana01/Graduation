import React from 'react'
import { Link } from "react-router-dom";
import {Column, Row, QuoteBox, CardBox } from "./styleComponents/container.Style"
import BigPic from "./Image5.svg"
import Pic from "./Image6.png"
import { Title} from "./styleComponents/text.Style"
import { Button} from "./styleComponents/button.Style"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';

function Home() {
  return (
    <div>
    <Row small homeR >
    <Fade top>
    <img src={BigPic} alt="" style={{'width': '300px', 'height': '550px', mixBlendMode:'luminosity'}}/>
   <Slide right>
    <QuoteBox>My signature touch should be evident in every website or app I create, designing and developing
        experiences that simplify people's lives.</QuoteBox>
       </Slide> 
       </Fade>
    </Row>

    {/* <Title>About Me</Title> */}
    <Fade right cascade>
      <Column home>
      <Title> About Me </Title>
    <Row small homeR1>
      <Slide left>
      <QuoteBox>Hello, there! <br />
        Nice seeing you here! I am Yoana and I am a 21-year-old student originally from Sofia, Bulgaria. I have been living in Eindhoven, the Netherlands for the past three years, where I am currently studying Media Design at Fontys University of Applied Science. My goal is to become a web developer/designer with a focus on UX/UI, which I find 
        an exciting and dynamic field with many opportunities for creating innovative and user-friendly designs. 
        <Link to={'/about'}><Button>Read More</Button></Link>
    </QuoteBox>
      </Slide>
    <Zoom> 
    <img src={BigPic} alt="" style={{'width': '300px', mixBlendMode:'luminosity'}}/>
    </Zoom>
    </Row>
      </Column>
    <br /> <br /> <br />
    </Fade>
    <Column home>
    <Title>Projects</Title>
    <Zoom cascade>
    <Column>
    <Row small>
    <CardBox small>
    <img src={Pic} alt="" style={{'width': '400px', 'height': '250px', "borderRadius": "16px"}}/>
    <Title>Portfolio</Title>
   If you want to understand more about how I have created this portfolio, you can click the button.
   <Link to={'/caseStudyPortfolio'}> <Button>Read More</Button></Link>
    </CardBox>
    <CardBox small>
    <img src={Pic} alt="" style={{'width': '400px', 'height': '250px', "borderRadius": "16px"}}/>
    <Title>Portfolio</Title>
    If you want to understand more about how I have created this portfolio, you can click the button.
    <Button>Read More</Button>
    </CardBox>
    </Row>
    <Row small>
     <CardBox small>
    <img src={Pic} alt="" style={{'width': '400px', 'height': '250px', "borderRadius": "16px"}}/>
    <Title>Portfolio</Title>
    If you want to understand more about how I have created this portfolio, you can click the button.
    <Button>Read More</Button>
    </CardBox>
    <CardBox small>
    <img src={Pic} alt="" style={{'width': '400px', 'height': '250px', "borderRadius": "16px"}}/>
    <Title>Portfolio</Title>
    If you want to understand more about how I have created this portfolio, you can click the button.
    <Button>Read More</Button>
    </CardBox>
    </Row>
    </Column>
    </Zoom>
    </Column>
    
   
    </div>
  )
}

export default Home