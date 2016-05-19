import React from 'react';

const Comments = React.createClass({
  render() {
    return (
      <div className="comments">
        {
          this.props.postComments.map(this.renderComment)
        }
      </div>
    );
  },

  renderComment(comment, index) {
    return (
      <div>
        <p>
          <strong>{comment.user}</strong>

          {comment.text}

          <button className="remove-comment">
            &times;
          </button>
        </p>
      </div>
    );
  }
});

export default Comments;
