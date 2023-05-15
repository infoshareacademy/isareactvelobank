import { useState, useEffect } from "react"

export const Users = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(r => r.json())
            .then(data => {
                setUsers(data)
            })
    }, []);

    return (
        <>
            <h3>Uzytkwonicy:</h3>
            <ul>
                {users.map(user => (
                    <li key={user.id}>{user.name} works in {user.company.name}</li>
                ))}
            </ul>
        </>
    )
}