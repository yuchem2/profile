import Content from '../component/content';
import ProfileItem from '../component/profileItem';
import { certificates, indoors, outdoors } from '../data/others';

export default function Others() {
  return (
    <Content title="OTHERS">
      <h1 className="profile-sub-header">Certificate & Credentials</h1>
      {certificates.map(other => (
        <ProfileItem key={`other-${other.title}`} title={other.title} duration={other.duration} description={other.description}>
          <p className="profile-paragraph">{other.paragraph}</p>
        </ProfileItem>
      ))}
      <h1 className="profile-sub-header">대외활동</h1>
      {outdoors.map(other => (
        <ProfileItem key={`other-${other.title}`} title={other.title} duration={other.duration} description={other.description}>
          <p className="profile-paragraph">{other.paragraph}</p>
        </ProfileItem>
      ))}
      <h1 className="profile-sub-header">교내활동</h1>
      {indoors.map(other => (
        <ProfileItem key={`other-${other.title}`} title={other.title} duration={other.duration} description={other.description}>
          <p className="profile-paragraph">{other.paragraph}</p>
        </ProfileItem>
      ))}
    </Content>
  );
}
