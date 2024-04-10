import React from 'react';

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: 'Project 1',
      description: 'This is a description of Project 1.',
      image: 'project1.jpg',
    },
    {
      id: 2,
      title: 'Project 2',
      description: 'This is a description of Project 2.',
      image: 'project2.jpg',
    },
    {
      id: 3,
      title: 'Project 3',
      description: 'This is a description of Project 3.',
      image: 'project3.jpg',
    },
  ];

  return (
    <div>
      <h1>My Portfolio</h1>
      <div>
        {projects.map((project) => (
          <div key={project.id}>
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
