
import Card from './components/Card'
const App = () =>{

  // const cardInfo = [
  //   { title: "Jara sa jhoom", album: "DDLG", artist: "Asha, Abhijit" },
  //   { title: "Maine pyar kiya", album: "Maine pyar kiya", artist: "Lata, SP Bala" },
  //   { title: "All of me", album: "John Legend", artist: "John Legend" },
  //   { title: "my heart will go on", album: "titanic", artist: "Celine Dione" }


  // ]

return(

<>
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">Navbar</a>
      </div>
    </nav>
<h1>This is app</h1>
{/* <Card card={cardInfo}/> */}
<Card />
    {/* {cardInfo.map(item => (

      <div className="card" style={{ width: '18rem' }} key={item.id}>
        <img src="..." className="card-img-top" alt="..." />
        <div className="card-body">
          <p className="card-text">{item.title}</p>
          <p className="card-text">{item.album}</p>
          <p className="card-text">{item.artist}</p>
        </div>
      </div>
      
    ))} */}
</>
)

}

export default App