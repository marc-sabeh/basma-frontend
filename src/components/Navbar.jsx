import React from 'react'
import { Link } from 'react-router-dom';
import {connect} from 'react-redux'
import { logoutApi } from '../actions/auth.action';

const Navbar = ({isLogin, logoutApi})=> {

        return (
            <nav className="navbar-fixed-top navbar navbar-expand-lg navbar-dark bg-success" >
            <div className="container-fluid">
              {/* <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                <i className="fas fa-bars" />
              </button> */}
              <Link to="/">
              <a className="navbar-brand" href="#">Basma</a>
              </Link>
              {/* <div className="collapse navbar-collapse" id="navbarTogglerDemo03"> */}
                <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
                  <li className="nav-item">
              <Link to="/">
                    <a className="nav-link active" aria-current="page" href="#">Home</a>
              </Link>

                  </li> 
                </ul>
                {(!isLogin) ?(  
              <div className="navbar-nav dropdown">
                    <Link to="/SignIn">
                    <div className="nav-item">
                        <button className="btn btn-success nav-item">Sign In</button>
                    </div>
                    </Link>
                    <Link to="/SignUp">
                    <div className="nav-item">
                    <button className="btn btn-success">Sign Up</button>
                    </div>
                    </Link>
              </div>
                ):(
              <div className="navbar-nav">
                  <div className="nav-item">
                  <button className="btn btn-success" onClick={logoutApi}>Sign Out</button>
                  </div>
              </div>
                )}
            
              </div>
            {/* </div> */}
          </nav> 
        );
    }

const mapStateToProps =({auth:{isLogin}}) => ({
  isLogin,
})

const mapDispatchToProps = dispatch => ({
  
  logoutApi:() => dispatch(logoutApi())
});

export default connect(mapStateToProps, mapDispatchToProps) (Navbar)
