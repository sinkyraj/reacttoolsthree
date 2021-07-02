import { useState } from 'react'


const App =() =>{

const [foodState, setFoodState] = useState ({

  name: '',
  region: '',
  calcount: '',
  price: '',
  food: {}
})

  const handleInputChange = event => {
    setFoodState({ ...foodState, [event.target.name]: event.target.value})

  }


  const handleFormSubmit = event =>{
  event.preventDefault()

  console.log(foodState)

  const food = {
  name: foodState.name,
  region: foodState.region,
  calcount: foodState.calcount,
  price: foodState.price
}
setFoodState ({
  ...foodState,
   food,
   name: '',
   region: '',
   calcount: '',
   price: ''
 })


}


return(
<>
<h1>App Page</h1>

<form>
  <p>
<label htmlFor="name">Name: </label>
<input 
type="text" 
name="name" 
value= {foodState.name} 
onChange = {handleInputChange}
/>
</p>
<p>
<label htmlFor="region">Region:</label>
<input 
type="text"
name="region"
value= {foodState.region}
onChange={handleInputChange}
 
 />

</p>
<p>
<label htmlFor="calcount">CalCount:</label>
<input 
type="text" 
name="calcount" 
value= {foodState.calcount}
onChange = {handleInputChange}

/>

</p>
<p>
<label htmlFor="price">Price:</label>
<input 
type="text" 
name="price" 
value = {foodState.price}
onChange = {handleInputChange}
/>

</p>
<p>

  <button onClick={handleFormSubmit}>Submit</button>
</p>
<div>
<h1>Name: {foodState.food.name}</h1>
 <h3>Region: {foodState.food.region}</h3>
 <h3>Calcount: {foodState.food.calcount}</h3>
<h3>Price: {foodState.food.price}</h3>


</div>


</form>
</>



)

}

export default App