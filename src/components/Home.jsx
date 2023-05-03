import React from 'react'
import { Link } from "react-router-dom";
import {Column, Row, QuoteBox, CardBox } from "./styleComponents/container.Style"
import BigPic from "./Image5.svg"
import Pic from "./Image6.png"
import { Title, SubTitle, SmallInfo} from "./styleComponents/text.Style"
import { Button} from "./styleComponents/button.Style"
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Project02 from "./Logo.png"

function Home() {
  return (
    <div>
    <Row small homeR >
    <Fade top>
    <img src={BigPic} alt="" style={{'width': '300px', 'height': '550px', mixBlendMode:'luminosity'}}/>
   <Slide right>
    <QuoteBox small>My signature touch should be evident in every website or app I create, designing and developing
        experiences that simplify people's lives.</QuoteBox>
       </Slide> 
       </Fade>
    </Row>
    <Column home>
      <br />
    <Title RespT>Projects</Title>
    <Zoom cascade>
    <Column>
    <Row small>
    <CardBox small>
    <img src={Pic} alt=""  className="cardImg"/>
    <SubTitle>Portfolio</SubTitle>
   <SmallInfo CardText> 
   If you want to understand more about how I have created this portfolio, you can click the button.
   </SmallInfo>
   <Link to={'/caseStudyPortfolio'}> <Button>Read More</Button></Link>
    </CardBox>
    <CardBox small>
    <img src={Project02} alt="" className="cardImg" />
    <SubTitle>Onboarding Simac</SubTitle>
    <SmallInfo CardText>
    If you want to understand more about what is the solution for the onboarding process at Simac, you can click the button.
    </SmallInfo>
    <Link to={'/caseStudySimac'}><Button>Read More</Button></Link>
    </CardBox>
    </Row>
    <Row small>
     <CardBox small>
    <img src={Pic} alt="" className="cardImg"/>
    <SubTitle>Portfolio</SubTitle>
    <SmallInfo CardText>
    If you want to understand more about how I have created this portfolio, you can click the button.
    </SmallInfo>
    <Button>Read More</Button>
    </CardBox>
    <CardBox small>
    <img src={Pic} alt="" className="cardImg"/>
    <SubTitle>Portfolio</SubTitle>
    <SmallInfo CardText>
       If you want to understand more about how I have created this portfolio, you can click the button.
    </SmallInfo>
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