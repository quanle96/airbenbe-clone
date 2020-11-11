import React from 'react';

import Banner from './Banner';
import Experience from './Experience';
import Special from './Special';
import Weather from './Weather';

import './Body.css';

const Body: React.FC = () => {
  return (
    <div>
      <Banner />
      <Weather />
      <Experience />
      <Special />
    </div>
  );
};
export default Body;
