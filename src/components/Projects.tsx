import { FC } from 'react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  link?: string;
  github?: string;
}

interface ProjectsProps {
  projects: Project[];
}

const Projects: FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="space-y-8 animate-slide-up">
      <h2 className="section-title">Notable Projects</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div
            key={index}
            className="card group hover:scale-[1.02] transition-transform duration-300"
          >
            <h3 className="text-xl font-semibold text-primary dark:text-white mb-2">
              {project.title}
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-4">
              {project.technologies.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-gray-100 dark:bg-dark-lighter rounded-full text-sm text-gray-700 dark:text-gray-300"
                >
                  {tech}
                </span>
              ))}
            </div>
            
            <div className="flex space-x-4">
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <i className="fas fa-external-link-alt mr-2" />
                  Live Demo
                </a>
              )}
              {project.github && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn bg-gray-800 text-white hover:bg-gray-700"
                >
                  <i className="fab fa-github mr-2" />
                  View Code
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
