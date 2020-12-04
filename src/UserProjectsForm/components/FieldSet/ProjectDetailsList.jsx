import React from "react";

import { ProjectDetails } from "./ProjectDetails";

export const ProjectDetailsList = ({
  projects,
  handleInputChange,
  createNewProject
}) => {
  return (
    <div>
      <h5>
        Project Details <button onClick={() => createNewProject()}>ADD</button>
      </h5>

      <div style={{ display: "flex", flexDirection: "column-reverse" }}>
        {!!projects &&
          projects.map((el, index) => (
            <ProjectDetails
              key={el.title + index}
              onChange={handleInputChange}
              project={projects[index]}
              index={index}
            />
          ))}
      </div>
    </div>
  );
};
