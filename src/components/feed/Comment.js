import React from 'react'
import './UserFeed.css'
import ReviewBox from '../CommentBox'
import CommentIcon from '@material-ui/icons/Comment';
import '../feed/UserFeed.css'


class Comment extends React.Component {
    state = {

      showMe: false
    };
  
   
   
    operation () {
        this.setState({
            showMe:!this.state.showMe
        })
    }
  
    render() {
      return (
        <React.Fragment>
          { /* handlePost() is called when the form is submitted */ }
         
    
            <div className="cmt">
              <li   onClick={()=>this.operation()}><CommentIcon/>Comment</li>
            </div>
         
    
          <div> 
  {
      this.state.showMe?
 <div>
           
          <div >
              <ReviewBox />

          </div>
         
          

            {/* <Button className={classes.button} variant="contained" ><ThumbUpIcon/>Like</Button>
            <Button className={classes.button} variant="contained" ><ThumbDownIcon/>Dislike</Button>
            <Button className={classes.button} variant="contained" ><CommentIcon/>Comment</Button> */}
           
        </div>

     
     :null
     }
     </div>
        </React.Fragment>
      );
    }
  }

        

export default Comment;