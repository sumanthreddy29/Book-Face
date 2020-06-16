import React from 'react'
import { Container, makeStyles } from '@material-ui/core'
import './UserFeed.css'
import Divider from '@material-ui/core/Divider';
import Card from '@material-ui/core/Card';
import Button from '@material-ui/core/Button';
import Avatar from '@material-ui/core/Avatar';
import Likes from './Likes'
import Comment from './Comment'



const useStyles = makeStyles(theme => ({
    button: {
      margin: theme.spacing(1),
    },
    input: {
      display: 'none',
    },
    bigAvatar: {
        margin: 10,
        width: 60,
        height: 60,
      },
  }));
  

   


function User(props) {
    const classes = useStyles();
    return (
    <div className="outerbody">
     <Container className="mainbody" maxWidth="sm">
        
       <Card className="maincard">
        <div>
       
        <div classname="prof" >
          <div className="dp">
            <Avatar alt="Remy Sharp" src={require('./woman.jpeg')} className={classes.bigAvatar} />
          </div >
            <h3 className="username">@{props.UsersData.name}</h3>
          </div>
            
            <Divider/>
            <div className="card-body">
            <h3>{props.UsersData.post} </h3>
            </div>
            <Divider />
          <div >
              <Likes />

          </div>
          <Divider />
          <div >
              <Comment />

          </div>

            {/* <Button className={classes.button} variant="contained" ><ThumbUpIcon/>Like</Button>
            <Button className={classes.button} variant="contained" ><ThumbDownIcon/>Dislike</Button>
            <Button className={classes.button} variant="contained" ><CommentIcon/>Comment</Button> */}
           
        </div>
        </Card>
    </Container>
    </div>
    )
}

export default User;