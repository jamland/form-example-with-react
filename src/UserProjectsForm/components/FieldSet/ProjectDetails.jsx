import React from "react";

export const ProjectDetails = ({ project, index, onChange }) => {
  return (
    <fieldset style={{ background: "#f8f8f8", padding: "1em" }}>
      <select name={`projects[${index}].title`}>
        <option value={project.title}>{project.title}</option>
      </select>

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
          <select name={`projects[${index}].duration.units`}>
            <option value={project.duration?.units}>
              {project.duration?.units}
            </option>
          </select>
        </div>
      </div>
    </fieldset>
  );
};
