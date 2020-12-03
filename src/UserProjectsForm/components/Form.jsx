import React, { useState } from "react";

const newProejctTemplate = {
  title: "",
  description: "",
  duration: {
    value: "",
    units: ""
  }
};

/**
 * This is container for form related logic
 */

const Form = ({ onSubmit, initialValues, children }) => {
  const [values, setValues] = useState(initialValues || {});
  // TODO: error handling
  const [errors, setError] = useState({});

  const handleInputChange = (e) => {
    const value = e.target.value;
    const name = e.target.name;

    if (name === "name") {
      setValues((prevState) => ({
        ...prevState,
        [name]: value
      }));
    } else {
      // parse for value path
      // name looks like this `projects[${index}].description`
      const field = name.split(".")[1];
      const index = +name.match(/\[(.*?)\]/)[1];

      const updatedProjects = values.projects.map((el, idx) => {
        if (idx === index) {
          return {
            ...el,
            [field]: value
          };
        } else return el;
      });

      setValues((prevState) => ({
        ...prevState,
        projects: updatedProjects
      }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(values);
  };

  const createNewProject = (value) => {
    setValues((prevState) => ({
      ...prevState,
      projects: [
        ...prevState.projects,
        {
          ...newProejctTemplate,
          title: value
        }
      ]
    }));
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        {children?.({ values, handleInputChange, createNewProject })}
      </form>
    </>
  );
};

export default Form;
