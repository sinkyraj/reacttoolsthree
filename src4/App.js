import { useState } from 'react'

const App =() => {

  const [userState, setUserState] = useState ({
    name: '',
    email: '',
    username: '',
    user: {}

  })

  const handleInputChange = event =>{
  setUserState({...userState, [event.target.name]: event.target.value})

  }

  //this code is destructure of the above code for shorter syntax
  // const handleInputChange = ({ target }) => {
  //   setUserState({ ...userState, [target.name]: target.value })

  // }

  const handleFormSubmit = event =>{
    event.preventDefault()
    console.log(userState)

    const user = {
    name: userState.name,
    email: userState.email,
    username: userState.username

    }
    setUserState ({
      ...userState, 
      user,
      name: '',
      email: '',
      username: ''
    })

  }

return(
<>
<h1>App page</h1>
<form>
  <p>
<label htmlFor="name">Name</label>
<input 
type="text" 
name="name"
value = {userState.name} 
onChange = {handleInputChange}
/>
</p>
<p>
<label htmlFor="email">Email</label>
<input 
type="email" 
name="email" 
value ={userState.email}
onChange ={handleInputChange}

/>

</p>
<p>
  <label htmlFor="username">UserName</label>
  <input 
  type="text" 
  name="username" 
  value={userState.username}
  onChange={handleInputChange}
  />
</p>
      <button onClick={handleFormSubmit}>Submit</button>

</form>
<div>
<h1>Name: {userState.user.name}</h1>
<h2>Email: {userState.user.email}</h2>
<h2>Username: {userState.user.username}</h2>

</div>
</>

)

}

export default App