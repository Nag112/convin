import React, { Component } from "react";
import axios from "axios";
export default class Login extends Component {
  state = {
    username: "",
    password: "",
    text: ""
  };
  handleSubmit = e => {
    e.preventDefault();
    this.setState({text:""})
    if (this.state.password !== " " && this.state.username !== " ") {
      let domain = localStorage.getItem("domain");
      axios
        .get(`https://${domain}.api.convin.ai/persons/get_token`, {
          params: this.state
        })
        .then(res => {
          console.log(res.data);
          localStorage.setItem("token", res.data.token);
          if(!res.data.non_fields_errors)
          this.props.history.push("/graphs");
          else this.setState({text:"username and password doesn't match"})
        })
        .catch(err => {
          console.log("error", err);
          this.setState({ text: "Something is wrong please try again later" });
        });
    } else this.setState({ text: "please fill the required fields" });
  };
  render() {
    return (
      <div className="signup-container mt-5">
        <h5 className="text-center my-4">
          <u>Login as Admin</u>
        </h5>
        <form className="p-5 text-center">
          <div className="col-6 mx-auto">
            <div className="form-group">
              <label htmlFor="user_name">username *</label>
              <input
                type="text"
                className="form-control"
                id="user_name"
                placeholder="Enter any username"
                onChange={e => this.setState({ username: e.target.value })}
              />
            </div>
            <div className="form-group">
              <label htmlFor="password">Password *</label>
              <input
                type="password"
                className="form-control"
                id="password"
                placeholder="Password"
                onChange={e => this.setState({ password: e.target.value })}
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-primary mx-auto"
            onClick={this.handleSubmit}
          >
            Submit
          </button>
        </form>
        {this.state.text===""?<p className="text-danger ml-5">* indicates required fields</p>:
        <p className="text-danger ml-5">{this.state.text}</p>}
      </div>
    );
  }
}
