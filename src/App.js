import React from "react";

import "rbx/index.css";
import { Container } from "rbx";

import Nav from './components/Nav/Nav';
import ProjectCard from './components/ProjectCard/ProjectCard';

const App = () => (
  <Container>
    <Nav />
    <ProjectCard />
  </Container>
);

export default App;
