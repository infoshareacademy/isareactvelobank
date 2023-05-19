import { useState } from "react";
import styled from "styled-components"
import { z } from 'zod';

const Form = styled.form`
    display: flex;
    flex-direction: column;
`;

const formSchema = z.object({
    name: z.string(),
    age: z.number(),
    gender: z.enum(['mezczyzna', 'kobieta', 'nie podano']),
    comment: z.string().optional()
})


export const MyForm = () => {
    const [name, setName] = useState('');
    const [age, setAge] = useState('');
    const [gender, setGender] = useState('nie podano');
    const [comment, setComment] = useState('');

    const handleNameChange = (e) => setName(e.target.value);
    const handleAgeChange = (e) => setAge(parseInt(e.target.value));
    const handleGenderChange = (e) => setGender(e.target.value);
    const handleCommentChange = (e) => setComment(e.target.value);

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = { name, age, gender, comment };

        try {
            formSchema.parse(formData);
            alert(JSON.stringify(formData, null, 2))
        } catch (e) {
            console.error(e)
        }
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