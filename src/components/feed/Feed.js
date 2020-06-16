import React from "react"
import UserFeed from './UserFeed' 
import UsersData from './UsersData' 
import { Container} from '@material-ui/core'
import NavHome from '../NavHome'
import Post from './Post'
import './UserFeed.css'

function Feed(){
    const Users = UsersData.map(user => <UserFeed key={user.id} UsersData={user}/>)
   
     return (
    <div>
        <div>
        <NavHome />
        </div>
        <div className="outerpost">
        <Container className="postbody" maxWidth="sm">
        <div className="post">
            <Post />
        </div>
        </Container>
        </div>

        <div className="spacer">
           {Users}
       </div>
     </div>
    )
}

export default Feed;