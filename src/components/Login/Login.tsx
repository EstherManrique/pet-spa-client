import React, { useState, useEffect, Fragment } from 'react'
import { FaSignInAlt } from 'react-icons/fa';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = (event: { target: { name: any; }; }) => {
    setFormData((prevState) => ({
      ...prevState,
      [event.target.name]: (event.target as HTMLInputElement).value
    }))
  };

  const onSubmit = (event: { preventDefault: () => void; }) => {
    event.preventDefault()
  };

  return (
    <Fragment>
      <section className='container'>
        <h1>
          <FaSignInAlt /> Login
        </h1>
        <p>Login and do a reservation!</p>
      </section>
      <section className="form">
        <form onSubmit={onSubmit}>
          <div className='form-group'>
            <input type="email" className="form-control" id='email' name='email' value={email} placeholder='Enter your email' onChange={onChange} />
          </div>
          <div className='form-group'>
            <input type="password" className="form-control" id='password' name='password' value={password} placeholder='Enter your password' onChange={onChange} />
          </div>
          <div className='form-group'>
            <button type='submit' className='btn btn-block'>Submit</button>
          </div>
        </form>
      </section>
    </Fragment>
  )
}

export default Login;