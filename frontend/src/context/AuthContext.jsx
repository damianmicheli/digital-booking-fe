import { createContext, useEffect, useState } from "react";
import URL_BASE from "../components/global/getUrlBase";


const AuthContext = createContext();


const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(null);
  const [userLog, setUserLog] = useState(null);

const urlAPI = `${URL_BASE}/usuario`;

  const getUser = (url, token) => {
 
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
          if(data){
          setUserLog(data)
        }
      });
   
  };

  useEffect(()=>{
    userLog?.id && setAuth(true);
  }, [userLog] )

  const handleAuth = (jwt) => {
    if (auth) {
      localStorage.removeItem("jwt");
      setAuth(null);
    } else {
      localStorage.setItem("jwt", JSON.stringify(jwt));
      getUser(urlAPI, jwt);      
    }
  };

  const data = { auth, handleAuth, userLog };

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;
