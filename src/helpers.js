import React from "react";

export const getTextFromChildren = children => {
  let text = "";

  React.Children.forEach(children, child => {
    if (typeof child === "string") {
      text += child;
      return;
    }

    // if element has children get the text from it's children
    if (child.props.children) {
      text += getTextFromChildren(child.props.children);
    }
  });

  if (text.trim() === "") {
    return null;
  }

  return text;
};
