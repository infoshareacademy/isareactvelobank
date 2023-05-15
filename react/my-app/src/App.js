import Wrapper from './Wrapper';
import MyName from './MyName';
import { MyFavouriteDishes } from './MyFavouriteDishes';
import { Contact } from './Contact';

const dishes = [
     { id: 1, name: 'Kebab' },
     { id: 2, name: 'Zupa pomidorowa' },
     { id: 3, name: 'Homar' },
]

function App() {
  return (
    <Wrapper>
        <MyName name="Kamil" />
        <MyName name="Kamil" surname="Richert" />
        <Contact data={
            {
                phone: '111 222 333',
                address: { street: 'Słowackiego', city: 'Gdańsk', number: 37 }, 
                email: 'moj@mail.com'
            }
        } />
        <MyFavouriteDishes dishes={dishes} />
    </Wrapper>
  );
}

export default App;
