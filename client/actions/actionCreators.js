function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index
  }
}

function addComment(postId, author, comment) {
  return {
    type: 'ADD_COMMENT',
    postId,
    author,
    comment
  }
}

function removeComment(index, postId) {
  return {
    type: 'REMOVE_COMMENT',
    index,
    postId
  }
}
