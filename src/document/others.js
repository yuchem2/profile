import Content from '../component/content'
import ProfileItem from '../component/profileItem'
import { others } from '../data/others'

export default function Others() {
    return (
        <Content title="OTHERS">
            {others.map(other => (
                <ProfileItem key={`other-${other.title}`} title={other.title} duration={other.duration} description={other.description}>
                    <p className="Profile-paragraph">{other.paragraph}</p>
                </ProfileItem>
            ))}
        </Content>
    )
}
