
const initialUser = null;

const [userLog, setUserLog] = useState(initialUser);


const urlAPI = 'http://localhost:8080/usuario';

const getUser = (url, token)=> {
  console.log("Trae por token" + token);
    const settings = {
      method: 'GET',
      headers: {
        authorization: 'Bearer ' + token
      }
    }
    fetch(url, settings)
      .then(respuesta => respuesta.json())
      console.log("primer promesa")
      .then(data => {
        console.log("primer promesa")
        console.log(data);        
      })
  }  