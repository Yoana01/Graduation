import { forwardRef } from 'react';
import styles from '../App.css';

const FancyNav = forwardRef(({ href,text, onClick }, ref) => (
  <a ref={ref} href={href} onClick={onClick} className='fancyNav'>
      {text}
  </a>
));

export default FancyNav;