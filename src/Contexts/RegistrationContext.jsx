import React, { createContext, useContext, useState } from 'react';



const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);


export const RegistrationProvider = ({ children }) => {
    const [registrations, setRegistrations] = useState([]);

    const registerStudent = (student) => {
        setRegistrations((prev) => [...prev, student]);
    };

    return (
        <RegistrationContext.Provider value={{ registrations, registerStudent }}>
            {children}
        </RegistrationContext.Provider>
    );
};