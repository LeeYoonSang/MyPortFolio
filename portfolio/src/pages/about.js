import React, { Component } from 'react';
import './about.scss'

class about extends Component {
    render() {
        return (
            <div className="about-Paper">
                <header className="Header">
                    <h2>About</h2>
                </header>
                <div className="profile">
                    <h2>이윤상</h2>
                    <div>
                        <p>웹개발을 하고 있습니다. 
                        프론트엔드와 백엔드 둘 다 좋아합니다. 
                        다양한 경험을 해보고 싶습니다.
                        내가 만든 서비스가 사용자들에게 편리함을 제공하면 좋겠습니다.
                        </p>
                        <div className="badge">
                        <a href="https://github.com/LeeYoonSang">
                        <img src="https://s3.namuwikiusercontent.com/s/7d29a8a8cc8b2df50c3ee7a463e6547bdb5d048532fc15a58777be0bdea627c36dc49f422e405dbae2f3d3dd92e46e753a8b24db4f02b38ccac5c3a82a6c4275f6ac5d5d26c7bf43d339b2d0307da9cdb66ae09324f47e1c00d393c1cc9a6f99" className="img"/>
                        </a>
                        </div>
                        <div className="email">Email : kty189@naver.com</div>
                    </div>
                </div>
                <div className="profile">
                    <h2>기술 스택</h2>
                    <p><strong>Language</strong>: JavaScript</p>
                    <p><strong>Frontend</strong>: React</p>
                    <p><strong>Backend</strong></p>
                    <p className="skill"><strong>- Node.js</strong>: express, koa, mongoose</p>
                    <p className="skill"><strong>- Database</strong>: MongoDB</p>
                </div>
                <div className="profile">
                    <h2>프로젝트</h2>
                    <p>Burpy(2018.02 ~ 2018.10)</p>
                    <p>이미지 검색을 통한 주류/음료 검색 서비스 입니다.</p>
                    <p><strong>기술스택 : </strong>React, Node.js, express, MongoDB, unity, Python, TensorFlow, Django</p>
                </div>
                <div className="profile">
                    <h2>학력</h2>
                    <p><strong>성결대학교(2013-2019, 졸업)</strong></p>
                    <p>멀티미디어공학 전공</p>
                </div>
                
            </div>
        );
    }
}

export default about;