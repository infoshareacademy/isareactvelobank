import Wrapper from './Wrapper';
import MyName from './MyName';
import { Contact } from './Contact';

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
    </Wrapper>
  );
}

export default App;
