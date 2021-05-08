import React from "react";

import { Link } from "react-router-dom";
import { Jumbotron, Button } from "react-bootstrap";

const Footer = () => {
  return (
    <Jumbotron>
      <h1>Ovo je footer</h1>
      <p>Link na nepostojeću stranicu</p>
      <p>
        <Button variant="primary">
          <Link to="/uuu">Learn more</Link>
        </Button>
      </p>
    </Jumbotron>
  );
};

export default Footer;
