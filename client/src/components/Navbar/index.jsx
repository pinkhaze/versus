import { Link } from 'react-router-dom'
import '../../styles/navbar.css'

import {
  Button,
  Container,
  Header,
  Menu
} from "semantic-ui-react";

const styles = {
  navbar: {
  display: 'flex',
  justifyContent: 'flex-end',
  backgroundColor: 'yellow'
  },
  list: {
    listStyle: 'none',
    display: 'flex',
    gap: '1rem',
    fontSize: '30px',
  },
  buttons: {
    padding: '15px'
  }
}

export default function Navbar () {
    return (
      <div>
          <Menu borderless>
            <Container>
              <Menu.Item className='item' position='left'>
                <Header as='h1'  style={{ fontSize: "5em" }}>VERSUS</Header>
              </Menu.Item>
              <Menu.Item position='right'>
                <Menu.Item> 
                  <Link className="item" to="/">Home </Link>
                </Menu.Item>
                <Menu.Item>
                  <Link className="item" to="/profile">Profile </Link>
                </Menu.Item>
                <Menu.Item>
                  <Button >
                    <Link to="/login">Login </Link>
                  </Button>
                  <Button>
                  <Link to="/signup">Signup </Link>
                    </Button>
                </Menu.Item>
              </Menu.Item>
            </Container>
          </Menu>
      </div>
    )
  }
