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

 
   