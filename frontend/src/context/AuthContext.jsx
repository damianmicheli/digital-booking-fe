import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = null;
const initialUser = null;


const AuthProvider = ({ children }) => {
const [auth, setAuth] = useState(initialAuth);
const [userLog, setUserLog] = useState(initialUser);

const urlAPI = 'http://localhost:8080/usuario';

  const getUser = (url, token)=> {
    console.log("Trae token: " + token);
      const settings = {
        method: 'GET',
        headers: {
          authorization: 'Bearer ' + token
        }
      }
      fetch(url, settings)
        .then((response) => {
          console.log(response);
          if(response.ok !== true){
            alert("No se pudo consultar Usuario")
          }
          return response.json();
        })
        .then((data) => {
          console.log("segunda promesa")
          console.log(data);      
          setUserLog(data)  
          console.log(userLog);
        })
        
    } 
  
  const handleAuth = (jwt) => {
    if (auth) {
      localStorage.removeItem("jwt");
      setAuth(null);
    } else {
      console.log("Guarda jwt en local");
      localStorage.setItem("jwt", JSON.stringify(jwt));     
      console.log("Setea como true la autenticación");      
      console.log("Busca datos del usuario");
     getUser(urlAPI, jwt) && getUser(urlAPI, jwt)
      setAuth(true);
    }
  };

  const data = { auth, handleAuth, userLog};

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;