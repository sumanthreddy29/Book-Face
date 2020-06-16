import React, { Component } from 'react';
import './Profilepage.css';
import woman from './woman.jpeg';
import { Container, Row, Col } from 'reactstrap';
import { FaBirthdayCake,FaCalendarAlt} from 'react-icons/fa';
import Tweets from'./Tweets';
import Likes from './likes';
import { Grid,Paper } from '@material-ui/core';
import {  NavLink,  HashRouter,Route} from "react-router-dom";
import NavHome from './NavHome'
class Profilepage extends Component {
  constructor(props){
    super(props);
    this.state={
    follower:5,
    following:10
    }
    }
    
  render() {
    return (
      <div className="outerbody1">
          <HashRouter>
      <div className="Appli">
        <NavHome/>
      <Grid container spacing={0}  >
        <Grid item  xs={4} className="App-header">
             <h2>Profile</h2>
          <Paper>
              <Container  className="part1">
       <Row>
           <Col>  <img src={woman} className="App-logo" alt="logo" /></Col></Row>
        <Row>
            <Col><h2>@Group3</h2></Col></Row>
        <Row>
          <Col><h2>Group3</h2> </Col>
        </Row>
        <Row>
          <Col><FaBirthdayCake />&nbsp; January 26,1996 &nbsp;<FaCalendarAlt/>&nbsp;Joined October 2019</Col>
       </Row>
        <br/>
         <Row>
          <Col>{this.state.follower} &nbsp; Followers &nbsp;{this.state.following}&nbsp;Following</Col>
       </Row>
        <Row><Col>
          <ul className="header">
            <li><NavLink exact to="/tweets">Tweets</NavLink> </li>
              <li><NavLink to="/likes" >Likes</NavLink></li>
          </ul>
        </Col></Row></Container>

          </Paper>
        </Grid>
        <Grid item xs={8} className={"part2"}>
            <Paper >
                 <div className="content">
              <Route path="/tweets" component={Tweets}/>
              <Route path="/likes" component={Likes}/>
             </div>

          </Paper>
        </Grid>

      </Grid>
        </div>
          </HashRouter>
          </div>
    );
  }
}


export default Profilepage;
