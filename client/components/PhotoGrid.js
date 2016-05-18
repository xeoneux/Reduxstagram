import React from 'react';

import Photo from './Photo';

const PhotoGrid = React.createClass({
  render() {
    return (
      <div className="photo-grid">
        {
          this.props.posts.map((post, index) => {
            return (
              <Photo {...this.props} key={index} post={post} index={index} />
            );
          })
        }
      </div>
    );
  }
});

export default PhotoGrid;
