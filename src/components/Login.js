import React, { Component } from "react";
import "./Login.css";
import Link from '@material-ui/core/Link';
import NavBar from './NavBar'
import Typography from '@material-ui/core/Typography';
import {Redirect} from 'react-router-dom'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
    {'Copyright © '}
    <Link color="inherit" href="./">BookFace </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
    </Typography>
     );
  }

const emailRegex = RegExp(
  /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
);

const formValid = ({ formErrors}) => {
  let valid = true;

  // validate form errors being empty
 Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  
  return valid;
};


class register extends Component {
  constructor(props) {
    let loggedIn = false
    super(props);
    this.state = {
      email: null,
      password: null,
      loggedIn,
      formErrors: {
        email: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    const { email, password } = this.state;

        if(email === "group3@gmail.com" && password === "group3"){

            this.setState({
              loggedIn: true
            })
        }
  };

  handleChange = e => {
    e.preventDefault();
   
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value })
  };

  render() {

    const {email} = this.props;

    if (this.state.loggedIn){
        return <Redirect to="/home" />
    }
    const { formErrors } = this.state;

    return (
        <div>
        
        <div>
        <NavBar />
        </div>
      <div className="wrapper">
         
        <div className="form-wrapper">
          <h1 className="signinname">Sign In</h1>
          <form onSubmit={this.handleSubmit} noValidate>
         <div className="email">
              <label htmlFor="email">Email</label>
              <input
                className={formErrors.email.length > 0 ? "error" : null}
                placeholder="Email=group3@gmail.com"
                type="email"
                name="email"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.email.length > 0 && (
                <span className="errorMessage">{formErrors.email}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password=group3"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="Login">
              <button type="submit">Login</button>
              <Link href= "/register" variant="body2" > 
              <small>Don't have an account?Signup</small>
            </Link>
            <div className="copyright">
                    <Copyright />
                    </div>
    
             
            </div>
          </form>
        </div>
      </div>
      </div>
    );
  }
}

export default register;