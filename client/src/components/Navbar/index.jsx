import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import Auth from "../../utils/auth";

import { Button, Container, Header, Menu } from "semantic-ui-react";

export default function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <Menu borderless inverted  className="navbar">
          <Container >
            <Menu.Item position="left">
              <Header as="h1" style={{ fontSize: "5em" }}>
                VERSUS
              </Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Menu.Item>
                <Link className="item" to="/">
                  HOME{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" to="/post">
                  MATCHUP{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" to="/profile">
                  PROFILE{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Button className="item" onClick={logout}>
                  LOGOUT{" "}
                </Button>
              </Menu.Item>
            </Menu.Item>
          </Container>
        </Menu>
      ) : (
        <Menu borderless inverted className="navbar">
          <Container>
            <Menu.Item position="left">
              <Header as="h1" inverted style={{ fontSize: "5em" }}>
                VERSUS
              </Header>
            </Menu.Item>
            <Menu.Item position="right">
              <Menu.Item>
                <Link className="item" to="/">
                  HOME{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" to="/post">
                  MATCHUP{" "}
                </Link>
              </Menu.Item>
              <Menu.Item>
                <Link className="item" to="/login">
                  LOGIN{" "}
                </Link>
                <Link className="item" to="/signup">
                  SIGNUP{" "}
                </Link>
              </Menu.Item>
            </Menu.Item>
          </Container>
        </Menu>
      )}
    </div>
  );
}
