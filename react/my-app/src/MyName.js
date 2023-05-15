function MyName(props) {
    if (props.surname) {
        return <h1>Moje imię to {props.name}, 
            a nazwisko to {props.surname}!</h1>;
    }

    return <h1>Moje imię to {props.name}!</h1>;
}

export default MyName;