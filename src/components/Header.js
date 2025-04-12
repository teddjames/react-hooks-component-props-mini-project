import React from "react";
import PropTypes from "prop-types";

function Header({ name }) {
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

Header.propTypes = {
  name: PropTypes.string.isRequired, // Optional: validate that name is a required string
};

export default Header;
