import './main.css';
import { NavLink } from 'react-router';

export default function Main() {
  return (
    <div className="main">
      <span className="title">개발자 윤재현</span>
      <div className="link-block">
        <NavLink to="/resume" className="link">
          이력서 보기
        </NavLink>
        <NavLink to="/portfolio" className="link">
          포트폴리오 보기
        </NavLink>
      </div>
      <div className="keywords">
        <div className="keyword">
          <span className="title">Value</span>
          <span className="keyword-title">성장과 공유</span>
          <span className="paragraph">
            지식을 나누며 함께 성장하는 것이 최고의 배움이라 생각하며, 스터디와 협업을 통해 지속적인 성장을 추구합니다
          </span>
        </div>
        <div className="keyword">
          <span className="title">Principle</span>
          <span className="keyword-title">협업과 소통</span>
          <span className="paragraph">원할한 소통과 적절한 협업은 더 나은 가치를 만든다고 믿으며, 이를 실천하고자 합니다.</span>
        </div>
        <div className="keyword">
          <span className="title">Focus</span>
          <span className="keyword-title">사용자 경험</span>
          <span className="paragraph">단순한 기능을 구현하는 것을 넘어 사용자 경험이 가장 중요한 가치라고 생각하고 실천하고자 합니다</span>
        </div>
      </div>
    </div>
  );
}
