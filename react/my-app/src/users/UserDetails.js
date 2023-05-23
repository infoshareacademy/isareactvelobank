import { useEffect, useState, useCallback, useMemo } from "react";
import { useParams } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'

export const UserDetails = () => {
    const [user, setUser] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const params = useParams();

    const formattedParamId = useMemo(() => ({ result: params.id + '0' }), [params.id])

    const fetchData = useCallback(async () => {
        try {
            const r = await fetch(`https://jsonplaceholder.typicode.com/users/${formattedParamId.result}`);
            if (r.ok) {
                const data = await r.json();
                setUser(data);
            } else {
                setError(Error('NO 200'))
            }
        } catch (err) {
            setError(err);
        } finally {
            setIsLoading(false);
        }
    }, [formattedParamId])

    useEffect(() => {
        fetchData()
    }, [fetchData]);

    if (isLoading) {
        return <Spinner />
    }

    if (error) {
        return <>
            <h2>Wystąpił błąd podczas pobierania!</h2>
            <h4>{error.message}</h4>
        </>;
    }

    return <h2>Witaj {user.name}!</h2>
}