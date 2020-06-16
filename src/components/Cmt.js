import React ,{Component} from 'react'
import './Comment.css'

export default class Cmt extends Component {
    render () {
      return(
        <div className="comment">
          <p className="comment-header">{this.props.author}</p>
          <p className="comment-body">- {this.props.body}</p>
        </div>
      );
    }
  }
  
  
  
