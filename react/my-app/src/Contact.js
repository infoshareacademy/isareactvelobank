import './Contact.css';

export function Contact(props) {
    return (
        <div className="contact-container">
            <h3>TEL</h3>
            <p>{props.data.phone}</p>
            <h3>ADRES</h3>
            <p>{props.data.address.street} {props.data.address.number}, {props.data.address.city}</p>
            <h3>EMAIL</h3>
            <p>{props.data.email}</p>
        </div>
    )
}