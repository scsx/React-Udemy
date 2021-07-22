import React from 'react'
import OtherDummy from './OtherDummy'

const Dummy = (props) => {
    console.log('Dummy component ran')
    return (
        <>
            <p>{props.show ? 'This is new' : ''}</p>
            <OtherDummy>stuff</OtherDummy>
        </>
    )
}

export default React.memo(Dummy)
