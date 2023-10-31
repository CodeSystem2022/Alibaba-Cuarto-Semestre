
import { createContext, useState, useContext, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const useAuth = () => {
    const context = useContext(AuthContext);
    if(!context){
        throw new Error("useAuth must be used within AuthProvider");
    }
    return context;
}

export function AuthProvider ({children}) {
    const [user, setUser] = useState(null);
    const [isAuth, setIsAuth] = useState(false);
    const [errors, setErrors] = useState(null);

    const signin = async (data) => {
        try{
            const res = await axios.post("http://localhost:3000/api/signin", data, {
                withCredentials: true,
              });
              setUser(res.data);
              setIsAuth(true);

        } catch (error) {
            console.log(error)
            if(Array.isArray(error.reponse.data)){
                return setErrors(error.reponse.data)
            }
            setErrors([error.reponse.data.message]);
        }
    };

    const signup = async(data) => { 
        try {
            const res = await axios.post("http://localhost:3000/api/signup", data, {
                withCredentials: true,
              });
                setUser(res.data);
                setIsAuth(true);
            return res.data;
        } catch (error) {
            console.log(error)
            if(Array.isArray(error.reponse.data)){
                return setErrors(error.reponse.data)
            }
            setErrors([error.reponse.data.message]);
        }
    };

    useEffect{() => {
        const fetchUser = async () => {
            try {
                
            }
        }
    }

    return <AuthContext.Provider value={{
        user,
        isAuth,
        errors,
        signup,
        setUser,
        signin,
    }}>
        {children}
    </AuthContext.Provider>
} 