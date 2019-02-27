import React, { Component } from 'react';
import './Project.scss';

import burpy from 'asset/burpy.png';
import home from 'asset/home.PNG';
import product from 'asset/product.PNG';
import flow_chart from 'asset/flow_chart.png';
import structure_chart from 'asset/structure_chart.png';

import Button from 'component/Button';
import Next from 'react-icons/lib/ti/arrow-forward';
import Prev from 'react-icons/lib/ti/arrow-back';

class Project extends Component {
    constructor(props) {
        super(props);

        this.state = {
            num: 0,
            increase_disable: false,
            decrease_disable: true
        };
    }

    IncreasehandleClick(v) {
        this.setState({ num: v + 1, decrease_disable: false });
        if (this.state.num >= 3) {
            this.setState({ increase_disable: true })
        }
    }

    DecreasehandleClick(v) {
        this.setState({ num: v - 1, increase_disable: false });
        if (this.state.num - 1 === 0) {
            this.setState({ decrease_disable: true })
        }
    }
    render() {
        const { num, increase_disable, decrease_disable } = this.state
        let imgarr = [burpy, flow_chart, structure_chart, home, product];
        let img = imgarr[num];

        return (
            <div className="project-Paper">
                <div className="header">
                    <h2 className="main-header">Burpy</h2>
                </div>
                <div className="content">
                    <div className="img-content">
                        <img className="img" src={img} />
                        <div>
                            <div className="button-position">
                                <Button icon={<Prev style={{verticalAlign : 'center'}}/>} onclick={() => this.DecreasehandleClick(num)} disable={decrease_disable} />
                                <Button icon={<Next style={{verticalAlign : 'center'}} />} onclick={() => this.IncreasehandleClick(num)} disable={increase_disable} />
                            </div>
                            <div className="imgnum">
                                <p>{num + 1}/{imgarr.length}</p>
                            </div>
                        </div>
                    </div>
                    <div className="project-info">
                        <div className="team">
                            <h2>Team</h2>
                            <p><strong>Web</strong>: 정석호, 이윤상</p>
                            <p><strong>Unity</strong>: 박건희, 최종인</p>
                            <p><strong>UX/UI</strong>: 김지호</p>
                        </div>
                        <div className="subtitle">
                            <h2>내 역할</h2>
                            <p>Web 클라이언트 개발, API서버 개발</p>
                        </div>
                        <div className="subtitle">
                            <h2>사용 기술</h2>
                            <p><strong>Web</strong>: React.js, Node.js, express, mongoose, redux</p>
                            <p><strong>Unity</strong>: C#, Tensorflow, Keras, Django</p>
                            <p><strong>DataBase</strong>: MongoDB</p>
                        </div>
                    </div>
                </div>
                <div className="title">
                    <h2>주요 기능</h2>
                    <p>소셜로그인, 상품 검색, 상품 등록 및 수정, 댓글(등록, 수정, 삭제), 상품 찜하기, 상품 이미지 검색, 상품 이미지 등록
                        상품 추천
                    </p>
                </div>
                <div className="title">
                    <h2>설명</h2>
                    <p>사용자들이 이미지 검색을 통해 주류 및 음료를 검색할 수 있습니다.</p>
                    <p>다른 사용자들과 함께 상품에 대한 정보와 평가를 공유 할 수 있습니다.</p>
                    <p>상품에 대한 평가를 기반으로 개인화된 상품 추천 기능을 제공합니다.</p>
                </div>
            </div>
        );
    }
}

export default Project;