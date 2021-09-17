import QuoteList from '../components/quotes/QuoteList'

const DUMMY_QUOTES = [
    {
        id: 'q1',
        author: 'Medina Carreira',
        text: 'Enquanto não vir gente capaz de tomar conta deste país, sou incómodo.'
    },
    {
        id: 'q2',
        author: 'Millôr Fernandes',
        text: 'Chato - Indivíduo que tem mais interesse em nós do que nós temos nele.'
    },
    {
        id: 'q3',
        author: 'Medina Carreira',
        text: 'Portugal é o país dos achadores. Toda a gente acha. Liga-se a televisão e ouve-se toda a gente a achar.'
    },
    {
        id: 'q4',
        author: 'Millôr Fernandes',
        text: 'Democracia é quando eu mando em você, ditadura é quando você manda em mim.'
    }
]

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes
