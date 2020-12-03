import React from "react";

export const PreviewJSON = ({ values }) => {
  return (
    <div>
      <pre>{JSON.stringify(values, null, 2)}</pre>
    </div>
  );
};

export default PreviewJSON;
