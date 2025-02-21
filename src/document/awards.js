import Content from '../component/content'
import ProfileItem from '../component/profileItem'
import { awards } from '../data/awards'

export default function Awards() {
    return (
        <Content title="AWARDS">
            {awards.map(award => (
                <ProfileItem key={`award-${award.title}`} title={award.title} duration={award.duration} description={award.description}>
                    <p className="Profile-paragraph">{award.paragraph}</p>
                </ProfileItem>
            ))}
        </Content>
    )
}
