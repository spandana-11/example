import React, { useContext } from 'react';
export const Usercontext=React.createContext();
export const Usercontextprovider=({children})=>{
    return(
       < Usercontext.Provider value={"spandana"}>
       {children}
       </Usercontext.Provider>

    )
}
