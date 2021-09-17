import ClubTable from './ClubTable'

const Clubs = () => {
    return (
        <section className='hero'>
            <div className='hero-body'>
                <p className='title'>Clubs</p>
                <p className='subtitle'>
                    The Premier League, often referred to as the English Premier
                    League or the EPL (legal name: The Football Association
                    Premier League Limited), is the top level of the English
                    football league system.
                </p>
                <ClubTable />
            </div>
        </section>
    )
}

export default Clubs
