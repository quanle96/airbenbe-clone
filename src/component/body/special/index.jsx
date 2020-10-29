import "./index.css";
import React from "react";
import { Row, Col } from "reactstrap";
import Cell from "./Cell"

class Special extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          img:
            "https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg?im_w=720",
          content: "Học cách nấu canh sủi cảo ở Thượng Hải",
          type:1,
        },
        {
          img:
            "https://a0.muscache.com/im/pictures/0735e435-3d1d-4aec-b536-9ee54f299ce6.jpg?im_w=720",
          content: "Nữ quyền, bích họa đường phố và graffiti",
          type:3,
        },
        {
          img:
            "https://a0.muscache.com/im/pictures/1793b6aa-4c3c-4193-a65a-09b440b2ca2c.jpg?im_w=720",
          content: "Ghé hậu trường với ảo thuật gia New York",
          type:3,
        },
        {
          img:
            "https://a0.muscache.com/im/pictures/925f99bb-c5bc-4d82-9803-518abeef7e2e.jpg?im_w=720",
          content: 'Tự pha cocktail & "tám" chuyện giới tính',
          type:2,
        },
      ],
    };
  }
  render() {
    return (
      <div className='special-wraper'>
        <div className='description-container'>
          <div className='text-warper'>
            <h1>
              <div className='title'>Trải nghiệm trực tuyến</div>
            </h1>
            <div className='description'>
              Gặp gỡ mọi người trên khắp thế giới trong khi thử làm những điều
              mới mẻ. Tham gia các phiên video tương tác, truyền trực tiếp do
              những người tổ chức trải nghiệm có một không hai dẫn dắt – trải
              nghiệm mọi hoạt động mà không cần rời khỏi nhà.
            </div>
          </div>
          <div className='button-wraper'>
            <div>
              <a href='./' className='special-button'>
                Khám phá tất cả
              </a>
            </div>
          </div>
        </div>
        <div className='special-galary'>
          <Row className="grid-wraper">
            <Col xs='6'>
              <Cell top data={this.state.cards[0]} />
            </Col>
            <Col xs='6'>
              <Row>
                <Col xs='6'>
                  <Cell top data={this.state.cards[1]} />
                </Col>
                <Col xs='6'>
                  <Cell top data={this.state.cards[2]} />
                </Col>
              </Row>
              <Row>
                <Col xs='12'>
                  <Cell top data={this.state.cards[3]} />
                </Col>
              </Row>
            </Col>
          </Row>
        </div>
      </div>
    );
  }
}
export default Special;
