import React from "react";

const DeveloperContext = React.createContext({
  title: "Test Title",
  description: "Test Description",
  thumbnail:"Test Image",
  href: "Test URL",
});

export default DeveloperContext;
