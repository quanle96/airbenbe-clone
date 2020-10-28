import "./index.css";
import React from "react";

class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div className='card-wraper'>
        <div>
        <img src={`${this.props.data.imgUrl}`} alt="fail to load" />
        </div>
        <div className="card-content-wraper">
          <section>
            <div className="card-title">{this.props.data.title}</div>
            <div className="card-content">{this.props.data.content}</div>
          </section>
        </div>
      </div>
    );
  }
}

export default Card;
