import React, { Component} from 'react';
import { connect } from 'react-redux';
import { getUsers, getUsersRegistration, getUsersRegistrationByPeriod } from '../actions/users.action';
import Filter from './Filter';
import Users from './Users';


class Home extends Component {

    componentDidMount(){
        this.props.getUsers();
        this.props.getUsersRegistration();
    }
    render() {
        return (
            <div className="container text-center">
                <Filter></Filter>
                <Users users={this.props.data}></Users>
                <select onChange={(e) => this.props.getUsersRegistrationByPeriod(e.target.value)}>
                    <option default>Choose...</option>
                    <option value="last24">last 24 hours</option>
                    <option value="lastweek">last week</option>
                    <option value="lastmonth">last Month</option>
                    <option value="last3month">last 3 months</option>
                    <option value="lastyear">last year</option>
                </select>
                The number of registration is:
                {this.props.data_registration ? this.props.data_registration.Average[0].number_of_registration : 0}
            </div>
        )
    }
}


const mapDispatchToProps = dispatch => ({
  
    getUsers:() => dispatch(getUsers()),
    getUsersRegistration:() => dispatch(getUsersRegistration()),
    getUsersRegistrationByPeriod:(a) => dispatch(getUsersRegistrationByPeriod(a))
  });
  
  const mapStateToProps =({users:{data, data_registration}}) => ({
    data,data_registration
  })
  
  export default connect(mapStateToProps, mapDispatchToProps) (Home);