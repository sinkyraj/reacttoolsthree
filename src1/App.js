
import Card from './components/Card';
const person = {

 name: 'Shweta Sharma',
 email: 'sinkyraj@gmail.com',
 bio: 'My name is Shweta Sharma and I am a Developer and I love coding'


}


const App =() => {
  return (
    <>
    <h1>The {person.name} application</h1>
    <Card person={person}/>
     
    </>
    
  );
}

export default App;
