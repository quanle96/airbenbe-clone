import React from 'react';
import { IProps } from '../../../../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

export const Icon: React.FC<IProps> = (props) => {
  const iconUrl = `url('http://openweathermap.org/img/wn/${props.code}@4x.png'`;
  return <div className='icon' style={{ backgroundImage: iconUrl }} />;
};

export const Temp: React.FC<IProps> = ({ children }) => {
  return <div className='temp'>{children}°C</div>;
};

export const Card: React.FC<IProps> = ({ children }) => {
  return <div className='wtCard'>{children}</div>;
};

export const Title: React.FC<IProps> = ({ children }) => {
  return <div className='cardTitle'>{children}</div>;
};

export const RefreshBtn: React.FC<IProps> = ({ refreshHandle }) => {
  return (
    <button className='refresh-btn' onClick={refreshHandle}>
      <FontAwesomeIcon icon={faSync} />
    </button>
  );
};
