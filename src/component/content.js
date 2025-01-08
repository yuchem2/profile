import PropTypes from 'prop-types'

const Content = ({ title, children }) => {
    return (
        <div className="Profile-block">
            <span className="Profile-header">{title}</span>
            {children}
        </div>
    )
}

Content.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element,
}

export default Content
