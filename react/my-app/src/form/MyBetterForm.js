import { useState } from "react";
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;


export const MyBetterForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        age: '',
        gender: 'nie podano',
        comment: ''
    });

    const handleChange = (e) => setFormData({
        ...formData,
        [e.target.name]: e.target.value
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify(formData, null, 2))
    }

    const { name, age, gender, comment } = formData;
 
    return (
        <Form onSubmit={handleSubmit}>
            <label>Imię</label>
            <input type="text" name="name" value={name} onChange={handleChange} />
            <label>Wiek</label>
            <input type="number" name="age" value={age} onChange={handleChange} />
            <label>Płeć</label>
            <select name="gender" value={gender} onChange={handleChange}>
                <option>nie podano</option>
                <option>mezczyzna</option>
                <option>kobieta</option>
            </select>
            <label>Komentarz</label>
            <textarea name="comment" value={comment} onChange={handleChange} />
            <input type="submit" value="Wyślij" />
        </Form>
    )
}