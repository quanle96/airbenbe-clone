import React, { useState, useEffect } from 'react';

import Navbar from './Navbar';
import Headerbar from './Headerbar';

import './Header.css';

const Header: React.FC = () => {
  const [isOnTop, setIsOnTop] = useState(true);

  useEffect(() => {
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  const onScroll = () => {
    let currentScrollPos = window.pageYOffset;
    let maxScroll = 75;
    if (currentScrollPos >= 0 && currentScrollPos < maxScroll) {
      setIsOnTop(true);
    } else {
      setIsOnTop(false);
    }
  };

  return <div>{isOnTop ? <Headerbar isTransparent={true} /> : <Navbar />}</div>;
};
export default Header;
