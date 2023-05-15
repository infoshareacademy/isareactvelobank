import styled from 'styled-components';

const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h3`
    color: green;
    text-transform: uppercase;
`;

const Text = styled.p`
    font-weight: 700;
    margin: 0;
`

export const ContactStyled = ({ data: { phone, address, email } }) => {
    return (
        <Container>
            <Title>TEL</Title>
            <Text>{phone}</Text>
            <Title>ADRES</Title>
            <Text>{address.street} {address.number}, {address.city}</Text>
            <Title>EMAIL</Title>
            <Text>{email}</Text>
        </Container>
    )
}