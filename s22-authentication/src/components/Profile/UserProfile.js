import ProfileForm from './ProfileForm'
import classes from './UserProfile.module.css'

const UserProfile = () => {
    return (
        <section className={classes.profile}>
            <h1>Profile</h1>
            <ProfileForm />
        </section>
    )
}

export default UserProfile
