
import Item from './components/Item'

const people = ['Shweta','sinky','Rajeev', 'Shivali','Saanvi', 'Shadow']

const App = () =>{

  return(
  <>
 <h1>Hello World</h1>

 <ul className="list-group"></ul>

 {/* <Item /> */}
 {

          //people.map(person => <Item person={person}/>)
  //or
        people.map((person, i) => <Item key={i} person={person} />)

 }

 </>
  )


}

export default App