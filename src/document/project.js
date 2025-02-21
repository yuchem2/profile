import { useEffect, useRef } from 'react'
import PropTypes from 'prop-types'

import Content from '../component/content'
import { projects } from '../data/projects'

function ProjectImage({ images, title }) {
    const scrollRef = useRef(null)

    useEffect(() => {
        const scrollContainer = scrollRef.current
        if (!scrollContainer) return

        let index = 0
        const interval = setInterval(() => {
            const nextScroll = index * scrollContainer.clientWidth
            scrollContainer.scrollTo({ left: nextScroll, behavior: 'smooth' })
            index = (index + 1) % images.length
        }, 5 * 1000)

        return () => clearInterval(interval)
    }, [images.length])

    return (
        <div className="Project-image" ref={scrollRef}>
            {images.map(image => (
                <img key={`${title}-image`} src={`${process.env.PUBLIC_URL}${image}`} alt={title} />
            ))}
        </div>
    )
}

export default function Project() {
    return (
        <Content title="PROJECT">
            <div className="Project-block">
                {projects.map(project => (
                    <div className="Project-item" key={`project-${project.title}`}>
                        <ProjectImage images={project.images} title={project.title} />
                        <span className="Profile-item-duration">{project.duration}</span>
                        <span className="Profile-item-title">{project.title}</span>
                        <span className="Profile-item-description">{project.description}</span>
                        <div className="Project-skill">
                            {project.skills.map(skill => (
                                <span key={`${project.title}-${skill}`}>{skill}</span>
                            ))}
                        </div>
                        <p className="Profile-paragraph">{project.paragraph}</p>
                        <span>참여인원: {project.members}명</span>
                        <span>역할: {project.role}</span>
                        <div className="Project-links">
                            {project.url.map(u => (
                                <a key={`${project.title}-${u.title}-url`} href={u.href}>{`${u.name === 'none' ? 'Repository' : `${u.name}`}`}</a>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Content>
    )
}

ProjectImage.propTypes = {
    images: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}
