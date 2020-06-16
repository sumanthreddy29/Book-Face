import React ,{Component} from 'react'
import Review from './Review.js';
import ReviewForm from './ReviewForm';
import './Review.css'
import NavHome from './NavHome'


export default class ReviewBox extends Component {
  constructor() {
    super();
    
    this.state = {
      showComments: false,
      comments: [
        {id: 1, author: "Sanjna", body: "  In love with the website structure and design "},
        {id: 2, author: "Akhil", body: "Eye catching website "},
        {id: 3, author: "Anudeep", body: "Color palette is attractive to the eye"}
      ]
    };
  }
  
  render () {
    const comments = this.getComments();
    let commentNodes;
    let buttonText = 'Show Feedbacks';
    
    if (this.state.showComments) {
      buttonText = 'Hide Feedbacks';
      commentNodes = <div className="review-list">{comments}</div>;
    }
    
    return(
      <div className="review-fullbox"><NavHome />
      <div className="review-box">
        <h2>Thank you for sharing your experience with us!</h2>
        <ReviewForm addComment={this.addComment.bind(this)}/>
        <button id="review-reveal" onClick={this.handleClick.bind(this)}>
          {buttonText}
        </button>
        <h3>Feedbacks</h3>
        <h4 className="review-count">
          {this.getCommentsTitle(comments.length)}
        </h4>
        {commentNodes}
      </div>  
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
        <Review 
          author={comment.author} 
          body={comment.body} 
          key={comment.id} />
      ); 
    });
  }
  
  getCommentsTitle(commentCount) {
    if (commentCount === 0) {
      return 'No Feedbacks yet';
    } else if (commentCount === 1) {
      return "1 Feedback";
    } else {
      return `${commentCount} Feedbacks`;
    }
  }
} 
