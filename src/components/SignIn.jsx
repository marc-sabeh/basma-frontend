import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import { loginApi } from '../actions/auth.action';

class SignIn extends Component {
    state={
        status:[],
        token:[],
        email:[],
        password:[],
    }

    handleSuccessfulAuth(){
        this.props.history.push("/");
    }
    submithandler= (e)=> {
        e.preventDefault();
        // Simple POST request with a JSON body using fetch
        const requestOptions = {
          email: this.state.email,
          password:this.state.password,
        };
        
      this.props.loginApi(requestOptions);
      this.handleSuccessfulAuth();
    }

    render() {
        return (
            <div className="container card mt-4">
        <h5 className="card-header bg-success text-white text-center py-4 mb-2">
          <strong>Sign in</strong>
        </h5>
        {/*Card content*/}
        <div className="card-body px-lg-5 pt-0">
          {/* Form */}
          <form className="text-center" style={{color: '#757575'}}  onSubmit={(e)=>this.submithandler(e)}>
            {/* Email */}
            <div className="md-form">
              <label htmlFor="materialLoginFormEmail">E-mail</label>

              <input 
                type="email" 
                className="form-control"
                name="email"
                placeholder="Enter your Email"
                value={this.state.email}
                onChange={event =>this.setState({email: event.target.value})}
               />
            </div>
            {/* Password */}
            <div className="md-form">
              <label htmlFor="materialLoginFormPassword">Password</label>

              <input 
                type="password"
                className="form-control"
                name="password"
                placeholder="Enter your Password"
                value={this.state.password}
                onChange={event =>this.setState({password: event.target.value})}
                />
            </div>
            <div className="d-flex justify-content-around">
              <div>
              </div>
            </div>
            {/* Sign in button */}
            <button className="btn btn-outline-success btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onSubmit={(e)=>this.submithandler(e)}>Sign in</button>
            {/* Register */}
            <p>Not a member?
                <Link to="/SignUp">
              <a>Register</a>
              </Link>
            </p>
          </form>
          {/* Form */}
        </div>
      </div>
        )
    }
}

const mapDispatchToProps = dispatch => ({
  
  loginApi:(requestOptions) => dispatch(loginApi(requestOptions))
});

export default connect(null, mapDispatchToProps) (SignIn);