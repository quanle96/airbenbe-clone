import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSync } from '@fortawesome/free-solid-svg-icons';

import { IProps } from '../../../../types';
import {
  StyledCardTitle,
  StyledIcon,
  StyledRefreshBtn,
  StyledTemp,
  StyledWtCard,
  StyledWTWraper,
} from './style';

export const Icon: React.FC<IProps> = (props) => {
  const iconUrl = `url('http://openweathermap.org/img/wn/${props.code}@4x.png')`;
  return <StyledIcon iconUrl={iconUrl} />;
};

export const Temp: React.FC<IProps> = ({ children }) => {
  return <StyledTemp>{children}°C</StyledTemp>;
};

export const Card: React.FC<IProps> = ({ children }) => {
  return <StyledWtCard>{children}</StyledWtCard>;
};

export const Title: React.FC<IProps> = ({ children }) => {
  return <StyledCardTitle>{children}</StyledCardTitle>;
};

export const RefreshBtn: React.FC<IProps> = ({ refreshHandle }) => {
  return (
    <StyledRefreshBtn onClick={refreshHandle}>
      <FontAwesomeIcon icon={faSync} />
    </StyledRefreshBtn>
  );
};

export const LoadingCards: React.FC<{ num: number }> = (props) => {
  const iconUrl = 'url("https://i.imgur.com/GLdqYB2.gif")';
  const listCard = [];
  let i;
  for (i = 0; i < props.num; i++) {
    listCard.push(
      <Card key={i}>
        <StyledIcon iconUrl={iconUrl} />
      </Card>
    );
  }
  return <StyledWTWraper>{listCard}</StyledWTWraper>;
};
