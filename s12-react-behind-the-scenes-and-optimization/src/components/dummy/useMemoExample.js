import React, { useMemo } from 'react'

const UseMemoExample = (props) => {
    const { items } = props

    const sortedList = useMemo(() => {
        console.log('USEMEMO: Items sorted')
        return items.sort((a, b) => a - b)
    }, [items])

    return (
        <div>
            <h2>{props.title}</h2>
            <ul>
                {sortedList.map((item) => (
                    <li key={item}>{item}</li>
                ))}
            </ul>
        </div>
    )
}

export default React.memo(UseMemoExample)
