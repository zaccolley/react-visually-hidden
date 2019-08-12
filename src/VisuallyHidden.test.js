import React from "react";
import renderer from "react-test-renderer";
import VisuallyHidden from "./VisuallyHidden";

it("should render null for nothing sent", () => {
  const component = renderer.create(<VisuallyHidden />);
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should just render text", () => {
  const component = renderer.create(
    <VisuallyHidden>
      Hello this is text and should look like text
    </VisuallyHidden>
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});

it("should just render the text from various JSX elements", () => {
  const component = renderer.create(
    <VisuallyHidden>
      <h1>Hello</h1>{" "}
      <p>
        This is text and should <strong>look</strong> like text
      </p>
    </VisuallyHidden>
  );

  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
