
import UselessComponent2 from '../UselessComponent2' //if the files inside two folders then ../ otherwise if file inside one folder from app.js then ./

const UselessComponent1 = ({bio}) => {
return (

<UselessComponent2 bio={bio}/>

)



}

export default UselessComponent1