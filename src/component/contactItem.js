import PropTypes from 'prop-types'

import './contactItem.css'

const ContactItem = ({ title, link, prevent }) => {
    const onClick = e => {
        if (prevent) {
            e.preventDefault()
        }
    }
    return (
        <div className="Contact-item">
            <span className="Contact-header">{title}</span>
            <a className="Contact-link" href={link} target="_blank" onClick={onClick} rel="noreferrer">
                {link}
            </a>
        </div>
    )
}

ContactItem.propTypes = {
    title: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
    prevent: PropTypes.bool,
}

export default ContactItem
