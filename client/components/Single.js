import React from 'react';

import Photo from './Photo';
import Comments from './Comments';

const Single = React.createClass({
  render() {
    const {postId} = this.props.params;

    const index = this.props.posts.findIndex((post) => {
      return post.code === postId;
    });

    const post = this.props.posts[index];
    const postComments = this.props.comments[postId] || [];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props}></Photo>
        <Comments postComments={postComments} />
      </div>
    );
  }
});

export default Single;
