import React, { Component } from 'react'
import axios from 'axios';
export default class Signup extends Component
{
    state={
        "password": " ",
    "last_login": " ",
    "username": " ",
    "date_joined": " ",
    "first_name": " ",
    "middle_name": " ",
     "last_name": " ",
     "email": " ",
     "primary_phone": " ",
      "team": 0,
  "groups": [
    " "
  ],
  "user_permissions": [
    " "
  ]
    }
    render()
    {
        return <div className="signup-container">
       <form>
  <div className="form-group">
    <label for="email">Email address</label>
    <input type="email"className="form-control" id="email" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp"className="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div className="form-group">
    <label for="password">Password</label>
    <input type="password"className="form-control" id="password" placeholder="Password"/>
  </div>
  <div className="form-check">
    <input type="checkbox"className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit"className="btn btn-primary">Submit</button>
</form>
        </div>
    }
}
