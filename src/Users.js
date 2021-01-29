import React, {useState} from 'react';
import './Users.css';
import UsersList from './UsersList';

const Users = (props) => {

    const [user, setUser] = useState([]);
    const [inputValue, setInputValue] = useState('');

    const addUser = (e) => {
        e.preventDefault();
        
        let newUser = {
            name: inputValue,
            id: Date.now()
        }

        if(inputValue === '') return;

        setUser(user.concat(newUser));

       setInputValue('')
    }

    const removeUser = (userID) => {
        setUser(user.filter(user => user.id !== userID));        
    }

    return(
        <div className="users-main">
            <h1>User's list</h1>
            <form onSubmit={addUser}>
                <input type="name" onChange={(e) => {setInputValue(e.target.value)}} value={inputValue}></input>
                <button type="submit">Add user</button>
            </form>
            <UsersList users={user} removeUserMethod={removeUser}/>
        </div>
    );
}

export default Users;