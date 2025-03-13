import './main.css'
import { NavLink } from 'react-router'

export default function Main() {
    return (
        <div className="Main">
            <span className="Title">윤재현</span>
            <div className="Link-block">
                <NavLink to="/resume" className="Link">
                    이력서 보기
                </NavLink>
                <NavLink to="/portfolio" className="Link">
                    포트폴리오 보기
                </NavLink>
            </div>
            <div className="Keywords">
                <div className="Keyword">
                    <span className="title">capacity</span>
                    <span className="Keyword-title">호기심과 학습</span>
                    <span className="paragraph">다양한 분야에 대한 호기심을 바탕으로 새로운 지식을 탐구하고 깊이 있는 이해를 추구합니다</span>
                </div>
                <div className="Keyword">
                    <span className="title">capacity</span>
                    <span className="Keyword-title">협업과 소통</span>
                    <span className="paragraph">원할한 소통을 통해 팀과 함께 더 나은 결과를 만들어가고자 합니다</span>
                </div>
                <div className="Keyword">
                    <span className="title">capacity</span>
                    <span className="Keyword-title">유연함과 균형</span>
                    <span className="paragraph">변화하는 환경에서도 유연하게 사고하며 균형 잡힌 해결책을 찾도록 노력합니다</span>
                </div>
            </div>
        </div>
    )
}
