import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { FeedbackBox } from "./styleComponents/container.Style"

function Carosel() {
  return (
    <div> <Carousel showStatus={false} emulateTouch={true}
     centerMode={true} showArrows={false} dynamicHeight={false}
     width={'900px'} autoPlay={true} infiniteLoop={true} >
    
    <FeedbackBox>Great working with her. She is a great UX/UI designer and taught me a lot about the user experience. She also was really eager to learn more about React and coding in general and she did a wonderful 
      job with the implementation part of the project. I would really want to work with her again in a project!
      </FeedbackBox>
  
    <FeedbackBox>What I like? <br />
    I think she is very good media designer and frontend developer, and she knows a lot there which helps in
    delivering very quality products. I like that she tries every time to learn new things and improve herself. She is very helpful when someone needs an assistance. She is also very organized and point which helps her having good reputation.
    </FeedbackBox>
       
  
    <FeedbackBox>Amazing working with her. I dare to say that if I was not in a group with her, I would have done worse. Thankful for all the times she wanted me to work harder. She was never late nor to a meeting, nor with handing in or sending something needed. We combined our skills – her design and my software to create nice projects and it work out great. The only improvement I would work in in her place would be to be 
    calmer and more composed – she’s doing a great job and I see no reason for her to worry. If I could, I would with her on every project.</FeedbackBox>
    
    
</Carousel>
</div>
  )
}

export default Carosel

