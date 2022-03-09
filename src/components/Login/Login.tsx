import React, { Fragment } from 'react'
import { Button, Container, Form, Stack } from 'react-bootstrap'
// import { LoginCredentials } from '../../helpers/interfaces'

const Login = () => {
  // const [email, setEmail] = useState<LoginCredentials>();
  // const [password, setPassword] = useState([]);

  return (
    <Fragment>
      <Container>
        <div>Login Page</div>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"/>
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>

        <Stack gap={2} className="col-md-5 mx-auto pt-5">
          <Button variant="secondary">Save changes</Button>
          <Button variant="outline-secondary">Cancel</Button>
        </Stack>
      </Container>
    </Fragment>
  )
}

export default Login