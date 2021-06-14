import React, { Component } from 'react';
import {connect} from 'react-redux';
import { registerApi } from '../actions/auth.action';

 class SignUp extends Component {
    state={
        token:[],
        status:[],
        email:[],
        password:[],
        name:[],
    }
    handleSuccessfulAuth(data){
      this.props.history.push("/");
  }

     submithandler= (e)=> {
        e.preventDefault();
        // Simple POST request with a JSON body using fetch

        const requestOptions = {  
          email: this.state.email,
          password:this.state.password,
          name:this.state.name
        }

        this.props.registerApi(requestOptions);
        this.handleSuccessfulAuth();
    }
    render() {
        return (
            <div className="container card mt-4">
            <h5 className="card-header bg-success text-white text-center py-4">
              <strong>Sign up</strong>
            </h5>
            {/*Card content*/}
            <div className="card-body px-lg-5 pt-0 mt-1">
              {/* Form */}
              <form className="text-center" style={{color: '#757575'}} onSubmit={(e)=>this.submithandler(e)}>
                <div className="form-row">
                  <div className="col">
                    {/*  name */}
                    <div className="md-form">
                      <label htmlFor="materialRegisterFormFirstName">Name</label>
                      <input 
                      type="text" 
                      className="form-control"
                      name="name"
                      placeholder="Enter your name"
                      value={this.state.name}
                      onChange={event =>this.setState({name: event.target.value})} 
                      required/>
                    </div>
                  </div>
                </div>
                {/* E-mail */}
                <div className="md-form mt-0">
                  <label htmlFor="materialRegisterFormEmail">E-mail</label>
                  <input 
                  type="email" 
                  className="form-control" 
                  name="email"
                  placeholder="Enter your Email"
                  value={this.state.email}
                  onChange={event =>this.setState({email: event.target.value})}
                 required />
                </div>
                {/* Password */}
                <div className="md-form">
                  <label htmlFor="materialRegisterFormPassword">Password</label>
                  <input 
                  type="password"  
                  className="form-control" 
                  aria-describedby="materialRegisterFormPasswordHelpBlock"
                  name="password"
                  placeholder="Enter your Password"
                  value={this.state.password}
                  onChange={event =>this.setState({password: event.target.value})} 
                  required/>
                </div>
                <button className="btn btn-outline-success btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit" onSubmit={(e)=>this.submithandler(e)}>Sign Up</button>
              
                </form>
              {/* Form */}
            </div>
          </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
  
  registerApi:(requestOptions) => dispatch(registerApi(requestOptions))
});

export default connect(null, mapDispatchToProps) (SignUp);