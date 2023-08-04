import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
function NavBar(){
    return (
        <div className='column'>
            <ul className="navSec_noBullets">
                <li className="navItem">
                    <button className="NavButton">
                        <a href="/homepage">TRANG CHỦ</a>
                    </button>
                </li>
                <li className="navItem">
                    <button className="NavButton">
                        <Link to="/learn"><span>HỌC</span>
                            {/*<img className="home" src ="Home.png" alt="home"/>*/}
                        </Link>
                    </button>
                </li>
                <li className="navItem">
                    <button className="NavButton">
                        <Link to="/challenges"><span>THỬ THÁCH</span>
                            {/*<img className="home" src ="Home.png" alt="home"/>*/}
                        </Link>
                    </button>
                </li>
                <li className="navItem">
                    <button className="NavButton">
                        <Link to="/rankings"><span>XẾP HẠNG</span>
                            {/*<img className="home" src ="Home.png" alt="home"/>*/}
                        </Link>
                    </button>
                </li>
                <li className="navItem">
                    <button className="NavButton">
                        <Link to="/forum"><span>DIỄN ĐÀN</span>
                            {/*<img className="home" src ="Home.png" alt="home"/>*/}
                        </Link>
                    </button>
                </li>
                <li className="navItem">
                    <button className="NavButton">
                        <Link to="/shop"><span>CỬA HÀNG</span>
                            {/*<img className="home" src ="Home.png" alt="home"/>*/}
                        </Link>
                    </button>
                </li>
            </ul>
        </div>
    );
}
export default NavBar;