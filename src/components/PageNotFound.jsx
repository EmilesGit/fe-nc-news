import React from "react";
import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <div>
      <img
        src="https://cdn.dribbble.com/users/226011/screenshots/2424315/media/aaa60ee1be085cf4360a7ce601a14aae.png?compress=1&resize=768x576&vertical=top"
        alt="404 Page not found..."
      />
      <p style={{ textAlign: "center" }}>
        <Link to="/">Go to Home </Link>
      </p>
    </div>
  );
};
