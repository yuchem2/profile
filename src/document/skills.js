import Content from '../component/content'
import ProfileItem from '../component/profileItem'

export default function Skill() {
    return (
        <Content title="SKILLS">
            <ProfileItem title="Backend">
                <ul className="Profile-paragraph">
                    <li>JavaScript, Typescript</li>
                    <li>Node.js, Express</li>
                    <li>MySQL, MongoDB</li>
                </ul>
            </ProfileItem>
            <ProfileItem title="Frontend">
                <ul className="Profile-paragraph">
                    <li>HTML5, CSS3, JavaScript, TypeScript</li>
                    <li>React, Next.js</li>
                </ul>
            </ProfileItem>
            <ProfileItem title="Etc">
                <ul className="Profile-paragraph">
                    <li>Git, Github</li>
                    <li>Notion, JetBrains Space</li>
                </ul>
            </ProfileItem>
        </Content>
    )
}
