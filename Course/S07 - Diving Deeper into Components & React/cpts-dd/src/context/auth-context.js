import React from 'react';

const authContext = React.createContext({
    authenticated: false,
    fakeLogin: () => {}
});
authContext.displayName = 'My test context: authContext'; // name to show in React Dev Tools

export default authContext;
