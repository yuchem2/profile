import { GithubIcon, NotionIcon } from './icon/logo';

export default function PortfolioItem({ project }) {
  const getIcon = name => {
    if (name.includes('Github')) {
      return <GithubIcon width="1.6rem" height="1.6rem" />;
    }
    if (name.includes('Notion')) {
      return <NotionIcon width="1.6rem" height="1.6rem" />;
    }
    return null;
  };

  return (
    <div className="project-main">
      <div className="project-block">
        <span className="project-header">{project.title}</span>
        <div className="project-content">
          <p dangerouslySetInnerHTML={{ __html: project.description }} />
          <div className="project-links">
            {project.links.map(link => (
              <a href={link.href} target="_blank" rel="noreferrer" key={link.name}>
                {getIcon(link.name)}
                <span>{link.name}</span>
              </a>
            ))}
          </div>
          <span>{project.duration}</span>
          <span>{project.team}</span>
        </div>
        <span className="project-header">내가 기여한 부분</span>
        <div className="project-content">
          {project.contributions.map(contribution => (
            <div className="project-content-items" key={contribution.title}>
              <span>{contribution.title}</span>
              <ul>
                {contribution.tasks.map(task => (
                  <li key={task} dangerouslySetInnerHTML={{ __html: task }} />
                ))}
              </ul>
            </div>
          ))}
        </div>
        <span className="project-header">사용기술</span>
        <div className="project-content-items">
          <ul>
            {project.techStack.map(tech => (
              <li key={tech.name}>
                {tech.name} - {tech.reason}
              </li>
            ))}
          </ul>
        </div>
      </div>
      {/*<div className="project-photos">*/}
      {/*  {project.photos.map((photo) => (*/}
      {/*    <div key={photo.alt}>*/}
      {/*      <img src={`${process.env.PUBLIC_URL}${photo.src}`} alt={photo.alt} />*/}
      {/*      <span>{photo.caption}</span>*/}
      {/*    </div>*/}
      {/*  ))}*/}
      {/*</div>*/}
    </div>
  );
}
