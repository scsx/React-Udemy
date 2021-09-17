import { useParams, Link } from 'react-router-dom'

const ClubDetail = () => {
    const params = useParams()
    return (
        <section className='hero'>
            <div className='hero-body'>
                <p className='title'>{params.clubId}</p>
                <p className='subtitle'>
                    Club is a professional football club based in Place in the
                    East Midlands, England. The club competes in the Premier
                    League, the top division of England's football league
                    system, and plays its home matches at the King Power
                    Stadium.
                </p>
                <div>
                    <Link to='/clubs' className='button is-outlined'>
                        Back to clubs
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ClubDetail
