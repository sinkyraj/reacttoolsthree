import Bio from '../Bio'

// const Card = props => {
 // const Card = person => {
const Card = ({person}) => {
  //console.log(props.something)

return(
  <div className="card" style={{ width: '18rem' }}>
    <div className="card-body">
      <h5 className="card-title">{person.name}</h5>
      <h6 className="card-subtitle mb-2 text-muted">{person.email}</h6>
      {/* <p className="card-text">{person.Bio}</p> */}
      <Bio bio = {person.bio}/>
      <a href="https://google.com" className="card-link">Card link</a>
      <a href="https://google.com" className="card-link">Another link</a>
    </div>
  </div>


)

}

export default Card