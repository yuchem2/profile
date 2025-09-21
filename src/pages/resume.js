import ContactItem from '../component/contactItem';
import Education from '../document/education';
import Awards from '../document/awards';
import Project from '../document/project';
import Others from '../document/others';
import Abstract from '../document/abstact';
import Skill from '../document/skills';

export default function Resume() {
  return (
    <div className="profile">
      <div className="a4-page">
        <div className="profile-container">
          <Abstract />
          <div className="contact-block">
            <span className="profile-header">CONTACT</span>
            <div className="item-block">
              <ContactItem title="Email" link="yuchem2@gmail.com" prevent={true} />
              <ContactItem title="Github" link="https://github.com/yuchem2" />
            </div>
          </div>
        </div>
        <Education />
      </div>
      <Awards />
      <Skill />
      <Project />
      <Others />
    </div>
  );
}
