import React from 'react';
import UserFeed from './UserFeed'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import CommentIcon from '@material-ui/icons/Comment';
import Divider from '@material-ui/core/Divider';
import './UserFeed.css'


class Likes extends React.Component {

    /**
     * Override the constructor of 'React.Component'.
     * 
     * By default, the constructor gets a referenct to the props that were passed in to this component.
     * Pass the props through the super method.
     */
    constructor(props) {
        super(props);

        // Set up the initial state
        // Note: Do not set 'this.state' equal to anything after this, always use 'this.setState()' to update state
        this.state = {

            likes: 0,
            dislikes: 0,
        };

        // In order to get a reference to 'this' in the 'handleHeadingClick' function, we must "bind" it here
        this.handleHeadingClick = this.handleHeadingClick.bind(this);
        this.handleDislikeClick = this.handleDislikeClick.bind(this);
      
    }

    /**
     * This function will get a reference to the current state value of 'clicks' and then increment it.
     * 
     * This will automatically trigger the 'render' function to be called again so that the updated value
     * of 'clicks' is shown to the user. 
     */
    handleHeadingClick() {

        const { likes } = this.state;

        this.setState({ likes: likes + 1 });


    }
    handleDislikeClick(){
        const { dislikes } = this.state;

        this.setState({ dislikes: dislikes + 1 });


    }

    

        /**
     * Overriden from 'React.Component' but we do not need to call the super method here.
     */
    render() {

        // Get the current value of 'clicks' from the state. When 'clicks' is updated, this whole function will be called again
        const { likes } = this.state;
        const { dislikes } = this.state;



        // Show a heading which will invoke 'this.handleHeadingClick' when clicked
        // Note: The function 'this.handleHeadingClick' is passed to 'h1' through the prop 'onClick'
        
        return( 
        <div> 
          <div className="likescount"> 
            <h4 className="like">{likes} Likes</h4>
            <h4 className="dis">{dislikes} Dislikes</h4>
         </div>
         <Divider />
         <div className="likes">
            <li onClick={this.handleHeadingClick}><ThumbUpIcon/>Like</li>
            <li onClick={this.handleDislikeClick}><ThumbDownIcon/> Dislike</li>
        </div>
        </div>

        )
    }
}

export default Likes;

