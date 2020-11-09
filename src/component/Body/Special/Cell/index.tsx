import React from 'react';
import { Card, CardImg, CardText, CardBody } from 'reactstrap';

import './Cell.css';

type Props = {
  data: {
    img: string;
    content: string;
  };
};

class Cell extends React.Component<Props> {
  render() {
    return (
      <Card>
        <CardImg
          width='100%'
          src={this.props.data.img}
          alt='Card'
          className='image-card'
        />
        <CardBody>
          <CardText>{this.props.data.content}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Cell;
