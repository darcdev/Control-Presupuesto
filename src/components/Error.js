import React from "react";

const Error = ({ children }) => {
  return <p className="alert alert-danger error ">{children}</p>;
};

export default Error;
