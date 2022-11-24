import { createContext, useEffect, useState } from "react";
import URL_BASE from "../components/global/getUrlBase";


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [userLog, setUserLog] = useState(null);

const urlAPI = `${URL_BASE}/usuario`;

  const getUser = (url, token) => {
    console.log("Trae token: " + token);

    const settings = {
      method: "GET",
      headers: {
        authorization: "Bearer " + token,
      },
    };
    fetch(url, settings)
      .then((response) => {
        console.log(response);
        if (response.ok !== true) {
          alert("No se pudo consultar Usuario");
        }
        return response.json();
      })
      .then((data) => {
        console.log("segunda promesa");
        console.log(data);
        if(data){
          setUserLog(data)
        }
      });
   
  };

  useEffect(()=>{
    console.log({userLog});
    userLog?.id && setAuth(true);
  }, [userLog] )

  const handleAuth = (jwt) => {
    console.log("entra en handleAuth", auth);
    if (auth) {
      localStorage.removeItem("jwt");
      setAuth(null);
    } else {
      console.log("Guarda jwt en local");
      localStorage.setItem("jwt", JSON.stringify(jwt));
      console.log("Setea como true la autenticación");
      console.log("Busca datos del usuario");
      getUser(urlAPI, jwt);      
    }
  };

  const data = { auth, handleAuth, userLog };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
