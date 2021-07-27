import Card from './Card'
import useCounter from '../hooks/use-counter'

const ForwardCounter = () => {
    const cptCounter = useCounter()
    return <Card>{cptCounter}</Card>
}

export default ForwardCounter
