import React from 'react'
import { Box, Column, Row,FeedbackBox, InfoBox, FancyPic } from "./styleComponents/container.Style"
import { Title, SubTitle, SmallInfo, SpecialText } from "./styleComponents/text.Style"
import BigPic from "./Images/Image5.svg"
import Music from "./Images/music.jpg"
import Movies from "./Images/movies.jpg"
import Gym from "./Images/gym.jpeg"
import Cake from "./Images/cake.jpeg"
import Nature from "./Images/nature.jpeg"
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Fade from 'react-reveal/Fade';
import Zoom from 'react-reveal/Zoom';
import Slide from 'react-reveal/Slide';
import Carosel from './Carosel'
import NumerationExperiences from "./Numeration_Experiences"
import ScrollToTopButton from "./ScrollToTop"

function About() {
  
  return (
    <Column>
    <Fade >
    <Row small>
      <Slide left cascade>
      <Box smallBox> <SubTitle> Hey there! </SubTitle> 
      <SmallInfo Resp>
      It's great to see you! My name is Yoana Churkina and I'm a 21-year-old student originally from Sofia, 
       Bulgaria – the capital city of the country. For the past three years, I've been living in Eindhoven, 
       the Netherlands, where I'm pursuing my studies. I'm currently in my third year at Fontys University of
       Applied Science in the Media Design Stream, and I absolutely love it! My goal for the future is to 
       become a web developer/designer, with a special focus on UX/UI – it is an exciting and dynamic
        field with plenty of opportunities to create innovative and user-friendly designs.
      </SmallInfo>
      </Box>
      </Slide>
      <Zoom>
        <FancyPic>
        <Slide right cascade>
        <SpecialText>ABOUT <br /> ME</SpecialText>
        </Slide>
         <img src={BigPic} alt="" style={{'width': '300px', 'height': '550px'}}/>
        </FancyPic> 
      </Zoom>  
   </Row>
    </Fade>
  <Column aboutCon>
    <Title RespT>Get In Touch</Title>
    <Fade left cascade>
      <SubTitle>Contact</SubTitle>  
      <Row about><PhoneIcon></PhoneIcon> <SmallInfo Resp>+359 897 397 297</SmallInfo></Row>
      <Row about><EmailIcon></EmailIcon> <SmallInfo Resp>yonichrurkina@gmail.com</SmallInfo></Row>
      <Row about><LinkedInIcon></LinkedInIcon> <SmallInfo Resp>https://www.linkedin.com/in/yoana-churkina-9408a1234/</SmallInfo></Row>
    </Fade>
  </Column>
  <NumerationExperiences></NumerationExperiences>
  <Title>Feedback</Title>
  <Zoom cascade>
      <Carosel/>
  </Zoom>  
    <Column>
    <Title RespT>5 things I love</Title>
      <Row small homeA>
           <img src={Music} alt="" style={{ 'height': '450px', mixBlendMode:'luminosity'}}/>
        <Slide right cascade>
        <InfoBox>
          <Title>Music</Title> 
          <SmallInfo Resp>Since I was little I remember myself how I am dancing and singing on some music. The music is my heeling
            peel because she is always there to get out me from my darkest periods.
          </SmallInfo>
        </InfoBox>
        </Slide>
      </Row>
      <Row small homeA>
      <Slide left cascade>
        <InfoBox>
          <Title>Movies & TV shows</Title> 
          <SmallInfo Resp>In my free days and especially when it is cold outside I love watching movies or TV series.Moreover, I even
            more interested in the actors lifestyle and more how they shoot it. Even I created an Instagram page where I did reviews
            on movies as well as sharing new and favorite songs.
          </SmallInfo>
        </InfoBox>
        </Slide>
         <img src={Movies} alt="" style={{'width': '350px', 'height': '350px', mixBlendMode:'luminosity'}}/>
      </Row>
      <Row small homeA>
           <img src={Gym} alt="" style={{'width': '350px', 'height': '450px',  mixBlendMode:'luminosity'}}/>
        <Slide right cascade>
        <InfoBox>
          <Title>Gym</Title> 
          <SmallInfo Resp>Since I came in the Netherlands, I started going to the gym. This helps me to
            stay fit and to being motivated and remove the negative energy.
          </SmallInfo>
        </InfoBox>
        </Slide>
      </Row>
      <Row small homeA>
        <Slide left cascade>
        <InfoBox>
          <Title>Cooking sweet things</Title> 
          <SmallInfo Resp>The first thing that I have learned to cook was a cake. From that day on I love cooking cakes, muffinins to my
            beloved ones.
          </SmallInfo>
        </InfoBox>
        </Slide>
        <img src={Cake} alt="" style={{'width': '180px', 'height': '300px', mixBlendMode:'luminosity'}}/>    
      </Row>
      <Row small homeA>
          <img src={Nature} alt=""className="cardImg" style={{mixBlendMode:'luminosity'}}/>
       <Slide right>
       <InfoBox>
          <Title>Nature</Title> 
          <SmallInfo Resp>As every person I need some space where I need to recharge myself and be with my toughts. 
            The place that makes me feel like this is the nature. As I like being in my home country, Bulgaria since
            we have a lot of mountains, but also I open and for place in a mysterious country.
          </SmallInfo>
        </InfoBox>
       </Slide>
      </Row>
     </Column> 
     <ScrollToTopButton></ScrollToTopButton>
    </Column>
  )
}

export default About