import { Divider } from 'semantic-ui-react'
import SignupForm from '../components/SignupForm'

const styles = {
    grid: {
        marginTop: '50px',
        padding: '5px',
        minHeight: '600px',
    },
    divider: {
        height: '200px'
    },
}

const Signup = () => {

    return (
        <div className="ui vertical segment">
        <div style={styles.grid} className="ui middle aligned stackable grid container content-box">
            <div className="row">
                <div className="eight wide column">
                    <h2 className="ui-header">REGISTER.</h2>
                    <p>Sign Up Now: It's a piece of cake... or in this case, a scoop of ice cream! </p>
                </div>
                <div style={styles.form} className="six wide centered column">
                    <SignupForm />
                </div>
            </div>
            <Divider style={styles.divider} vertical></Divider>
        </div>
    </div>
    )
}

export default Signup;
