import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import ContactSupportIcon from '@material-ui/icons/ContactSupport';
import SettingsIcon from '@material-ui/icons/Settings';
import LockIcon from '@material-ui/icons/Lock';
import './SideNav.css'

const useStyles = makeStyles({
  list: {
    width: 250,
  },
});

function TemporaryDrawer() {
  const classes = useStyles();
  const [state, setState] = React.useState({
    left: false,
  });

  const toggleDrawer = (side, open) => event => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [side]: open });
  };

  const sideList = side => (
    <div
      className={classes.list}
      role="presentation"
      onClick={toggleDrawer(side, false)}
      onKeyDown={toggleDrawer(side, false)}
    >

      <divider/>
      <p>User Name comes here</p>
      <divider/>
      <List className="sideitems">
        {[<a  href="/GeneralSettings">General Settings</a>,<a  href="/Privacy">Privacy</a>].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 3 === 0 ? <SettingsIcon /> :  <LockIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List className="sideitems">

        {[<a  href="mailTo:ContactSupport@bookface.com">Support Inbox</a>,<a  href="/Feedback">Feedback</a>].map((text, index) => (

          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <MailIcon /> : <ContactSupportIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  
  return (
    <div>
      <img src={require("./menu.png")} onClick={toggleDrawer('left', true)}/>
      
      <Drawer open={state.left} onClose={toggleDrawer('left', false)}>
        {sideList('left')}
      </Drawer>
     
    </div>
  );
}

export default TemporaryDrawer;

