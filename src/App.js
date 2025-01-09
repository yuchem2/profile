import './App.css'

import ContactItem from './component/contactItem'
import Skill from './document/skills'
import Education from './document/education'
import Career from './document/career'
import Awards from './document/awards'
import Project from './document/project'
import Others from './document/ohters'

export default function App() {
    return (
        <div className="Profile">
            <div className="Profile-container">
                <div className="Profile-block">
                    <span className="Profile-header">ABOUT ME</span>
                    <p className="Profile-paragraph">(짧은 자기소개)</p>
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
            <Career />
            <Awards />
            <Project />
            <Others />
        </div>
    )
}
