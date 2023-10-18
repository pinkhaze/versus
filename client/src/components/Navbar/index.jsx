import { Link } from "react-router-dom";
import { Button, Container, Header, Menu } from "semantic-ui-react";
import Auth from "../../utils/auth";
import "../../styles/navbar.css";

export default function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <Menu borderless className="navbar">
          <Container>
            <Menu.Item className="item" position="left">
              <Header as="h1" style={{ fontSize: "5em" }}>
                VERSUS
              </Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Menu.Item>
                <Link className="item" to="/">
                  Home{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" to="/post">
                  Create a Matchup{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" to="/profile">
                  Profile{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Button className="item" onClick={logout}>
                  Logout{" "}
                </Button>
              </Menu.Item>
            </Menu.Item>
          </Container>
        </Menu>
      ) : (
        <Menu borderless>
          <Container>
            <Menu.Item className="item" position="left">
              <Header as="h1" style={{ fontSize: "5em" }}>
                VERSUS
              </Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Menu.Item>
                <Link className="item" to="/">
                  Home{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" to="/post">
                  Create a Matchup{" "}
                </Link>
              </Menu.Item>
                <Link to={'/login'}>
                  <Button className='big teal'>Login{" "}</Button >
                </Link >
                <Link to={'/signup'}>
                  <Button className='big teal'>Signup{" "}</Button >
                </Link >
              <Menu.Item>
              </Menu.Item>
            </Menu.Item>
          </Container>
        </Menu>
      )}
    </div>
  );
}
