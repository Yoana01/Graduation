import React from 'react'
import { Link } from "react-router-dom";
import {Column, Row, QuoteBox, CardBox } from "./styleComponents/container.Style"
import BigPic from "./Images/Image5.svg"
import Pic from "./Images/Image6.png"
import { Title, SubTitle, SmallInfo} from "./styleComponents/text.Style"
import { Button} from "./styleComponents/button.Style"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Project02 from "./Images/Logo.png"
import Project03 from "./Images/Eindhoven.jpg"

function Home() {
  return (
    <div>
    <Row small homeR homeA even >
    <Fade top>
    <img src={BigPic} alt="" style={{'width': '300px', 'height': '550px', mixBlendMode:'luminosity'}}/>
   <Slide right>
    <QuoteBox small>My signature touch should be evident in every website or app I create, designing and developing
        experiences that <span style={{color:"#7c6aa6"}}>simplify people's lives</span>.</QuoteBox>
       </Slide> 
       </Fade>
    </Row>
    <Column>
    <Title CTitle RespT>Projects</Title>
    <Row small>
    <div className='card'>
    <img src={Pic} alt=""  className="cardImg"/>
    <SubTitle>Portfolio</SubTitle>
   <SmallInfo CardText> 
   If you want to understand more about how I have created this portfolio, you can click the button.
   </SmallInfo>
   <Link to={'/caseStudyPortfolio'}> <Button>Read More</Button></Link>
    </div>
    <div className='card'>
    <img src={Project02} alt="" className="cardImg" />
    <SubTitle>Onboarding Simac</SubTitle>
    <SmallInfo CardText>
    If you want to understand more about what is the solution for the onboarding process at Simac, you can click the button.
    </SmallInfo>
    <Link to={'/caseStudySimac'}><Button>Read More</Button></Link>
    </div>
    <div className='card'>
    <img src={Project03} alt="" className="cardImg" />
    <SubTitle>Dutch Design Charrette</SubTitle>
    <SmallInfo CardText>
    This was one incredible week of working where we worked with people from different
          university and create project for The Cruyff Foundation, you can click the button.
    </SmallInfo>
    <Link to={'/caseStudySimac'}><Button>Read More</Button></Link>
    </div>
    </Row>
    </Column>
   
    </div>
  )
}

export default Home


{/* <Fade right cascade>
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
</Fade> */}