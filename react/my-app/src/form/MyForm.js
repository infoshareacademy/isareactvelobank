import { useState } from "react";
import styled from "styled-components"

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;


export const MyForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('nie podano');
    const [comment, setComment] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleAgeChange = (e) => setAge(e.target.value);
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleCommentChange = (e) => setComment(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        alert(JSON.stringify({ name, age, gender, comment }, null, 2))
    }
 
    return (
        <Form onSubmit={handleSubmit}>
            <label>Imię</label>
            <input type="text" value={name} onChange={handleNameChange} />
            <label>Wiek</label>
            <input type="number" value={age} onChange={handleAgeChange} />
            <label>Płeć</label>
            <select value={gender} onChange={handleGenderChange}>
                <option>nie podano</option>
                <option>mezczyzna</option>
                <option>kobieta</option>
            </select>
            <label>Komentarz</label>
            <textarea value={comment} onChange={handleCommentChange} />
            <input type="submit" value="Wyślij" />
        </Form>
    )
}