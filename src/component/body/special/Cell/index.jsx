import "./index.css";
import React from "react";
import { Card, CardImg, CardText, CardBody } from "reactstrap";

class Cell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Card>
        <CardImg
          width='100%'
          src={this.props.data.img}
          alt='Card'
          className="image-card"
        />
        <CardBody>
          <CardText>{this.props.data.content}</CardText>
        </CardBody>
      </Card>
    );
  }
}

export default Cell;
