import React from "react";
import PropTypes from "prop-types";
import Article from "./Article.js";

function ArticleList({ posts }) {
  return (
    <main>
      {posts.map((post) => (
        <Article key={post.id} {...post} />
      ))}
    </main>
  );
}

ArticleList.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default ArticleList;
