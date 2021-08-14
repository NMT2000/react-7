import React, { Component } from 'react';
import './Button.css';

class Button extends Component {
    render() {
        return (
            <div className="container_button">
                    <div className="rcorners">
                        <img className="button_img" src="./img/hot.png" alt="" /><br></br>
                        <a href="!#" className="rcorners__text">Thịnh hành</a>
                    </div>
                    <div className="rcorners">
                        <img className="button_img" src="./img/music.png" alt="" /><br></br>
                        <a href="!#" className="rcorners__text">Âm nhạc</a>
                    </div>
                    <div className="rcorners">
                        <img className="button_img" src="./img/game.png" alt="" /><br></br>
                        <a href="!#" className="rcorners__text">Trò Chơi</a>
                    </div>
                    <div className="rcorners">
                        <img className="button_img" src="./img/new.png" alt="" /><br></br>
                        <a href="!#" className="rcorners__text">Tin tức</a>
                    </div>
                    <div className="rcorners">
                        <img className="button_img" src="./img/sport.png" alt="" /><br></br>
                        <a href="!#" className="rcorners__text">Thể thao</a>
                    </div>
                </div>
        )
    }
}


export default Button;