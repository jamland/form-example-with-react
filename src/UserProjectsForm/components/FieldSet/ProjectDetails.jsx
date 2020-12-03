import React from "react";

export const ProjectDetails = ({ project, index, onChange }) => {
  return (
    <fieldset style={{ background: "#f8f8f8", padding: "1em" }}>
      <input
        name={`projects[${index}].title`}
        placeholder="Title"
        type="text"
        onChange={onChange}
        value={project.title}
      />

      <textarea
        name={`projects[${index}].description`}
        onChange={onChange}
        value={project.description}
        placeholder="Details"
      />

      <div className="row">
        <div className="column">
          <input
            placeholder="Value"
            type="number"
            name={`projects[${index}].duration.value`}
            onChange={onChange}
            value={project.duration?.value}
            disabled
          />
        </div>
        <div className="column">
          <input
            placeholder="Units"
            type="text"
            name={`projects[${index}].duration.units`}
            onChange={onChange}
            value={project.duration?.units}
            disabled
          />
        </div>
      </div>
    </fieldset>
  );
};
