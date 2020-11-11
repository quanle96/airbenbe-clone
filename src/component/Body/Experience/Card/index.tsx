import React from 'react';

import './Card.css';
type Props = {
  data: { imgUrl: string; title: string; content: string };
};
class Card extends React.Component<Props> {
  render() {
    return (
      <div className='card-wraper'>
        <div>
          <img src={`${this.props.data.imgUrl}`} alt='fail to load' />
        </div>
        <div className='card-content-wraper'>
          <section>
            <div className='card-title'>{this.props.data.title}</div>
            <div className='card-content'>{this.props.data.content}</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Card;
