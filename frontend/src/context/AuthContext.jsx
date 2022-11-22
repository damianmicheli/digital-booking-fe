import { createContext, useState } from "react";

const AuthContext = createContext();

const initialAuth = null;
const initialUser = null;

const AuthProvider = ({ children }) => {
  const [auth, setAuth] = useState(initialAuth);
  const [userLog, setUserLog] = useState(initialUser);

  
  const handleAuth = (jwt) => {
    if (auth) {
      localStorage.removeItem("jwt");
      setAuth(null);
    } else {
      localStorage.setItem("jwt", JSON.stringify(jwt));
      setAuth(true);
    }
  };

  const data = { auth, handleAuth};

  return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export { AuthProvider };
export default AuthContext;