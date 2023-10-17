import { Link } from "react-router-dom";
import { Button, Container, Grid, Header, Segment } from "semantic-ui-react";

import Carousel from '../components/Carousel'

const Home = () => {
  return (
    <div>
      <Segment style={{ padding: '6em 0em' }} vertical >
        <Grid container stackable verticalAlign='middle' >
          <Grid.Row >
            <Grid.Column width={8} >
              <Container className="points">
                <Header as='h3' style={{ fontSize: '1.8em' }} >
                  Versus - The Ultimate Decision-Maker App!
                </Header >
                <p style={{ fontSize: '1.1em' }} >
                  Is it possible to compare the thrill of driving a Honda to the joy of indulging in an ice cream sandwich? We're about to find out!
                </p>
                <Header as='h3' style={{ fontSize: '1.4em' }} >
                  Get ready to make some tough choices! 
                </Header >
                  <p style={{ fontSize: '1em' }} >
                  We present you with side-by-side comparisons, and it's up to you to decide which one reigns supreme.
                </p>
                <Header as='h3' style={{ fontSize: '1.4em' }} >
                  Share Your Verdict:
                </Header >
                  <p style={{ fontSize: '1em' }} >
                  Think you've made the ultimate choice? Share your decision with friends and see if they agree or disagree!
                </p>
                
              </Container>
            </Grid.Column >
            <Grid.Column floated='right' width={6}>
              <Carousel />
            </Grid.Column >
          </Grid.Row >
        </Grid >
      </Segment >
      <Segment style={{ padding: '5em 0em' }} vertical>
        <Container >
          <Grid centered columns={2} >
            <Grid.Column verticalAlign="middle">
              <Header as='h5' style={{ fontSize: '1.8em' }}>
                If you are already part of the Versus community, enter your credentials and dive right into the fun!</Header >
                <br></br>
              <Link to={'/login'}><Button className='huge teal'>Login</Button ></Link >
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Header as="h5" style={{ fontSize: '1.8em' }}>
                New to Versus? Sign up and join the debate to cast your votes and be part of the decision-making action.</Header >
                <br></br>
              <Link to='/signup'><Button className='huge teal'>Signup</Button > </Link >
            </Grid.Column >
          </Grid >
        </Container >
      </Segment >
    </div>
  );
};

export default Home;
