import { Link } from "react-router-dom";
import { Button, Container, Grid, Header, Segment } from "semantic-ui-react";

const styles = {
  grid: {
      padding: '5px',
      minHeight: '700px',
  },
}

const Home = () => {
  return (
    <div>
      <Segment style={{ padding: '6em 0em' }} vertical >
        <Grid container stackable verticalAlign='middle' >
          <Grid.Row >
            <Grid.Column width={8} >
              <Header as='h3' style={{ fontSize: '1.5em' }} >
                Point 1
              </Header >
              <p style={{ fontSize: '1em' }} >
                Point 2
              </p>
              <Header as='h3' style={{ fontSize: '1.5em' }} >
                Point 3
              </Header >
              <p style={{ fontSize: '1em' }} >
                Point 4
              </p>
            </Grid.Column >
            <Grid.Column floated='right' width={6}>
              <p>Carousel Placeholder</p>
            </Grid.Column >
          </Grid.Row >
        </Grid >
      </Segment >
      <Segment style={{ padding: '5em 0em' }} vertical>
        <Container >
          <Grid centered columns={2} >
            <Grid.Column verticalAlign="middle">
              <Header as='h5' style={{ fontSize: '2em' }}>
                If you are already part of the Versus community, enter your credentials and dive right into the fun!</Header >
              <Link to={'/login'}><Button className='huge teal'>Login</Button ></Link >
            </Grid.Column>
            <Grid.Column verticalAlign="middle">
              <Header as="h5" style={{ fontSize: '2em' }}>
                New to Versus? No worries! Sign up and join the debate to cast your votes and be part of the decision-making action.</Header >
              <Link to='/signup'><Button className='huge teal'>Signup</Button > </Link >
            </Grid.Column >
          </Grid >
        </Container >
      </Segment >
    </div>
  );
};

export default Home;
