import React, { Component } from 'react';
import './Tintuc.css';

class Tintuc extends Component {
    constructor(props) {
        super(props);
        this.state = {
            offerList: [
                {

                    img: 'https://img.lostbird.vn/2018/05/09/173947/9.jpg',
                    name: 'Quách Thi Lan nỗ lực tuyệt vời để có mặt ở bán kết...',
                    singer: 'HTV Sports',
                    singer2:'402 N lượt xem - 6 ngày trước',
                },
                {

                    img: 'https://img.lostbird.vn/2018/05/09/173947/1.jpg',
                    name: 'Không tận dụng được cơ hội, Phi Vũ sớm bị loại trư...',
                    singer: 'HTV Sports',
                    singer2: '68 N lượt xem - 1 tuần trước',
                },
                {
                    img: 'https://img.lostbird.vn/2018/05/09/173947/5.jpg',
                    name: 'Đội tuyển bơi Trung Quốc thể hiện sức mạnh với kỷ l...',
                    singer: 'HTV Sports',
                    singer2: '116 N lượt xem - 1 tuần trước',
                },
                {
                    img: 'https://datvietmedia.com/wp-content/uploads/2018/08/204918_29103313_4123971411264945_6910818101047676291_n.jpg',
                    name: '"Quả ngọt" thứ 2 của"hoa khôi cầu lông" Nguyễn Thu...',
                    singer: 'HTV Sports',
                    singer2: '541 N lượt xem - 1 tuần trước',
                },
            ],
        }
    }
    render() {
        
        let element = this.state.offerList.map((offer, index) => {
            let result = '';
            result = <div key={index} className="tokyo-list__item">
                <span className="tokyo-list__sub"></span>
                <img className="tokyo-list__img" src={offer.img} alt="..." />
                <div className="tokyo-list__des">
                    <span className="tokyo-list__name">{offer.name}</span>
                    <span className="tokyo-list__singer">{offer.singer}</span>
                    <span className="tokyo-list__singer2">{offer.singer2}</span>
                </div>
            </div>

            return result;
        })
        return (
            <div className="table-tokyo">
                <div className="table-tokyo__title">
        
                    <h2 className="tokyo-title">Thế vận hội Tokyo 2020</h2>
                </div>
                <div className="table-tokyo__list">
                    {element}
                </div>
            </div>
        );
    }
}

export default Tintuc;