import { Link } from "react-router-dom";
import {
  Button,
  Container,
  Grid,
  Header,
  Segment,
} from "semantic-ui-react";

import Carousel from '../components/Carousel'
import "pure-react-carousel/dist/react-carousel.es.css";

const styles = {
  grid: {
      padding: '5px',
      minHeight: '600px',
  },
}

const Home = () => {
  return (
    <div>
    <Segment style={{ padding: "6em 0em" }} vertical>
      <Grid container stackable verticalAlign="middle">
        <Grid.Row>
          <Grid.Column width={8}>
            <Header as="h3" style={{ fontSize: "1.5em" }}>
              Point 1
            </Header>
            <p style={{ fontSize: "1em" }}>
              Point 2
            </p>
            <Header as="h3" style={{ fontSize: "1.5em" }}>
              Point 3
            </Header>
            <p style={{ fontSize: "1em" }}>
              Point 4
            </p>
          </Grid.Column>
          <Grid.Column floated="right" width={6}>
            <Carousel/>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
    <Segment style={{ padding: "6em 0em" }} vertical>
      <Container text>
        <Header as="h3" style={{ fontSize: "2em" }}>
          Breaking The Grid, Grabs Your Attention
        </Header>
        <Grid.Row>
            <Button size="large pink">Login</Button>
            <Button size="large pink">Signup</Button>
        </Grid.Row>
      </Container>
    </Segment>
    </div>
  );
};

export default Home;
