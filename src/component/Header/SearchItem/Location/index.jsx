import React from "react";
import { Col, Row } from "reactstrap";
import "./Location.css";

function Location(props) {
  return (
    <div className=''>
      <Row>
        <Col>
          <div className='map-icon'></div>
        </Col>
        <Col>Khám phá các điểm đến lân cận</Col>
      </Row>
    </div>
  );
}
export default Location;
