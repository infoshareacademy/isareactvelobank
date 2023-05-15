import './Contact.css';

export function Contact(props) {
    const { data: { phone, address, email } } = props; 

    return (
        <div className="contact-container">
            <h3>TEL</h3>
            <p>{phone}</p>
            <h3>ADRES</h3>
            <p>{address.street} {address.number}, {address.city}</p>
            <h3>EMAIL</h3>
            <p>{email}</p>
        </div>
    )
}