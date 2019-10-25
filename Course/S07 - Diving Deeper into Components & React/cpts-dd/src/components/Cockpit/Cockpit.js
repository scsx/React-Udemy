import React, { useEffect, useRef, useContext } from 'react';
import AuthContext from '../../context/auth-context';

const cockpit = (props) => {

    // context
    const authContext = useContext(AuthContext);
    console.log(authContext.authenticated);

    // ref
    const myHtmlElementRef = useRef(null);
    // myHtmlElementRef.classList.add("addedByRef"); // calling here throws null error; react didn't have time to get to render
    // use useEffect because it runs after render

    useEffect(() => {
        console.log('Lifecycle: [Cockpit.js] useEffect()');
        setTimeout(() => {
            console.log('useEffect(): DATA SAVED TO CLOUD');
        }, 1000);

        myHtmlElementRef.current.classList.add("addedByRef"); // from ref above

        // cleanup (unmount):
        return () => {
            console.log('Lifecycle: [Cockpit.js] useEffect(): cleanup happening');
        }
    }, []); // optimization -> https://reactjs.org/docs/hooks-effect.html

    // dynamic classes for h1
    let dynamicClasses = []; // bootstrap classes
    if (props.personsLength <= 2) {
        dynamicClasses.push('font-weight-bold ')
    }
    if (props.personsLength <= 1) {
        dynamicClasses.push('text-white bg-dark')
    }
    // inline style for button
    const buttonStyle = {
        backgroundColor: 'pink',
        borderColor: 'red'
    }
    if (props.showPersons) {
        buttonStyle.backgroundColor = 'orange';
        buttonStyle.borderColor = 'black';
    }
    console.log('Lifecycle: [Cockpit.js] rendering...');
    return (
        <div className="cockpit">
            <h1 ref={myHtmlElementRef} className={dynamicClasses.join(' ')}>{props.appTitleToCockpit}</h1>
            <div className="btn-group mt-4">
                <button className="btn btn-success" onClick={props.clickShowPersons}>Toggle Persons</button>

                {/* "simple context use"
                <AuthContext.Consumer>
                    {(context) => <button className="btn btn-info" onClick={context.fakeLogin}>Login</button>}
                </AuthContext.Consumer>
                */}

                <button className="btn btn-info" onClick={authContext.fakeLogin}>Login</button>

            </div>
        </div>
    );
}

// React.memo = similar to shouldComponentUpdate() in class (optimization)
export default React.memo(cockpit);
