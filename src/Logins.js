import React, { useState } from 'react';
import { connect } from 'react-redux';
import { FormControlLabel, Checkbox, Link } from '@mui/material';
import './logins.css';

const Logins = ({ errorMessages, loggedIn, login, loginError }) => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);
  const [userName, setUserName] = useState(''); // Add state for user name

  const errors = {
    uname: 'Invalid username',
    pass: 'Invalid password',
  };

  const [localErrorMessages, setLocalErrorMessages] = useState({});

  const handleSubmit = (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const uname = formData.get('uname');
    const pass = formData.get('pass');

    // Validate username using regex: only allow A-Z characters
    const unameRegex = /^[A-Za-z]+$/;
    const isUnameValid = unameRegex.test(uname);

    // Validate password using regex: at least 8 characters and contain at least one uppercase letter, one lowercase letter, one digit, and one special character
    const passRegex = /^(?=.[a-z])(?=.[A-Z])(?=.\d)(?=.[@$!%?&])[A-Za-z\d@$!%?&]{8,}$/;
    const isPassValid = passRegex.test(pass);

    if (isUnameValid && isPassValid) {
      setIsSubmitted(true);
      setUserName(uname); // Store the user name
      login();
    } else {
      let errorMessages = {};

      if (!isUnameValid) {
        errorMessages = { ...errorMessages, uname: errors.uname };
      }

      if (!isPassValid) {
        errorMessages = { ...errorMessages, pass: errors.pass };
      }

      setLocalErrorMessages(errorMessages);
      loginError(errorMessages);
    }
  };

  const handleRememberMe = (event) => {
    setRememberMe(event.target.checked);
  };

  const renderErrorMessage = (name) => (
    name === localErrorMessages.name && <div className="error">{localErrorMessages.message}</div>
  );

  const renderForm = (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <div className="input-containers">
          <h6><center>Username</center></h6>
          <input type="text" style={{ borderBottom: '2px solid #9c6990',borderTop:'2px solid white',borderLeft:'2px solid white',borderRight:'2px solid white'  }} name="uname" required />
          {renderErrorMessage('uname')}
        </div><br/><br/>
        <div className="input-containers">
          <h6>Password</h6>
          <input
            type="password"
            style={{ borderBottom: '2px solid #9c6990',borderTop:'2px solid white',borderLeft:'2px solid white',borderRight:'2px solid white'  }}
            className="pass1"
            name="pass"
            required
          />
          {renderErrorMessage('pass')}
        </div>
        <div className="checkbox-container">
          <FormControlLabel
            control={<Checkbox checked={rememberMe} onChange={handleRememberMe} />}
            label="Remember me"
          />
          <Link href="Forgot Password">Forgot Password?</Link>
        </div>
        <div className="button-container">
          <Link to="/home">
            <input className="letin" type="submit" style={{ "outline": 'none' }} value="Sign In" />
          </Link>
        </div>
      </form>
    </div>
  );

  const renderSuccessMessage = (
    <div>
      User is successfully logged in. Welcome, <h5><b>{userName}!</b></h5>
    </div>
  );

  return (
    <div className="app4">
      <div className="login-form">
        <div className="title">
          <b>
            <center>Sign In</center>
          </b>
        </div>
        {isSubmitted ? (
          <>
            {renderSuccessMessage}
            {<Link href="./home">home</Link>}
          </>
        ) : (
          <>
            {renderForm}
            <br />
            <div className="dd">
              Not a member? <Link href="./RegisterForm">Register</Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  loggedIn: state.loggedIn,
  errorMessages: state.errorMessages,
});

const mapDispatchToProps = (dispatch) => ({
  login: () => dispatch({ type: 'LOGIN' }),
  loginError: (errorMessages) => dispatch({ type: 'LOGIN_ERROR', payload: errorMessages }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Logins);