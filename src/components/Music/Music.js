import React, { Component } from 'react';
import './Music.css';

class Music extends Component {
    constructor(props) {
        super(props);
        this.state = {
            musicList: [
                {
                    img: 'https://i.ytimg.com/vi/kfw7MYah2n0/maxresdefault.jpg',
                    name: '3107-3 | W/n x Nâu x Duongg x Titie | OFFICIAL MV',
                    singer: 'W/n ♪ 6,7 Tr lượt xem • 5 ngày trước',
                    singer2: '► SUBSCRIBE CHANNEL: https://wn.fanlink.to/youtube #31073 #Wn #Winhmm #UFO #UMG #3107 #Win Streamlink : https://umvn.lnk.to/3107-3 Executive Producer: Nguyen Quy Cao Nguyen Artist: DuongG...'
                },
                {
                    img: 'https://i.ytimg.com/vi/6IX9kq4Ovzc/maxresdefault.jpg',
                    name: 'SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO',
                    singer: 'Lê Bảo Bình ♪ 10 Tr lượt xem • 1 tuần trước',
                    singer2: 'SAI CÁCH YÊU | LÊ BẢO BÌNH | OFFICIAL MUSIC VIDEO #LeBaoBinh #SaiCachYeu #SCY Nghe Audio Độc quyền tại Zing MP3: https://zingmp3.vn/bai-hat/Sai-Cach-Yeu-Le-Bao-Binh/ZUOZE7EZ.html...'
                },
                
            ],
        }
    }
    render() {

        let element = this.state.musicList.map((music, index) => {
            let result = '';
            result =    <div key={index} className="music-list__item">
                            <span className="music-list__sub"></span>
                            <img className="music-list__img" src={music.img} alt="..." />
                            <div className="music-list__des">
                                <span className="music-list__name">{music.name}</span>
                                <span className="music-list__singer">{music.singer}</span>
                                <span className="music-list__singer2">{music.singer2}</span>
                            </div>
                        </div>

            return result;
        })
        return (
            <div className="table-music">
                <div className="table-music__title">
                    <h2 className="music-title">Video thịnh hành</h2>
                </div>
                <div className="table-music__list">
                    { element }
                </div>
            </div>
        );
    }
}

export default Music;