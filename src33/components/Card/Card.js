
const Card = () => {
  const cardInfo = [
    { title: "Jara sa jhoom", album: "DDLG", artist: "Asha, Abhijit" },
    { title: "Maine pyar kiya", album: "Maine pyar kiya", artist: "Lata, SP Bala" },
    { title: "All of me", album: "John Legend", artist: "John Legend" },
    { title: "my heart will go on", album: "titanic", artist: "Celine Dione" }


  ]
  
  // const renderCard = ({card}) => {
   return(
     <>
       {cardInfo.map(item => (

         <div className="card" style={{ width: '18rem' }} key={item.id}>
           <img src="..." className="card-img-top" alt="..." />
           <div className="card-body">
             <p className="card-text">Title: {item.title}</p>
             <p className="card-text">Album: {item.album}</p>
             <p className="card-text">Artist: {item.artist}</p>
           </div>
         </div>
         // <li className="list-group-item" key={item.id}>
         //   <p> {item.title}</p>
         //   <p> {item.album} </p>
         //   <p>{item.artist}</p>
         // </li>
       ))}
     
    </>
   )

  // }



  // return(
  // <>
  // <div className = "App">
  //       {card.map(renderCard)}

  //   </div>
  
  //     <div className="card" style={{ width: '18rem' }}>
  //       <img src="..." className="card-img-top" alt="..."/>
  //         <div className="card-body">
  //           <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //         <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  //         </div>
  //  </div>

  // </>

  // )

}

export default Card