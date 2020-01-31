import React from 'react';
import "rbx/index.css";
import { Container } from "rbx";
import ProjectCard from "./ProjectCard"

const ProjectCardList = ({ database }) => {
    // console.log(projects);
    // return (
    // projects.map(project => <ProjectCard project={project}></ProjectCard>)
    // )
    const companies = database[0];
    const projects = database[1];
    return (
        <Container>
            {Object.values(projects).map(project => (
                <ProjectCard project={project} companies={companies}></ProjectCard>
            ))}
        </Container>
    )
};

export default ProjectCardList;
