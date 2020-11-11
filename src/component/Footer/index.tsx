import React from 'react';

import Top from './Top';
import Bot from './Bot';

import './Footer.css';

type Item = { id: string; name: string; link: string };
type State = {
  cols: { id: string; name: string; items: Item[] }[];
};
class Footer extends React.Component {
  readonly state: State = {
    cols: [
      {
        id: 'col001',
        name: 'Giới thiệu',
        items: [
          {
            id: '01',
            name: 'Phương thức hoạt động của Airbnb',
            link: '/d/howairbnbworks',
          },
          { id: '02', name: 'Trang tin tức', link: '/press/news' },
          { id: '03', name: 'Airbnb Plus', link: '/plus' },
          { id: '04', name: 'Airbnb Luxe', link: '/luxury' },
          {
            id: '05',
            name: 'HotelTonight',
            link: 'https://www.hoteltonight.com/',
          },
          { id: '06', name: 'Airbnb for Work', link: '/work?s=footer' },
          { id: '07', name: 'Thế vận hội', link: '/d/olympics' },
          { id: '08', name: 'Cơ hội nghề nghiệp', link: '/careers' },
        ],
      },
      {
        id: 'col002',
        name: 'Cộng đồng',
        items: [
          {
            id: '09',
            name: 'Sự đa dạng và Cảm giác thân thuộc',
            link: '/diversity',
          },
          {
            id: '10',
            name: 'Tiện nghi phù hợp cho người khuyết tật',
            link: '/accessibility',
          },
          {
            id: '11',
            name: 'Đối tác liên kết Airbnb',
            link: '/associates?from=footer',
          },
          { id: '12', name: 'Chỗ ở cho tuyến đầu', link: '/d/covid19relief' },
          { id: '13', name: 'Mời bạn bè', link: '/invite?r=6' },
        ],
      },
      {
        id: 'col003',
        name: 'Đón tiếp khách',
        items: [
          {
            id: '14',
            name: 'Cho thuê nhà',
            link: '/host/homes?from_footer=1',
          },
          {
            id: '15',
            name: 'Tổ chức Trải nghiệm trực tuyến',
            link: '/d/onlinehost',
          },
          {
            id: '16',
            name: 'Tổ chức trải nghiệm',
            link: '/host/experiences',
          },
          {
            id: '17',
            name: 'Đón tiếp khách có trách nhiệm',
            link: '/help/responsible-hosting',
          },
          {
            id: '18',
            name: 'Ngôi nhà rộng mở',
            link: '/openhomes?from_footer=1',
          },
          { id: '19', name: 'Trung tâm tài nguyên', link: '/resources' },
          {
            id: '20',
            name: 'Trung tâm cộng đồng',
            link: '/help/community?s=footer',
          },
        ],
      },
      {
        id: 'col004',
        name: 'Hỗ trợ',
        items: [
          {
            id: '21',
            name: 'Biện pháp ứng phó với đại dịch COVID-19 của chúng tôi',
            link: '/d/covidsafety',
          },
          { id: '22', name: 'Trung tâm trợ giúp', link: '/help?from=footer' },
          {
            id: '23',
            name: 'Các tùy chọn hủy',
            link:
              '/help/article/2701/extenuating-circumstances-policy-and-the-coronavirus-covid19',
          },
          { id: '24', name: 'Hỗ trợ khu dân cư', link: '/neighbors' },
          { id: '25', name: 'Tin cậy và an toàn', link: '/trust' },
        ],
      },
    ],
  };
  render() {
    return (
      <footer>
        <div className='footer-wraper'>
          <Top cols={this.state.cols} />
          <hr />
          <Bot />
        </div>
      </footer>
    );
  }
}
export default Footer;
