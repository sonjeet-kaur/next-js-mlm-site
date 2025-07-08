'use client';
import { createContext, useContext, useState } from "react";

const UserContext = createContext<any>(null);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {

    const [user, setUser] = useState();
    const [checked, setChecked] = useState(false);

    return (
        <UserContext.Provider value={{ user, setUser, checked, setChecked }}>
            {children}
        </UserContext.Provider>
    )
}

export const useUser = () => useContext(UserContext); 