import React, { Component} from 'react';
import UserCard from './UserCard';


export default class Users extends Component {
    render() {
        //jello
        return (
             <div className="py-5">
                 <div className="container">
                     <div>
                         <h2 className="text-center"> Customers</h2>
                     </div>
                     <div className="row" >
                    {console.log(this.props.users)}

                     {this.props.users ? Array.from(this.props.users.data).map((data,index) =>
                        <UserCard index={index} user={data}></UserCard>  
                        // console.log(data)
                    ):null}

                     </div>
                 </div>
             </div>
        )
    }
}