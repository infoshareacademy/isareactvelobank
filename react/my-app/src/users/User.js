export const User = ({ user }) => {
    return (
        <li>
            {user.name} works in 
            <span title={user.company.catchPhrase}> {user.company.name}</span>
        </li>
    )
}