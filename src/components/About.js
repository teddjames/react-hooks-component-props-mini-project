import React from "react";
import PropTypes from "prop-types";

function About({ image, about }) {
  const imageSrc = image || "https://via.placeholder.com/215";
  return (
    <aside>
      <img src={imageSrc} alt="blog logo" />
      {about && about.trim() !== "" && <p>{about}</p>}
    </aside>
  );
}

About.propTypes = {
  image: PropTypes.string,
  about: PropTypes.string,
};

export default About;
