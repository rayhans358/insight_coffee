import { createContext, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({children}) {
  const authUser = localStorage.getItem("auth") 
    ? JSON.parse(localStorage.getItem("auth")) 
    : {};
  const [auth, setAuth] = useState(authUser);

  return (
    <AuthContext.Provider value={{ auth, setAuth }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContext;