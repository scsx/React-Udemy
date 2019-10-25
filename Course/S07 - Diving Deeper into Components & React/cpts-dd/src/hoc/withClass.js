import React from 'react';

// normal JS function
const withClass = (MyWrappedComponent, MyClassName) => {

    // this function is the functional component
    return props => (
        <main className={MyClassName}>
            <MyWrappedComponent {...props} />
        </main>
    );
}

export default withClass;
