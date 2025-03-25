'use client'
import React, { createContext, useEffect, useState } from 'react';

interface UserInfo {
    name: string
    email: string
    role: string
}

interface ProviderContextType {
    user: UserInfo | undefined | null;
    setUser: (user: UserInfo | undefined | null) => void;
}

// Create the context with a proper type
export const ProviderSource = createContext<ProviderContextType | undefined>(undefined);
const Provider = ({ children }: { children: React.ReactNode }) => {



    const [user, setUser] = useState<UserInfo | null>();
    // const [role, setRole] = useState<string>("");

    useEffect(() => {

        setInterval(() => {

            const name = localStorage?.getItem("name")
            const email = localStorage?.getItem("email")
            const role = localStorage?.getItem("role")
            if (name && email && role) {
                setUser({ name, email, role })

            }
            else {
                setUser(null)
            }
        }, 500);

    }, []);

    const data = { user, setUser }

    return <ProviderSource.Provider value={data}>{children}</ProviderSource.Provider>
};

export default Provider;