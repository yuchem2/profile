import PropTypes from 'prop-types';

import './profileItem.css';

const ProfileItem = ({ title, duration, description, children }) => {
  return (
    <div className="profile-item">
      <div className="profile-item-header">
        <span className="profile-item-duration">{duration}</span>
        <span className="profile-item-title">{title}</span>
        <span className="profile-item-description">{description}</span>
      </div>
      {children}
    </div>
  );
};

ProfileItem.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string,
  description: PropTypes.string,
  children: PropTypes.element,
};

export default ProfileItem;
