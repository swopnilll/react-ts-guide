import React, { useState } from 'react'

const GuestList: React.FC = () => {

    const [name, setName] = useState("");

    const [guests, setGuest] = useState<string[]>([]);

    const onclick = () => {
        console.log("submit button click")
        setName("");
        setGuest([...guests, name])
    }

    return (
        <>
            <h3>GuestList</h3>

            <ul>
            {guests.map(guest => {
                return (
                    <li key={guest}>{guest}</li>
                )
            })}
            </ul>

            <input type="text" value={name} onChange={e => setName(e.target.value)}/>
            <button onClick={onclick}>Add Guest</button>
        </>

    )
}

export default GuestList