import React, { useState } from 'react';
import { Row, Col } from 'reactstrap';

import { IProps } from '../../../types';

import Cell from './Cell';

import './Special.css';

type aCard = {
  img: string;
  content: string;
  type: number;
};
type CardProps = {
  xs?: string;
  data?: aCard;
  dataList?: aCard[];
};

const Card: React.FC<CardProps> = (props) => {
  if (props.data)
    return (
      <Col xs={props.xs}>
        <Cell data={props.data} />
      </Col>
    );
  else return <div />;
};

const RightCards: React.FC<CardProps> = (props) => {
  if (props.dataList)
    return (
      <Col xs='6'>
        <Row>
          <Card xs='6' data={props.dataList[1]} />
          <Card xs='6' data={props.dataList[2]} />
        </Row>
        <Row>
          <Card xs='12' data={props.dataList[3]} />
        </Row>
      </Col>
    );
  else return <div />;
};

const Special: React.FC<IProps> = () => {
  const [cards, setCards] = useState([
    {
      img:
        'https://a0.muscache.com/im/pictures/78010337-07f0-4154-9528-363b97b54699.jpg?im_w=720',
      content: 'Học cách nấu canh sủi cảo ở Thượng Hải',
      type: 1,
    },
    {
      img:
        'https://a0.muscache.com/im/pictures/0735e435-3d1d-4aec-b536-9ee54f299ce6.jpg?im_w=720',
      content: 'Nữ quyền, bích họa đường phố và graffiti',
      type: 3,
    },
    {
      img:
        'https://a0.muscache.com/im/pictures/1793b6aa-4c3c-4193-a65a-09b440b2ca2c.jpg?im_w=720',
      content: 'Ghé hậu trường với ảo thuật gia New York',
      type: 3,
    },
    {
      img:
        'https://a0.muscache.com/im/pictures/925f99bb-c5bc-4d82-9803-518abeef7e2e.jpg?im_w=720',
      content: 'Tự pha cocktail & "tám" chuyện giới tính',
      type: 2,
    },
  ]);

  return (
    <div className='special-wraper'>
      <div className='description-container'>
        <div className='text-warper'>
          <h1>
            <div className='title'>Trải nghiệm trực tuyến</div>
          </h1>
          <div className='description'>
            Gặp gỡ mọi người trên khắp thế giới trong khi thử làm những điều mới
            mẻ. Tham gia các phiên video tương tác, truyền trực tiếp do những
            người tổ chức trải nghiệm có một không hai dẫn dắt – trải nghiệm mọi
            hoạt động mà không cần rời khỏi nhà.
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
        <Row className='grid-wraper'>
          <Card xs='6' data={cards[0]} />
          <RightCards dataList={cards} />
        </Row>
      </div>
    </div>
  );
};

export default Special;
