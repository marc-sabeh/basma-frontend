import { Component } from "react";
import { connect } from "react-redux";
import { getUsersFilterByEmail, getUsersFilterById, getUsersFilterByName } from "../actions/users.action";

class Filter extends Component{
    render(){
        return(
            <div className="m-4">
                Id: <input onChange={(e) => this.props.getUsersFilterById(e.target.value)} type="text" className="filterById"/>
                Name: <input onChange={(e) => this.props.getUsersFilterByName(e.target.value)} type="text" className="filterByName"/>
                Email:<input onChange={(e) => this.props.getUsersFilterByEmail(e.target.value)} type="text" className="filterByEmail"/>
            </div>
        )
    }
}
const mapDispatchToProps = dispatch => ({
  
    getUsersFilterById:(a) => dispatch(getUsersFilterById(a)),
    getUsersFilterByName:(a) => dispatch(getUsersFilterByName(a)),
    getUsersFilterByEmail:(a) => dispatch(getUsersFilterByEmail(a)),

  });
  
  const mapStateToProps =({users:{data}}) => ({
    data
  })
  
  export default connect(mapStateToProps, mapDispatchToProps) (Filter);
