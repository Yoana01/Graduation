import React, { useState, useEffect } from 'react';
import ArrowCircleUpIcon from '@mui/icons-material/ArrowCircleUp';
import { Button } from "./styleComponents/button.Style"

const ScrollToTopButton = () => {
    //window object that will show or hide the button based on the user's scroll position.
  const [isVisible, setIsVisible] = useState(false); // add and remove an event listener to the window object. 

  const handleOnClick = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
// whenever the user scrolls the page. If the user has scrolled more than 300 pixels from the top of the page, the button is displaye
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <Button onClick={handleOnClick} style={{ display: isVisible ? 'inline' : 'none'}}>
    <ArrowCircleUpIcon style={{float: "right", fontSize: "50px"}}></ArrowCircleUpIcon>
    </Button>
  );
};

export default ScrollToTopButton;