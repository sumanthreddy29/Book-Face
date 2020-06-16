import React ,{Component} from 'react'
import './Review.css'


export default class ReviewForm extends Component {
  handleSubmit(event) { 
    event.preventDefault();
    let author = this.author;
    let body = this.body;
    this.props.addComment(author.value, body.value);
  }
    render() {
      return (
        <div>
        <form className="review-form" onSubmit={this.handleSubmit.bind(this)}>
          <div>
          <div className="review-form-fields">
            <input placeholder="Name" required ref={(input) => this.author = input}></input>
            <br />
            <textarea placeholder="Feedback" rows="4" required ref={(textarea) => this.body = textarea}></textarea>
          </div>
          <div className="review-form-actions">
            <button type="submit">Post Feedback</button>
          </div>
          </div>
        </form>
        </div>
       
      );
    } 
    
    
  } 
  
  