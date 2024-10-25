import React from "react";
import './UserList.css'; //import css
import UserItem from "./UserItem"; // import parent component

function UsersList (props) {
    return (
        <>
         if(props.items.length === 0) {
            (
                <div className="center">
                    <p>No items found</p>
                </div>
            )            
         } 

         {/* else  statement */}
         else {
            <ul>
            {props.items.map(user => 
            (
                <UserItem 
                key={user.id} 
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.place}
                />
            ))}
            </ul>
         }
        </>
    )
}

export default UsersList;