import MyName from './MyName';
import { MyFavouriteDishes } from './MyFavouriteDishes';
import { Contact } from './Contact';
import { ContactStyled } from './ContactStyled';

const dishes = [
    { id: 1, name: 'Kebab' },
    { id: 2, name: 'Zupa pomidorowa' },
    { id: 3, name: 'Homar' },
];

const contactData = {
    phone: '111 222 333',
    address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 }, 
    email: 'moj@mail.com'
}

const AboutMe = () => {
    return (
        <>
            <MyName name="Kamil" />
            <MyName name="Kamil" surname="Richert" />
            <Contact data={contactData} />
            <ContactStyled data={contactData} />
            <MyFavouriteDishes dishes={dishes} />
        </>
    )
}

export default AboutMe;