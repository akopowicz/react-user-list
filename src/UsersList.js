import React from 'react';
import './UsersList.css';

const UsersList = (props) => {

    let usersList = props.users;

    let usersLiElements = usersList.map(user => <li key={user.id}>{user.name}<span onClick={() => props.removeUserMethod(user.id)}>X</span></li>
    );
    
    return(
        <ul className="list">
            {usersLiElements}
        </ul>
    );
}

export default UsersList;