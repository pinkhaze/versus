import { Link } from "react-router-dom";
import "../../styles/navbar.css";
import Auth from "../../utils/auth";

import { Button, Container, Header, Menu } from "semantic-ui-react";

const styles = {
  navbar: {
    display: "flex",
    justifyContent: "flex-end",
  },
  list: {
    listStyle: "none",
    display: "flex",
    gap: "1rem",
    fontSize: "30px",
  },
};

export default function Navbar() {
  const logout = (event) => {
    event.preventDefault();
    Auth.logout();
  };

  return (
    <div>
      {Auth.loggedIn() ? (
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
              <Menu.Item>
                <Link className="item" to="/login">
                  Login{" "}
                </Link>
                <Link className="item" to="/signup">
                  Signup{" "}
                </Link>
              </Menu.Item>
            </Menu.Item>
          </Container>
        </Menu>
      )}
    </div>
  );
}
