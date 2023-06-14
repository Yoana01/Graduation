import React from 'react'
import {Row} from "./styleComponents/container.Style"
import Numeration_CaseStudy from './Numeration_CaseStudy'
import 'react-vertical-timeline-component/style.min.css';
import ScrollToTopButton from "./ScrollToTop"


function CaseStudy_Portfolio() {
  return (
    <div>
     <Numeration_CaseStudy/>
      <Row>
          <div></div>
          <div></div>
          <div></div>
          <ScrollToTopButton></ScrollToTopButton>
      </Row>
    </div>
  )
}

export default CaseStudy_Portfolio

  {/* </VerticalTimeline> */}
    
      
      
      {/* <Row>
        <InfoBox>
          <Title>Exploring</Title> 
          <SmallInfo>The people who took part in our testing said that their overall impression of the app is that it is a sports application for training, where you can motivate yourself and connect with friends and compete with each other, which is our idea, so we were satisfied with the answers that we received. All of the participants feel confident in using the app. People like the idea of creating content because is something different from the other apps for sports as well as the discount part. The thing that we have to change is the navbar to be static and to include more free things. They would share with their friends especially because they can compete with each other. </SmallInfo>
          <Button>Read More</Button>
        </InfoBox>
        <img src={Sample} alt="" style={{'width': '500px', 'height': '250px'}}/>
      </Row>
      <Row>
        <InfoBox>
          <Title>Materializing</Title> 
          <SmallInfo>The people who took part in our testing said that their overall impression of the app is that it is a sports application for training, where you can motivate yourself and connect with friends and compete with each other, which is our idea, so we were satisfied with the answers that we received. All of the participants feel confident in using the app. People like the idea of creating content because is something different from the other apps for sports as well as the discount part. The thing that we have to change is the navbar to be static and to include more free things. They would share with their friends especially because they can compete with each other. </SmallInfo>
          <Button>Read More</Button>
        </InfoBox>
        <img src={Sample} alt="" style={{'width': '500px', 'height': '250px'}}/>
      </Row>
      <Title>Conclusion</Title> 
          <SmallInfo>The people who took part in our testing said that their overall impression of the app is that it is a sports application for training, where you can motivate yourself and connect with friends and compete with each other, which is our idea, so we were satisfied with the answers that we received. All of the participants feel confident in using the app. People like the idea of creating content because is something different from the other apps for sports as well as the discount part. The thing that we have to change is the navbar to be static and to include more free things. They would share with their friends especially because they can compete with each other. </SmallInfo> */}
   