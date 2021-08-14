import React, { Component } from 'react';
import './Header.css';
class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isDisplayAction: false,
            search: '',

        }
    }
    getShowAction = () => {
        if (this.state.isDisplayAction != null) {
            this.setState({
                isDisplayAction: !this.state.isDisplayAction,
            })
        }
    }
    myChangeHandler = (event) => {
        this.setState({ search: event.target.value });
    }


    
    render() {
        var { isDisplayAction } = this.state;
        var showAction = isDisplayAction === true ?
            <div className="btn__des">
                <div className="btn__username">
                    <div className="user-dp3">
                        <img src="./img/nen.jpg" alt="" />
                    </div>
                    <div className="btn_desuser">
                        <p>Minh Thông nè</p>
                        <span>Quản lý Tài khoản Google của bạn</span>
                    </div>
                </div>
                <ul className="btn__listaction">
                    <li>
                        <a href="!#"><i class='bx bxs-user-rectangle'></i> Kênh Của Bạn</a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-dollar-circle'></i> Giao dịch mua và gói hội viên</a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-cog' ></i> YouTube Studio</a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bxs-user-account' ></i> Chuyển đổi tài khoản &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-log-in'></i> Đăng xuất</a>
                    </li>
                </ul>
                <ul className="btn__listaction">
                    <li>
                        <a href="!#"><i class='bx bx-moon' ></i> Giao diện: Giao diện của thiết bị&nbsp; ></a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-rupee'></i> Ngôn ngữ: Tiếng Việt&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-globe'></i> Địa điểm: Việt Nam&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;></a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-cog' ></i> Cài đặt</a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-user-pin'></i> Dữ liệu của ban trong YouTube</a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-help-circle' ></i> Trợ giúp</a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bx-error-alt'></i> Gửi phản hồi</a>
                    </li>
                    <li>
                        <a href="!#"><i class='bx bxs-keyboard'></i> Phím tắt</a>
                    </li>
                </ul>
                <ul className="btn__listaction1">
                    <li>
                        <a href="!#">Chế độ hạn chế: Đã tắt</a>
                    </li>
                </ul>
            </div> : '';
        return (
            <div>
                <nav className="navbar">
                    <div className="toggle-btn">
                        <span />
                        <span />
                        <span />
                    </div>
                    <img src="img/logo.PNG" className="logo" alt="" />
                    <div className="search-box">
                        <input type="text" className="search-bar" placeholder="search" onChange={this.myChangeHandler} />
                        <button className="search-btn"><img src="./img/search.PNG" alt="" /></button>
                        <div className="search__content">
                            <span>Giá trị tìm kiếm: {this.state.search}</span>
                        </div>
                        <div className="user-dp2">
                            <img src="./img/1.jpg" alt="" />
                        </div>
                    </div>
                    <div className="user-options">
                        <img src="./img/video.PNG" className="icon" alt="" />
                        <img src="./img/grid.PNG" className="icon" alt="" />
                        <img src="./img/bell.PNG" className="icon" alt="" />
                        <div className="user-dp" onClick={this.getShowAction}>
                            <img src="./img/nen.jpg" alt="" />
                            {showAction}
                        </div>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Header;