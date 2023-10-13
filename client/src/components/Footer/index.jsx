import { Container, Grid, Header, Menu, Segment,
} from 'semantic-ui-react';

function Footer() {
    return (
      <div>
        <Segment inverted vertical style={{ padding: '5em 0em' }}>
          <Container>
            <Grid divided stackable>
              <Grid.Row>
                <Grid.Column width={4}>
                  <Header inverted as="h4" content="About" />
                  <Menu inverted borderless>
                    <Menu.Item as="a">Link </Menu.Item>
                    <Menu.Item as="a">Link </Menu.Item>
                    <Menu.Item as="a">Link </Menu.Item>
                    <Menu.Item as="a">Link </Menu.Item>
                  </Menu>
                </Grid.Column>
                <Grid.Column width={7}>
                  <Header as="h4" inverted>
                    Contact Us
                  </Header>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        </div>
    );
  }

  export default Footer;