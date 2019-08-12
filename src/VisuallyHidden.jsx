import React from "react";
import PropTypes from "prop-types";
import { getTextFromChildren } from "./helpers";
import styles from "./styles.css";

const VisuallyHidden = ({ children }) => {
  if (!children) {
    return null;
  }

  const content = getTextFromChildren(children);

  if (!content) {
    return null;
  }

  return <span className={styles.visuallyHidden}>{content}</span>;
};

VisuallyHidden.propTypes = {
  children: PropTypes.node
};

VisuallyHidden.defaultProps = {
  children: null
};

export default VisuallyHidden;
