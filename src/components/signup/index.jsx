import React, { Component } from 'react'
import axios from 'axios';
import './signup.css'
export default class Signup extends Component
{
    componentDidMount()
    {
        if(localStorage.getItem('domain'))
        {

        }
        else{
            this.props.history.push('/')
        }
    }
    state={
    text:" ",
    password: " ",
    last_login: " ",
    username: " ",
    date_joined: " ",
    first_name: " ",
    middle_name: " ",
    last_name: " ",
    email: " ",
    primary_phone: " ",
    confirmPassword:" ",
    team: 0,
  groups: [
    " "
  ],
  user_permissions: [
    " "
  ]
    }
    
    handleSubmit=(e)=>
    {        
        e.preventDefault();        
        if(this.state.first_name!==" "&&this.state.last_name!==" "&&this.state.email!==" "&&this.state.primary_phone!==" "&&this.state.username!==" ")
        {
            if(this.state.password!==this.state.confirmPassword&&this.state.password!==" ")
            {
                this.setState({text:"Passwords doesn't match"})
            }
            else{                
                this.setState({text:" "},console.log('state',this.state))                               
                let domain = localStorage.getItem('domain');
                console.log(domain)
                axios.post(`https://${domain}.api.convin.ai/persons/create_admin`,this.state)
                .then(res=>{console.log('data',res);this.props.history.push('/login')})
                .catch(err=>console.log('error',err))
            }
        }
        else
            {
                this.setState({text:"Please fill all the required fields"})
            }
    }
    render()
    {
        return <div className="signup-container mt-5">
        <h5 className="text-center my-4"><u>SignUp as Admin</u></h5>
       <form className="row p-5 ">
  <div className="col-6">
  <div className="form-group">
        <label htmlFor="first_name">First name *</label>
        <input type="text" className="form-control" id="first_name" placeholder="Enter First name" onChange={e=>this.setState({first_name:e.target.value})}/>        
      </div>
      <div className="form-group">
        <label htmlFor="last_name">Last name  *</label>
        <input type="text" className="form-control" id="last_name" placeholder="Enter Last name" onChange={e=>this.setState({last_name:e.target.value})}/>        
      </div>
      <div className="form-group">
        <label htmlFor="user_name">username  *</label>
        <input type="text" className="form-control" id="user_name" placeholder="Enter any username" onChange={e=>this.setState({username:e.target.value})}/>        
      </div>
      <div className="form-group">
        <label htmlFor="password">Password  *</label>
        <input type="password" className="form-control" id="password" placeholder="Password" onChange={e=>this.setState({password:e.target.value})}/>
      </div>
  </div>
  <div className="col-6">
  <div className="form-group">
        <label htmlFor="middle_name">Middle name</label>
        <input type="text" className="form-control" id="middle_name" placeholder="Enter middle name" onChange={e=>this.setState({middle_name:e.target.value})}/>        
      </div>
      <div className="form-group">
        <label htmlFor="email">Email address  *</label>
        <input type="email" className="form-control" id="email" placeholder="Enter email" onChange={e=>this.setState({email:e.target.value})}/>        
      </div>
      <div className="form-group">
        <label htmlFor="primary_phone">Primary Contact no.  *</label>
        <input type="text" className="form-control" id="primary_phone" placeholder="Enter phone number" onChange={e=>this.setState({primary_phone:e.target.value})}/>        
      </div>
      <div className="form-group">
        <label htmlFor="password">Confirm Password *</label>
        <input type="password" className="form-control" id="confirmPassword" placeholder="confirm Password" onChange={e=>this.setState({confirmPassword:e.target.value})}/>
      </div>
  </div>
  <button type="submit" className="btn btn-primary ml-auto" onClick={this.handleSubmit}>Submit</button>
</form>
<p className="text-danger ml-5">* indicates required fields</p>
<p className="text-danger ml-5">{this.state.text}</p>
        </div>
    }
}
