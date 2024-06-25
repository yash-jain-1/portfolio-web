import React from 'react';
import './Styling/Projects.css';

const projects = [
    {
        title: "Project One",
        description: "A brief description of Project One.",
        image: "path/to/project-one-image.jpg",
        github: "https://github.com/yourusername/project-one"
    },
    {
        title: "Project Two",
        description: "A brief description of Project Two.",
        image: "path/to/project-two-image.jpg",
        github: "https://github.com/yourusername/project-two"
    },
    {
        title: "Project Three",
        description: "A brief description of Project Three.",
        image: "path/to/project-three-image.jpg",
        github: "https://github.com/yourusername/project-three"
    }
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>My Projects</h2>
            <div className="projects-container">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.image} alt={`${project.title} preview`} className="project-image" />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <a href={project.github} target="_blank" rel="noopener noreferrer" className="github-link">
                            View on GitHub
                        </a>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Projects;
