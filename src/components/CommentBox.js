import React ,{Component} from 'react'
import Cmt from './Cmt.js';
import CommentForm from './CommentForm';
import './Comment.css'


export default class CommentBox extends Component {
  constructor() {
    super();
    
    this.state = {
      showComments: false,
      comments: [
        {id: 1, author: "Sanjna", body: " i like this post "},
        {id: 2, author: "Akhil", body: "keep posting new stuff "},
        {id: 3, author: "Anudeep", body: "congrats"}
      ]
    };
  }
  
  render () {
    const comments = this.getComments();
    let commentNodes;
    let buttonText = 'Show Comments';
    
    if (this.state.showComments) {
      buttonText = 'Hide Comments';
      commentNodes = <div className="comment-list">{comments}</div>;
    }
    
    return(
      <div className="comment-box">
        <CommentForm addComment={this.addComment.bind(this)}/>
        <button className="showcmt" id="comment-reveal" onClick={this.handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Comments</h3>
        <h4 className="comment-count">
          {this.getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>  
    );
  } 
  
  addComment(author, body) {
    const comment = {
      id: this.state.comments.length + 1,
      author,
      body
    };
    this.setState({ comments: this.state.comments.concat([comment]) });
  }
  
  handleClick() {
    this.setState({
      showComments: !this.state.showComments
    });
  }
  
  getComments() {    
    return this.state.comments.map((comment) => { 
      return (
        <Cmt 
          author={comment.author} 
          body={comment.body} 
          key={comment.id} />
      ); 
    });
  }
  
  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No comments yet';
    } else if (commentCount === 1) {
      return "1 comment";
    } else {
      return `${commentCount} comments`;
    }
  }
} 
