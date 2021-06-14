import { Component } from "react";

export default class UserCard extends Component {
    render() {
        const {id,name,email} =this.props.user;
        return (
        <div className="card">
            <div className="card-body">
              <h4 className="card-title">{id}</h4>
              <h5 className="card-title">{name}</h5>
              <p className="card-text">{email}</p>
            </div>
          </div>
        )
    }
}