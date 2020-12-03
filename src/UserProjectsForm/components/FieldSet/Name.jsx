import React from "react";

export const Name = ({ onChange }) => {
  return (
    <div>
      <h5>Name</h5>
      <input placeholder="Name" name="name" onChange={onChange} required />
    </div>
  );
};
