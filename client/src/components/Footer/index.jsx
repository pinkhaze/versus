import { Container, Grid, Header, Menu, Segment, Form, Button } from "semantic-ui-react";

function Footer() {
    return (
      <div>
        <Segment inverted vertical style={{ padding: "5em 0em" }}>
          <Container>
            <Grid divided stackable>
              <Grid.Row>
                <Grid.Column width={8} >
                  <Header inverted as="h3" content="About" />
                  <Menu inverted borderless>
                    <Menu.Item as="a" className="github-link" href="https://github.com/barrenac9587" >
                      <Header inverted as="h4" content="Carlos" />
                      <i className="github icon huge"></i>
                    </Menu.Item>
                    <Menu.Item as="a" className="github-link" href="https://github.com/frvnlol" >
                      <Header inverted as="h4" content="Francis" />
                      <i className="git square icon huge"></i>
                    </Menu.Item>
                    <Menu.Item as="a" className="github-link" href="https://github.com/brownKasey" >
                      <Header inverted as="h4" content="Kasey" />
                      <i className="github square icon huge"></i>
                    </Menu.Item>
                    <Menu.Item as="a" className="github-link" href="https://github.com/pinkhaze" >
                      <Header inverted as="h4" content="Monika" />
                      <i className="github alternate icon huge"></i>
                    </Menu.Item>
                  </Menu>
                </Grid.Column>
                <Grid.Column width={6}>
                  <Header as="h3" inverted content="Sign up for our newlestter">
                  </Header>
                  <Form success inverted>
                    <Form.Input label='Email' placeholder='joe@schmoe.com' />
                    {/* <Message
                      success
                      header='Form Completed'
                      content="You're all signed up for the newsletter" /> */}
                    <Button className="large teal">Submit</Button>
                  </Form>
                </Grid.Column>
              </Grid.Row>
            </Grid>
          </Container>
        </Segment>
        </div>
    );
  }

  export default Footer;