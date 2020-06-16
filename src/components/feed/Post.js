import React from 'react'
import { Container} from '@material-ui/core'
import './UserFeed.css'
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Likes from './Likes'
import Avatar from '@material-ui/core/Avatar';
import Comment from './Comment'

class Post extends React.Component {
    state = {
      /*  Initial State */
      input: "",
      showMe: false
    };
  
    /* handleChange() function to set a new state for input */
    handleChange = event => {
      const value = event.target.value;
      this.setState({
        input: value
      });
    };
  
    /* handlePost() function to get the input and set that as new state for post */
    handlePost = event => {
      event.preventDefault();
      const text = this.state.input;
      this.setState({
        postText: text
          
      });
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
          <form onSubmit={this.handlePost} >
          <div className="form-body">
            <div >
             { /* handleChange() is triggered when text is entered */ }
              <input
                type="text"
                value={this.state.input}
                className="form-control"
                onChange={this.handleChange}
                placeholder=  "Hey! What's on your mind?"
              />
            </div>
            <div>
              <button className="postbtn" onClick={()=>this.operation()}>Post</button>
            </div>
            </div>
          </form>
    
          <div> 
  {
      this.state.showMe?
 <div className="outerbody">
     <Container className="mainbody" maxWidth="xl">
        
       <Card className="maincard1">
        <div>
       
        <div classname="prof" >
          <div className="dp">
            <Avatar alt="Remy Sharp" src={require('./about.jpg')} />
          </div >
            <h3 className="username">@Akhilarra</h3>
          </div>
            
            <Divider/>
            <div className="card-body">
            <h3 className="cardpost">{this.state.postText} </h3>
            </div>
            <Divider />
           
          <div >
              <Likes />

          </div>
          <div>
            <Comment />
          </div>
         
          

            {/* <Button className={classes.button} variant="contained" ><ThumbUpIcon/>Like</Button>
            <Button className={classes.button} variant="contained" ><ThumbDownIcon/>Dislike</Button>
            <Button className={classes.button} variant="contained" ><CommentIcon/>Comment</Button> */}
           
        </div>
        </Card>
    </Container>
    </div>
     
     :null
     }
     </div>
        </React.Fragment>
      );
    }
  }

        

export default Post;