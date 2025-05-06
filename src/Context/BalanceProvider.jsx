import React, { useState } from 'react';
import { BalanceContext } from './BalanceContext';

const BalanceProvider = ({children}) => {
    const [balance,setBalance]=useState(10000);
    return (
        <BalanceContext.Provider value={[balance,setBalance]}>
            {
                children
            }
        </BalanceContext.Provider>
    );
};

export default BalanceProvider;