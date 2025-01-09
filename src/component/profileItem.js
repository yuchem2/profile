import PropTypes from 'prop-types'

import './profileItem.css'

const ProfileItem = ({ title, duration, description, children }) => {
    return (
        <div className="Profile-item">
            <div className="Profile-item-header">
                <span className="Profile-item-duration">{duration}</span>
                <span className="Profile-item-title">{title}</span>
                <span className="Profile-item-description">{description}</span>
            </div>
            {children}
        </div>
    )
}

ProfileItem.propTypes = {
    title: PropTypes.string.isRequired,
    duration: PropTypes.string,
    description: PropTypes.string,
    children: PropTypes.element,
}

export default ProfileItem
