import React ,{Component} from 'react'
import './Review.css'

export default class Review extends Component {
    render () {
      return(
        <div className="Review">
          <p className="review-header">{this.props.author}</p>
          <p className="review-body">- {this.props.body}</p>
        </div>
      );
    }
  }
  
  
  