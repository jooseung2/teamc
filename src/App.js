import React, { useEffect, useState } from "react";

import "rbx/index.css";
import { Container } from "rbx";

import Nav from './components/Nav/Nav';
import ProjectCard from './components/ProjectCard/ProjectCard';
import ProjectCardList from './components/ProjectCard/ProjectCardList';

const App = () => {
  const [data, setData] = useState({});
  const [dataLoaded, setLoaded] = useState(false);
  const database = Object.values(data);

  useEffect(() => {
    const fetchProjects = async () => {
      const response = await fetch('./data/data.json');
      const json = await response.json();
      setData(json);
      setLoaded(true);
    };
    fetchProjects();
  }, [])

  return dataLoaded ?
    (
      <Container>
        <Nav />
        <ProjectCardList
          database={database}
        />
      </Container>)
    : (<p>loading hehehe</p>);
};

export default App;
