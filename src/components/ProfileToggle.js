import React,{List} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import { grey } from '@material-ui/core/colors';
import { Divider } from '@material-ui/core';
import './ProfileToggle.css'

const useStyles = makeStyles(theme => ({
  root: {
    position: 'relative',
  },
  paper: {
    position: 'absolute',
    top: 45,
    right: -10,
    left: -10,
  
  },
}));

export default function ClickAway() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();

  const handleClick = () => {
    setOpen(prev => !prev);
  };

  const handleClickAway = () => {
    setOpen(false);
  };

  

  return (
    <div className={classes.root}>
      <ClickAwayListener onClickAway={handleClickAway}>
        <div>
          <Button onClick={handleClick}>Profile</Button>
          {open ? (
            <Paper className={classes.paper}>
            <a className="droplist1" href="/Profilepage">My Account</a>
            <br/><br/>
            <Divider />
            <a className="droplist2" href="/">  Logout</a>
            <br/><br/>
            </Paper>
          ) : null}
        </div>
      </ClickAwayListener>
    </div>
  );
}
