import React,{Component} from 'react';
import './GeneralSettings.css'
import Paper from '@material-ui/core/Paper';
import NavHome from './NavHome'
import EditIcon from '@material-ui/icons/Edit';
import { Container, Divider } from '@material-ui/core';

    
class App extends Component{
  
  render(){

      return  <div>

      <NavHome />
      <div className="gene">
        <Container>
      <Paper  className="genebody" >
          <h2 className="general">General Account Settings</h2>
          <hr></hr>
        <div style={{ display: 'flex'}}>
          <p style={{marginLeft: '1rem',marginRight: '1rem', width: '10rem'}}>Name</p>
          <p style={{marginRight: '1rem', width: '20rem'}}>Group3</p>
          <a  href="" style={{paddingTop:'1rem',color:'blue'}} >edit <EditIcon color="primary"/> </a>
        </div>
        <Divider/>

          <div style={{ display: 'flex'}}>
            <p style={{marginLeft: '1rem',marginRight: '1rem', width: '10rem'}}>Username</p>
            <p style={{marginRight: '1rem', width: '20rem'}}>@Group3</p>
            <a href="" style={{paddingTop:'1rem',color:'blue'}}>edit <EditIcon color="primary" /></a>
          </div>
          <Divider/>
          <div style={{ display: 'flex'}}>
            <p style={{marginLeft: '1rem',marginRight: '1rem', width: '10rem'}}>Password</p>
            <p style={{marginRight: '1rem', width: '20rem'}}>******</p>
            <a href="" style={{paddingTop:'1rem',color:'blue'}}>edit<EditIcon color="primary"/></a>
          </div>
          <Divider/>
          <div style={{ display: 'flex'}}>
            <p style={{marginLeft: '1rem',marginRight: '1rem', width: '10rem'}}>Birthday</p>
            <p style={{marginRight: '1rem', width: '20rem'}}>01/26/1996</p>
            <a href="" style={{paddingTop:'1rem',color:'blue'}}>edit<EditIcon color="primary"/></a>
          </div>
      
      </Paper>
      </Container>
      </div>
    </div>
      
      
     
    }
  
}
    
export default App;
 
