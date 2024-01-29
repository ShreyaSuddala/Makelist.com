import React, { useState } from 'react';
import { Button, Card, CardContent, TextField } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import '../assets/styles/Login.css';
import Alert from '@mui/material/Alert';

const LoginPage = () => {
  const navigate = useNavigate();
  const [login, setLogin] = useState({
    userName: '',
    passWord: '',
  });
  const[error,setError] = useState(false)

  const handleChange = (event) => {
    const { id, value } = event.target;
    setLogin((prevLogin) => ({ ...prevLogin,[id]: value, }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (login.userName === 'sshreya' && login.passWord === 'sshreya') {
      console.log('Successful login');
      navigate('/home');
    }
    else{
      setError(true)
    }
  };

  return (
    <div className='login-div'>
      <h3 className='h3class'>Please Enter Your Username and password</h3>
      <Card className='card1'>
        <form onSubmit={handleSubmit}>
          <CardContent>
            <h3>Login Form</h3>
           <TextField
              id='userName' label='Username' placeholder='U S E R N A M E' variant='standard'
          value={login.userName}
             onChange={handleChange}
             autoFocus
            />  
           
      <TextField id='passWord'
              label='Password' placeholder='P A S S W O R D' variant='standard'
                  type='password'
              value={login.passWord}
              onChange={handleChange}
            />
          </CardContent>
          {error && <Alert severity="error">Invalid Credentials</Alert>}
          <Button
            type='submit'
            style={{backgroundColor: 'blue', color: 'white', width: '80px',  height: '8vh' }}>
            Login
          </Button>
        </form>
      </Card>
    </div>
  );
};

export default LoginPage;
