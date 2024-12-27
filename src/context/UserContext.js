import React from "react";

const UserContext = React.createContext();
// just like a global varible provider;
//      if context is created then its provider must 
//      also be created to

export default UserContext;

/*
    --> Use like this |
                      v
    <UserContext>
        Login -> component
            Card -> component
                Data -> Component
            Card
    <UserContext/>

    * All the inner components wrapped in a context
    will have the acces to UserContext (i.e. a global variable !)
*/ 