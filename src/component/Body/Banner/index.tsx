import React, { useState } from 'react';

import './Banner.css';

const Banner: React.FC = () => {
  const [sectionStyle, setSectionStyle] = useState({
    backgroundImage: 'url(./img/18084f37-67e0-400f-bfd8-55eea0e89508.jpg)',
  });

  return (
    <div className='banner-wraper' style={sectionStyle}>
      <div className='content-wraper'>
        <section>
          <h1>
            <b>Du lịch gần nhà</b>
          </h1>
          <p>
            Dừng chân ở một điểm đến mới mẻ. Khám phá các chỗ ở gần bạn để sinh
            hoạt, làm việc hay chỉ đơn giản là thư giãn.
          </p>
          <button className='banner-button'>
            Khám phá những điểm đến gần đây
          </button>
        </section>
      </div>
    </div>
  );
};

export default Banner;
