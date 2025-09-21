import { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';

import Content from '../component/content';
import { projects } from '../data/projects';
import ProfileItem from '../component/profileItem';

function ProjectImage({ images, title }) {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scrollContainer = scrollRef.current;
    if (!scrollContainer) return;

    let index = 0;
    const interval = setInterval(() => {
      const nextScroll = index * scrollContainer.clientWidth;
      scrollContainer.scrollTo({ left: nextScroll, behavior: 'smooth' });
      index = (index + 1) % images.length;
    }, 5 * 1000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="project-image" ref={scrollRef}>
      {images.map(image => (
        <img key={`${title}-image`} src={`${process.env.PUBLIC_URL}${image}`} alt={title} />
      ))}
    </div>
  );
}

export default function Project() {
  return (
    <Content title="PROJECT">
      {projects.map(project => (
        <ProfileItem title={project.title} duration={project.duration} description={project.description} key={`project-${project.title}`}>
          <p className="profile-paragraph">{project.paragraph}</p>
        </ProfileItem>
      ))}
    </Content>
  );
}

ProjectImage.propTypes = {
  images: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
