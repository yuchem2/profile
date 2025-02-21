import './App.css'

import ContactItem from './component/contactItem'
import Skill from './document/skills'
import Education from './document/education'
import Career from './document/career'
import Awards from './document/awards'
import Project from './document/project'

export default function App() {
    return (
        <div className="Profile">
            <div className="Profile-container">
                <div className="Profile-block">
                    <span className="Profile-header">ABOUT ME</span>
                    <p className="Profile-paragraph">
                        안녕하세요. 프론트엔드 개발자 윤재현입니다. <br />
                        Next.js와 TypeScript를 주로 사용하며, UI/UX 개선과 사용자 경험 향상에 관심이 많습니다. <br />
                        다양한 프로젝트 경험을 통해 기획부터 개발, 협업까지 경험해오고 있습니다. <br />
                        여전히 배울 것이 많지만, 그만큼 성장하고자 매일 노력합니다. <br />
                    </p>
                </div>
                <div className="Contact-block">
                    <span className="Profile-header">CONTACT</span>
                    <div className="Item-block">
                        <ContactItem title="Email" link="yuchem2@gmail.com" prevent={true} />
                        <ContactItem title="Github" link="https://github.com/yuchem2" />
                    </div>
                </div>
            </div>
            <Skill />
            <Education />
            <Project />
            <Awards />
            <Career />
        </div>
    )
}
