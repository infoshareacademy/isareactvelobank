import { Link } from 'react-router-dom';

export const User = ({ user }) => {
    return (
        <li>
            <Link to={`/users/${user.id}`}>{user.name}</Link> works in 
            <span title={user.company.catchPhrase}> {user.company.name}</span>
        </li>
    )
}