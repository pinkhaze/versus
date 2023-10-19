import { Header} from 'semantic-ui-react';
import { Form, Input, Button } from "semantic-ui-react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useMutation } from "@apollo/client";
import { ADD_POST } from "../../utils/mutations";

import Auth from "../../utils/auth";

function PostForm() {
  const [formState, setFormState] = useState({
    post1: "",
    post2: "",
    username: "",
  });
  const [addPost] = useMutation(ADD_POST);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    console.log(addPost);
    try {
      const { data } = await addPost({
        variables: {
          option1: formState.post1,
          option2: formState.post2,
          username: Auth.getProfile().data.username,
        },
      });
    } catch (error) {
      console.error(error);
    }

    // setFormState({ post1: "", post2: "" });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <div>
      {Auth.loggedIn() ? (
        <Form className="form" onSubmit={handleFormSubmit}>
          <Form.Field
            id="form-input-control-email"
            control={Input}
            label="Option 1"
            type="text"
            name="post1"
            value={formState.post1}
            onChange={handleChange}
          />
          <Form.Field
            id="form-input-control-password"
            control={Input}
            label="Option 2"
            type="text"
            name="post2"
            value={formState.post2}
            onChange={handleChange}
          />
          <Form.Field
            id="form-button-control-public"
            control={Button}
            content="Submit"
          />
        </Form>
      ) : (
        <Header as='h3' style={{ fontSize: '1.8em' }} > You need to be logged in to create a matchup. Please{" "}
          <Link to="/login" style={{ textDecoration: 'none' }}>login</Link> or <Link to="/signup" className="link">signup.</Link>
        </Header >
      )}
    </div>
  );
}

export default PostForm;
