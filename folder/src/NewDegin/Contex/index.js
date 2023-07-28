// enteredURLContext.js

import React, { createContext, useContext, useState } from 'react';

const EnteredURLContext = createContext();

export const useEnteredURL = () => {
    return useContext(EnteredURLContext);
};

export const EnteredURLProvider = ({ children }) => {
    const [enteredURLs, setEnteredURLs] = useState([]);

    const addEnteredURL = (url) => {
        setEnteredURLs(prevURLs => [...prevURLs, url]);
    };

    return (
        <EnteredURLContext.Provider value={{ enteredURLs, addEnteredURL }}>
            {children}
        </EnteredURLContext.Provider>
    );
};
