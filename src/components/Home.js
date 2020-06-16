import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class Home extends Component {
   
    render() {
        return (
            <div>
                <h1 >this is home page</h1>
                <Link to="/">Logout</Link>
            </div>
        )
    }
}
