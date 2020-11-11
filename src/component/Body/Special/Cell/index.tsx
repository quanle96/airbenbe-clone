import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

import './Cell.css';

type IProps = {
  data: {
    img: string;
    content: string;
  };
};

const Cell: React.FC<IProps> = (props) => {
  return (
    <Card>
      <CardImg
        width='100%'
        src={props.data.img}
        alt='Card'
        className='image-card'
      />
      <CardBody>
        <CardText>{props.data.content}</CardText>
      </CardBody>
    </Card>
  );
};

export default Cell;
