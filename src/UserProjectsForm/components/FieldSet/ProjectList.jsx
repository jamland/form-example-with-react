import React, { useState } from "react";

export const ProjectList = ({ projects, createNewProject }) => {
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      const value = e.target.value;
      createNewProject(value);
    }
  };

  return (
    <>
      <h5>Projects</h5>
      <div className="row">
        {projects.map((el, index) => (
          <div className="column" key={el + index}>
            <input
              placeholder="Projects"
              name="project-list"
              value={el.title}
              disabled
              readOnly
            />
          </div>
        ))}

        <input
          placeholder="Enter..."
          name="new-project"
          onKeyDown={handleKeyDown}
        />
      </div>
    </>
  );
};
