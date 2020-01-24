import React from 'react';
import Dashboard from '../../Components/Dashboard/Dashboard';
import UserList from '../../Components/Users/UserList';
import UserDetails from '../../Components/Users/UserDetails';



function Body(){
    return(
        <div className = "container-fluid">
            <Dashboard/>
            <UserList/>
        <UserDetails/>
            </div>
        
    )
}

export default Body;