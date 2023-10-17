import React from "react";

interface Project {
  imageSrc: string;
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
          {project.imageSrc === "Coming Soon" ? (
            <div className="comingSoonText">Coming Soon</div>
          ) : (
            <img src={project.imageSrc} alt={project.title} />
          )}
          <h3>{project.title}</h3>
          <h5>{project.description}</h5>
        </div>
      </div>
      <div className="face face2">
        <div className="content">
          <div className="projectTasks">
            <h4>What I did :</h4>
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
