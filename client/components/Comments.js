import React from 'react';

const Comments = React.createClass({
  render() {
    return (
      <div className="comments">
        {
          this.props.postComments.map(this.renderComment)
        }

        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  },

  handleSubmit(event) {
    event.preventDefault();

    const {postId} = this.props.params;

    const author = this.refs.author.value;
    const comment = this.refs.comment.value;

    this.props.addComment(postId, author, comment);
    this.refs.commentForm.reset();
  },

  renderComment(comment, index) {
    return (
      <div>
        <p>
          <strong>{comment.user} </strong>

          {comment.text}

          <button onClick=
            {
              this.props.removeComment.bind(null, index, this.props.params.postId)
            }
            className="remove-comment">
            &times;
          </button>
        </p>
      </div>
    );
  }
});

export default Comments;
