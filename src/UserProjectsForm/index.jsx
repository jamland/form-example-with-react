import React, { useState } from "react";
// import "./styles.css";

import Form from "./components/Form";
import FieldSet from "./components/FieldSet";
import PreviewJSON from "./components/PreviewJSON";

/**
 * This component used as general container for other components
 * And aimed to handle top-level logic and API communication
 */

const UserProjectsForm = ({ initialValues }) => {
  const [showForm, setShowForm] = useState(true);

  const onFormSubmit = (values) => {
    console.log("Submiting... ", values);
  };

  const onToggleClick = (e) => {
    e.preventDefault();
    setShowForm((prevState) => !prevState);
  };

  return (
    <div style={{ maxWidth: "800px" }}>
      <h2>User Projects</h2>

      <Form onSubmit={onFormSubmit} initialValues={initialValues}>
        {({ values, handleInputChange, createNewProject }) => (
          <>
            {showForm ? (
              <>
                <FieldSet.Name onChange={handleInputChange} />

                <FieldSet.ProjectList
                  onChange={handleInputChange}
                  projects={values.projects}
                  createNewProject={createNewProject}
                />

                <FieldSet.ProjectDetailsList
                  projects={values.projects}
                  handleInputChange={handleInputChange}
                />
              </>
            ) : (
              <PreviewJSON values={values} />
            )}

            <div className="row">
              <div className="column">
                <a href="#" onClick={onToggleClick}>
                  Toggle View
                </a>
              </div>
              <div className="column" style={{ textAlign: "right" }}>
                <button type="submit">Save</button>
              </div>
            </div>
          </>
        )}
      </Form>
    </div>
  );
};

export default UserProjectsForm;
