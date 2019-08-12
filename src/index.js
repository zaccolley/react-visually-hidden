import VisuallyHidden from "./VisuallyHidden";

// handle server side rendering
if (typeof window === "undefined") {
  global.window = {};
}

export default VisuallyHidden;
