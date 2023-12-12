import React, {
    createContext,
    useContext,
    useReducer,
    useEffect,
    useState,
  } from "react";
  import { useNavigate } from "react-router-dom";
  
  const AuthContext = createContext();
  
  export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(null);
    const [isLogged, setIsLogged] = useState(false);
    const [initComplete, setInitComplete] = useState(false);
    const navigate = useNavigate();
  
    useEffect(() => {
      initializeData();
    }, []);
  
    async function initializeData() {
      const storedToken = localStorage.getItem("token");
  
      if (storedToken) {
        try {
          const user = await fetchLoggedUser();
          setUser(user);
          setToken(storedToken);
          setIsLogged(true);
        } catch (error) {
          console.error("Errore durante il recupero dell'utente loggato:", error);
          handleLogout();
        }
      }
  
      setInitComplete(true);
    }
  
    async function fetchLoggedUser() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve({
            name: "Tizio",
            surname: "Caio",
            email: "tizio.caio@email.it"
          });
        }, 1000);
      });
    }
  
    function handleLoginOrRegistration(resp) {
      setUser(resp.user);
      setIsLogged(true);
  
      storeToken(resp.token);
    }
  
    function handleLogout() {
      setUser(null);
      storeToken(null);
  
      localStorage.removeItem("token");
  
      setIsLogged(false);
  
      setTimeout(() => {
        navigate("/login");
      }, 1000);
    }
  
    function storeToken(token) {
      setToken(token);
      localStorage.setItem("token", token);
    }
  
    return (
      <AuthContext.Provider value={{ user, token, isLogged, handleLoginOrRegistration, handleLogout }}>
        {initComplete ? children : <div>Caricamento...</div>}
      </AuthContext.Provider>
    );
  };
  
  export const useAuth = () => {
    return useContext(AuthContext);
  };
  