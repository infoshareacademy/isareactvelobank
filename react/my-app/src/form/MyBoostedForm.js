import styled from "styled-components"
import { Form, Field } from 'react-final-form'

const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
`;


export const MyBoostedForm = () => {
    const onSubmit = (values) => {
        alert(JSON.stringify(values, null, 2))
    }
 
    return (
        <Form 
            onSubmit={onSubmit}
            initialValues={
                {
                    name: '',
                    age: '',
                    gender: 'nie podano',
                    comment: ''
                }
            }
            render={({ handleSubmit }) => (
                <FormContainer onSubmit={handleSubmit}>
                    <label>Imię</label>
                    <Field
                        name="name"
                        component="input"
                        type="text"
                    />
                    <label>Wiek</label>
                    <Field
                        name="age"
                        component="input"
                        type="number"
                    />
                    <label>Płeć</label>
                    <Field name="gender" component="select">
                        <option>nie podano</option>
                        <option>mezczyzna</option>
                        <option>kobieta</option>
                    </Field>
                    <label>Komentarz</label>
                    <Field
                        name="comment"
                        component="textarea"
                    />
                    <input type="submit" value="Wyślij" />
                </FormContainer>
            )}
        />
            
    )
}