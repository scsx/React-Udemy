import Card from './Card'
import useCounter from '../hooks/use-counter'

const BackwardCounter = () => {
    const cptCounter = useCounter(false)
    return <Card>{cptCounter}</Card>
}

export default BackwardCounter
