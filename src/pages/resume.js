import ContactItem from '../component/contactItem'
import Education from '../document/education'
import Awards from '../document/awards'
import Project from '../document/project'
import Others from '../document/others'

export default function Resume() {
    return (
        <div className="Profile">
            <div className="Profile-container">
                <div className="Profile-block">
                    <span className="Profile-header">ABOUT ME</span>
                    <p className="Profile-paragraph">
                        안녕하세요. 프론트엔드 개발자 윤재현입니다. <br />
                        다양한 분야에 대한 호기심을 바탕으로 Next.js와 TypeScript를 활용해 사용자 경험을 고민하며 개발하고 있습니다. 협업과 소통을
                        중요하게 생각하며, 기획부터 개발까지 팀과 함께 더 나은 결과를 만들어가는 과정에 가치를 둡니다. 변화하는 환경속에서도 유연함과
                        균형을 유지하며, 지속적으로 배우고 성장하기 위해 노력합니다.
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
            <Education />
            <Awards />
            <Project />
            <Others />
        </div>
    )
}
