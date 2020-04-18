import React from "react";

// This is copy and pasted from past weeks activity and is exporting the Container, Row, and Col components to be re-useable in all of the pages we want to use them in 
// These can and should be adjusted to whatever layout we'd like I just have it here as an example to work from 

// This Container component allows us to use a bootstrap container without worrying about class names
export function Container({ fluid, children }) {
  return <div className={`container${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Row component lets us use a bootstrap row without having to think about class names
export function Row({ fluid, children }) {
  return <div className={`row${fluid ? "-fluid" : ""}`}>{children}</div>;
}

// This Col component lets us size bootstrap columns with less syntax
// e.g. <Col size="md-12"> instead of <div className="col-md-12">
export function Col({ size, children }) {
  return (
    <div
      className={size
        .split(" ")
        .map(size => "col-sm" + size)
        .join(" ")}
    >
      {children}
    </div>
  );
}