import React from "react";
import { render } from "@testing-library/react";
import UserProjectsForm from "..";

describe("<UserProjectsForm />", () => {
  it("renders correctly", () => {
    const { queryByText } = render(<UserProjectsForm />);
    expect(queryByText("User Projects")).toBeInTheDocument();
    expect(queryByText("Save")).toBeInTheDocument();
  });
});
