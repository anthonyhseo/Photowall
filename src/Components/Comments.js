import React, { Component } from 'react';

class Comments extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const comment = e.target.elements.comment.value;
    e.target.elements.comment.value = '';
    this.props.startAddingComment(comment, this.props.id);
  }

  render() {
    console.log(this.props.comments);
    return (
      <div className="comment">
        {this.props.comments.map((comment, i) => {
          return <p key={i}>{comment}</p>;
        })}
        <form className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" placeholder="comment" name="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
}

export default Comments;
