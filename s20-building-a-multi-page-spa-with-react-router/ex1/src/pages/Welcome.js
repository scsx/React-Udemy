import { Route, Link } from 'react-router-dom'

const Welcome = () => {
    return (
        <section className='hero'>
            <div className='hero-body'>
                <p className='title'>Welcome</p>
                <p className='subtitle'>
                    This is the general public area. If you're a fan{' '}
                    <Link to='/welcome/fanpage'>click here.</Link>
                </p>
                <Route path='/welcome/fanpage'>
                    <article className='message'>
                        <div className='message-header'>
                            <p>Welcome fan!</p>
                            <Link
                                to='/welcome'
                                className='delete'
                                aria-label='delete'></Link>
                        </div>
                        <div className='message-body'>
                            Lorem ipsum dolor sit amet, consectetur adipiscing
                            elit. <strong>Pellentesque risus mi</strong>, tempus
                            quis placerat ut, porta nec nulla. Vestibulum
                            rhoncus ac ex sit amet fringilla. Nullam gravida
                            purus diam, et dictum <a>felis venenatis</a>{' '}
                            efficitur. Aenean ac <em>eleifend lacus</em>, in
                            mollis lectus. Donec sodales, arcu et sollicitudin
                            porttitor, tortor urna tempor ligula, id porttitor
                            mi magna a neque. Donec dui urna, vehicula et sem
                            eget, facilisis sodales sem.
                        </div>
                    </article>
                </Route>
            </div>
        </section>
    )
}

export default Welcome
