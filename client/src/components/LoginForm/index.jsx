import { Form, Input, Button } from 'semantic-ui-react'
import { useMutation } from '@apollo/client';
import { LOGIN_USER } from '../../utils/mutations';
import { useState } from 'react'

import Auth from '../../utils/auth';

function LoginForm() {
    const [formState, setFormState] = useState({ email: '', password: '' });
    const [login] = useMutation(LOGIN_USER);
  
    // update state based on form input changes
    const handleChange = (event) => {
      const { name, value } = event.target;
  
      setFormState({
        ...formState,
        [name]: value,
      });
    };
  
    // submit form
    const handleFormSubmit = async (event) => {
      event.preventDefault();
      console.log(formState);
      try {
        const { data } = await login({
          variables: { ...formState },
        });
  
        Auth.login(data.login.token);
      } catch (e) {
        console.error(e);
      }
  
      // clear form values
      setFormState({
        email: '',
        password: '',
      });
    };

    return (
      <Form className='form' onSubmit={handleFormSubmit}>
        <Form.Field
          id='form-input-control-email'
          control={Input}
          label='email'
          type="text"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        <Form.Field
          id='form-input-control-password'
          control={Input}
          label='password'
          placeholder='*******'
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        <Form.Field
          id='form-button-control-public'
          control={Button}
          content='Submit'
        />
        </Form>
    );
  }

  export default LoginForm;