import { Header, Divider } from "semantic-ui-react";

import PostForm from "../components/PostForm";

const styles = {
  grid: {
    marginTop: "50px",
    padding: "5px",
    minHeight: "600px",
  },
  divider: {
    height: "200px",
  },
};

const Post = () => {
  return (
    <div className="ui vertical segment">
      <div style={styles.grid} className="ui middle aligned stackable grid container content-box">
        <div className="row">
          <div className="eight wide column">
            <Header as="h3" style={{ fontSize: "1.8em" }} >
              CREATE A MATCHUP
            </Header >
              <p style={{ fontSize: "1.1em" }} >
                Choose two opposing items such as Ice Cream Vs. Cake, or two
                random things like an Ice Cream Sandwich vs. a Honda Civic, the
                choice is yours!
              </p>
          </div>
          <div style={styles.form} className="six wide centered column">
            <PostForm />
          </div>
        </div>
        <Divider vertical style={styles.divider} ></Divider>
      </div>
    </div>
  );
};

export default Post;
