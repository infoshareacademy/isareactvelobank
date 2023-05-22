import { useParams } from "react-router-dom"

export const UserDetails = () => {
    const params = useParams();

    return <h2>Witaj uzytkowniku o id {params.id}!</h2>
}