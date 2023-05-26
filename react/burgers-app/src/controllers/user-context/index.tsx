import { User, onAuthStateChanged, getAuth } from "firebase/auth";
import { createContext, ReactNode, useContext, useState, useEffect } from "react";

const UserContext = createContext<User | null>(null);

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        // FIREBASE
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            setUser(user);
        })
        //
    })

    return <UserContext.Provider value={user}>
        {children}
    </UserContext.Provider>
}

export const useUserContext = () => useContext(UserContext);