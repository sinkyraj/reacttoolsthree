import { useState } from 'react'

import Card from './components/Card'

const App = () =>{

const [songState, setSongState] = useState({
  title: '',
  artist: '',
  album: '',
  songs: []


})

const handleInputSubmitSong = event => {
event.preventDefault()
console.log()
//const songs = JSON.parse(JSON.stringify(songState.songs))  --> This is a way of create duplicate of Array

const songs = [...songState.songs]
songs.push ({
title: songState.title,
artist: songState.artist,
album: songState.album

})
setSongState({
...songState, 
songs,
title: '',
artist: '',
album: ''

})

}

const handleInputChange = event => {
setSongState({...songState, [event.target.name]: event.target.value})

}


return (

<>
<h1>This is app Page</h1>
<form>
<p>
 <label htmlFor="title">Title: </label>
 <input 
 type="text" 
 name="title" 
 value= {songState.title}
 onChange={handleInputChange}
 />
</p>
<p>
<label htmlFor="artist">Artist: </label>
<input 
type="text" 
name="artist" 
value= {songState.artist}
onChange={handleInputChange}
/>

</p>
<p>
<label htmlFor="album">Album: </label>
<input 
type="text" 
name="album" 
value={songState.album}
onChange={handleInputChange}
/>
</p>
<p>
<button onClick={handleInputSubmitSong}>submit</button>

</p>

</form>
<div>
{/* <Card /> */}
{
songState.songs.length ? 
songState.songs.map((song, i ) => <Card key= {i} song = {song}/> )
: null
}
</div>
</>

)


}

export default App