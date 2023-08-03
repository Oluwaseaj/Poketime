import React from "react";
import { useParams } from 'react-router-dom';
import { connect } from "react-redux";

function withParams(Component) {
  return (props) => {
    
    const params = useParams() || {}; // Set default value to an empty object
    return <Component {...props} params={params} />;
  };

}

const Post = (props) => {

  const  handleClick= ()=> {
    props.deletePost(post.id);
    props.push('/')
  }
  
  const { post } = props; // Destructure the post prop received from mapStateToProps
  const postContent = post ? (
    <div className="post">
      <h4 className="center">{post.title}</h4>
      <p className="center">{post.body}</p>
    <div className="center">
      <button className="btn red" onClick={handleClick}>Delete Post</button>
    </div>
    </div>
  ) : (
    <div className="center">Loading Post</div>
  );

  return (
    <div className="container">
      {postContent}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  const { post_id } = ownProps.params;
  return {
    post: state.posts.find(post => post.id === (post_id)) // Assuming post ids are integers
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    deletePost: (id) => { dispatch({ type: 'DELETE_POST', id: id })  }
  }
}

export default withParams(connect(mapStateToProps, mapDispatchToProps)(Post));
