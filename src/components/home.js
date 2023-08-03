// import React, { useState } from "react";
// import axios from "axios";
import React from "react";
import { Link } from "react-router-dom";
import Pokeball from "../pokeball.png";
import { connect } from "react-redux";

const Home = ({ posts }) => {
  const postList = posts.length ? (
    posts.map((post) => (
      <div className="post card" key={post.id}>
        <img src={Pokeball} alt="A pokeball used as a representation" />
        <div className="card-content">
          <Link to={`/post/${post.id}`}>
            <span className="card-title">{post.title}</span>
          </Link>
          <p>{post.body}</p>
        </div>
      </div>
    ))
  ) : (
    <div className="center">No Post Yet</div>
  );

  return (
    <div className="container">
      <h4 className="center">Home</h4>
      {postList}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    posts: state.posts
  };
};

export default connect(mapStateToProps)(Home);
