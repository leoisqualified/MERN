import React from 'react';
import UsersList from '../components/UsersList';

function Users () {
    const USERS = [
        {id: ''},
        {image: ''},
        {name:''},
        {places: 4}
    ]
    
    return (
        <>
            <UsersList items={USERS}/>
        </>
    )
}

export default Users;