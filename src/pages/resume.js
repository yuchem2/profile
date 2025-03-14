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
                        <br />
                        <span className="highlight">배움을 나누며 함께 성장하는 것을 좋아합니다.</span> <br />
                        스터디, 세미나, 협업을 통해 지식을 나누고 팀원들과 함께 성장하는 것에 즐거움을 느낍니다. <br />
                        또한, 멘토링, 튜터링과 같은 활동을 통해 제 경험과 지식을 공유하며 함께 배우는 과정에서 많은 것을 얻고 있습니다. <br />
                        <br />
                        <span className="highlight">사용자 경험이 가장 중요한 가치라고 생각하고 개발을 하고 있습니다.</span> <br />
                        단순히 기능을 구현하는 것을 넘어, 직관적인 UI와 원할한 상호작용을 제공하는 것이 사용자의 만족도를 높인다고 생각합니다.
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
