import { Header, Divider } from 'semantic-ui-react'
import SignupForm from '../components/SignupForm'

const styles = {
    grid: {
        marginTop: '50px',
        padding: '5px',
        minHeight: '600px',
    },
    divider: {
        height: '200px',
    },
}

const Signup = () => {

    return (
        <div className="ui vertical segment">
        <div style={styles.grid} className="ui middle aligned stackable grid container content-box">
            <div className="row">
                <div className="eight wide column">
                    <Header as='h3' style={{ fontSize: '1.8em' }}>
                    SIGNUP
                    </Header >
                    <p style={{ fontSize: "1.3em" }} >
                    Sign Up Now: It's as easy as enjoying an ice cream sandwich on a sunny day! 
                    </p>
                </div>
                <div className="six wide centered column">
                    <SignupForm />
                </div>
            </div>
            <Divider style={styles.divider} vertical></Divider>
        </div>
    </div>
    )
}

export default Signup;
