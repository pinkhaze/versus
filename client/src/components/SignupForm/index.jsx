import { Form, Input, Button } from "semantic-ui-react";
import { useState } from "react";

import { useMutation } from "@apollo/client";
import { ADD_USER } from "../../utils/mutations";

import Auth from "../../utils/auth";

function Signup() {
  const [formState, setFormState] = useState({
    username: "",
    email: "",
    password: "",
  });
  const [addUser] = useMutation(ADD_USER);

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    // console.log(addUser)
    try {
      const mutationResponse = await addUser({
        variables: {
          username: formState.username,
          email: formState.email,
          password: formState.password,
        },
      });

      const token = mutationResponse.data.addUser.token;
      Auth.login(token);
    } catch (error) {
      console.error(error);
    }
  };

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormState({
      ...formState,
      [name]: value,
    });
  };

  return (
    <Form onSubmit={handleFormSubmit} className="form">
      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-name"
          control={Input}
          label="Name"
          type="text"
          name="username"
          value={formState.username}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Group widths="equal">
        <Form.Field
          id="form-input-control-error-email"
          control={Input}
          label="Email"
          placeholder="john@doe.com"
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
      </Form.Group>

      <Form.Field
        id="form-input-control-name"
        control={Input}
        label="Password"
        type="password"
        name="password"
        value={formState.password}
        onChange={handleChange}
      />

      <Form.Field
        id="form-button-control-public"
        control={Button}
        content="Submit"
      />
    </Form>
  );
}

export default Signup;
