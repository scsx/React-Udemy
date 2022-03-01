const Auth = () => {
    return (
        <main>
            <section>
                <form>
                    <div>
                        <label htmlFor='email'>Email</label>
                        <input type='email' id='email' />
                    </div>
                    <div>
                        <label htmlFor='password'>Password</label>
                        <input type='password' id='password' />
                    </div>
                    <button>Login</button>
                </form>
            </section>
        </main>
    )
}

export default Auth
