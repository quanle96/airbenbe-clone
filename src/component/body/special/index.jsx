import "./index.css";
import React from "react";

class Special extends React.Component {
  render() {
    return (
      <div className='special-wraper'>
        <div className='description-container'>
          <div className="text-warper">
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
          <div className="button-wraper">
            <div>
              <a href="./" class="special-button">Khám phá tất cả</a>
            </div>
          </div>
        </div>
        <div className="special-galary">

        </div>
      </div>
    );
  }
}
export default Special;
