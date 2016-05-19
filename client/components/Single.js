import React from 'react';

import Photo from './Photo';

const Single = React.createClass({
  render() {
    const index = this.props.posts.findIndex((post) => {
      return post.code === this.props.params.postId;
    });
    const post = this.props.posts[index];

    return (
      <div className="single-photo">
        <Photo index={index} post={post} {...this.props}></Photo>
      </div>
    );
  }
});

export default Single;
