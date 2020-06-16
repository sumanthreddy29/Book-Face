import React ,{Component} from 'react'
import './Comment.css'

export default class CommentForm extends Component {
  handleSubmit(event) { 
    event.preventDefault();
    let author = this.author;
    let body = this.body;
    this.props.addComment(author.value, body.value);
  }
    render() {
      return (
       
        <form className="comment-form" onSubmit={this.handleSubmit.bind(this)}>
          <div className="comment-form-fields">
            {/* <input placeholder="Username" required ref={(input) => this.author = input}></input><br /> */}
            <textarea placeholder="Comment" rows="4" required ref={(textarea) => this.body = textarea}></textarea>
          </div>
          <div className="comment-form-actions">
            <button className="postbutton" type="submit">Post Comment</button>
          </div>
        </form>
       
      );
    } 
    
    
  } 
  
  
