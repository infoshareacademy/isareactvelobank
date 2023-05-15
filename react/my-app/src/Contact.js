import './Contact.css';

export function Contact(props) {
    const { data } = props; 

    return (
        <div className="contact-container">
            <h3>TEL</h3>
            <p>{data.phone}</p>
            <h3>ADRES</h3>
            <p>{data.address.street} {data.address.number}, {data.address.city}</p>
            <h3>EMAIL</h3>
            <p>{data.email}</p>
        </div>
    )
}