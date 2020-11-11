import React from 'react';

import './Card.css';

type IProps = {
  data: { imgUrl: string; title: string; content: string };
};

const Card: React.FC<IProps> = (props) => {
  return (
    <div className='card-wraper'>
      <div>
        <img src={`${props.data.imgUrl}`} alt='fail to load' />
      </div>
      <div className='card-content-wraper'>
        <section>
          <div className='card-title'>{props.data.title}</div>
          <div className='card-content'>{props.data.content}</div>
        </section>
      </div>
    </div>
  );
};

export default Card;
