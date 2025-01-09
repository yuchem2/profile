import Content from '../component/content'
import ProfileItem from '../component/profileItem'

export default function Skill() {
    return (
        <Content title="SKILLS">
            <ProfileItem title="Backend">
                <p className="Profile-paragraph">
                    <ul>
                        <li>JavaScript, Typescript</li>
                        <li>Node.js (Express)</li>
                        <li>MySQL, MongoDB</li>
                    </ul>
                </p>
            </ProfileItem>
            <ProfileItem title="Frontend">
                <p className="Profile-paragraph">
                    <ul>
                        <li>HTML5, CSS3, JavaScript, TypeScript</li>
                        <li>React, Next.js</li>
                    </ul>
                </p>
            </ProfileItem>
            <ProfileItem title="Etc">
                <p className="Profile-paragraph">
                    <ul>
                        <li>Git, Github</li>
                        <li>Notion, JetBrains Space</li>
                        <li>AWS S3, AWS CloudFront</li>
                    </ul>
                </p>
            </ProfileItem>
        </Content>
    )
}
