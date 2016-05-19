import React from 'react';

const Comments = React.createClass({
  render() {
    return (
      <div className="comments">
        {
          this.props.postComments.map(this.renderComment)
        }

        <form ref="commentForm" className="comment-form">
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  },

  renderComment(comment, index) {
    return (
      <div>
        <p>
          <strong>{comment.user} </strong>

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
