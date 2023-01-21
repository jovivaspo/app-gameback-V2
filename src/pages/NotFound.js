import React from "react";
import { Link } from "react-router-dom";
const DOMAIN = process.env.REACT_APP_DOMAIN;

const NotFound = () => {
  return (
    <div className="container-fluid p-5">
      <h2 className="subtitle text-white">Not Found 404</h2>
      <p className="text-white font-weight-bold m-3">
        Sorry, welcome to your <Link to={DOMAIN}>Backlog</Link>{" "}
      </p>
    </div>
  );
};

export default NotFound;
