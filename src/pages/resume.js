import ContactItem from '../component/contactItem'
import Education from '../document/education'
import Awards from '../document/awards'
import Project from '../document/project'
import Others from '../document/others'
import Abstract from '../document/abstact'
import Skill from '../document/skills'

export default function Resume() {
    return (
        <div className="Profile">
            <div className="Profile-container">
                <Abstract />
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
            <Skill />
            <Project />
            <Others />
        </div>
    )
}
