import React, { useState } from 'react'

import { users } from './users'

interface user {
    name: string;
    age: number;
}


const FindUser: React.FC = () => {

    const [searchText, setSearchText] = useState<string>("");

    const [filteredUsers, filterUser] = useState<Array<user>>(users);

    const findUser = () => {
        console.log(searchText);

        console.log(filteredUsers.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase())));

        filterUser(filteredUsers.filter(user => user.name.toLowerCase().includes(searchText.toLowerCase())))

    }

    const clearFilter = () => {
        setSearchText("");
        filterUser(users);
    }

    return (
        <>
            <h1>Find User</h1>

            <input type="text" value={searchText} onChange={e => setSearchText(e.target.value)} />
            <button onClick={findUser}>Find</button>
            <button onClick={clearFilter}>Clear Filter</button>

            <h1>User Details</h1>

            {
                filteredUsers.length < 0
                    ? (<h4>Users not found</h4>)
                    : (
                        filteredUsers.map(user => {
                            return (
                                <div key={user.name}>
                                    <div>Name: {user.name}</div>
                                    <div>Age: {user.age}</div>
                                </div>
                            )
                        })
                    )
            }
        </>
    )
}

export default FindUser