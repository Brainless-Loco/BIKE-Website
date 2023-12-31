import React, { useEffect, useState } from 'react';
import { fireAuth } from '../Firebase';

export const AuthContext = React.createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [pending, setPending] = useState(true);

    useEffect(() => {
        fireAuth.onAuthStateChanged((user) => {
            setCurrentUser(user)
            setPending(false)
        });
    }, []);

    if(pending) return <p>Loading...</p>;

    return (
        <AuthContext.Provider
            value={{currentUser}}>
                {children}
        </AuthContext.Provider>
    );
}