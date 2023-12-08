import React from "react";

interface Project {
  imageSrc: {
    small: string;
    medium: string;
    large: string;
    // Add more sizes if needed
  };
  title: string;
  description: string;
  tasks: string[];
  websiteLink?: string;
  codeLink: string;
}

const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
  return (
    <div className="card">
      <div className="face face1">
        <div className="content">
          {project.imageSrc.small === "Coming Soon" ? (
            <div className="comingSoonText">Coming Soon</div>
          ) : (
            <img
              src={project.imageSrc.small}
              srcSet={`${project.imageSrc.small} 500w, ${project.imageSrc.medium} 1000w, ${project.imageSrc.large} 2000w`}
              sizes="(max-width: 500px) 500px, (max-width: 1000px) 1000px, 2000px"
              alt={project.title}
            />
          )}
          <h3>{project.title}</h3>
          <h4>{project.description}</h4>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <div className="projectTasks">
            <h3>What I did :</h3>
            <ul className="projectTasksList">
              {project.tasks.map((task, index) => (
                <li key={index}>{task}</li>
              ))}
            </ul>
          </div>
          {project.websiteLink && (
            <a
              href={project.websiteLink}
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >
              The Website
            </a>
          )}
          {project.codeLink && (
            <a
              href={project.codeLink}
              target="_blank"
              rel="noopener noreferrer"
              className="projectButton"
            >
              The Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
