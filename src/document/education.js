import ProfileItem from '../component/profileItem';
import Content from '../component/content';
import { educations } from '../data/educations';

export default function Education() {
  return (
    <Content title="EDUCATION">
      {educations.map(education => (
        <ProfileItem key={education.title} title={education.title} duration={education.duration} description={education.description}>
          <p className="profile-paragraph">{education.paragraph}</p>
        </ProfileItem>
      ))}
    </Content>
  );
}
