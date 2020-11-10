import React, { useState } from 'react';

import Card from './Card';

import './Experience.css';

const Experience: React.FC = () => {
  const [cards, setCards] = useState([
    {
      id: '01',
      title: 'Chỗ ở độc đáo',
      content: 'Những không gian mà không chỉ là nơi để ngủ.',
      imgUrl:
        'https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720',
    },
    {
      id: '02',
      title: 'Trải nghiệm trực tuyến',
      content:
        'Các hoạt động độc đáo mà chúng ta có thể cùng nhau trải nghiệm, dưới sự dẫn dắt của rất nhiều người tổ chức.',
      imgUrl:
        'https://a0.muscache.com/im/pictures/4a2f688e-0b33-4feb-932f-494b9a37348c.jpg?im_w=720',
    },
    {
      id: '03',
      title: 'Nhà nguyên căn',
      content:
        'Những chỗ ở riêng thoải mái, có không gian dành cho bạn bè hoặc gia đình.',

      imgUrl:
        'https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720',
    },
  ]);

  return (
    <div className='experience-wraper'>
      {cards.map((card) => {
        return <Card key={card.id} data={card} />;
      })}
    </div>
  );
};

export default Experience;
