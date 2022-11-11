/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/jsx-one-expression-per-line */
import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
// import { useDispatch } from 'react-redux';

// Components
import { Typography, TextField, Button } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Link, useNavigate } from 'react-router-dom';

// Images / Styling
import './Login.css';
import Logo from '../../../assets/logos/IBLogo.png';

const Bounce = require('react-reveal/Bounce');

export default function Login() {
  const [submitting, setSubmitting] = useState(false);
  // const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function processSubmit(data) {
    console.log('data', data.email);
    console.log('password', data.password);
    setSubmitting(true);
    // const email = data.email.toLowerCase();

    //   // try {} catch (error) {}
  }

  return (
    <div className="rootContainer">
      <Bounce left>
        <form className="form" onSubmit={handleSubmit(processSubmit)}>
          <div className="loginContainer">
            <img src={Logo} className="logoImage" alt="Ice Breaker" />
            <Typography className="h1" sx={{ marginBottom: 3, marginTop: 6 }}>
              Login to Ice Breaker
            </Typography>
            <TextField
              error={!!errors.email}
              label="Email"
              fullWidth
              size="small"
              {...register('email', {
                required: true,
                pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
              })}
              sx={{ marginBottom: 2 }}
            />
            <TextField
              error={!!errors.password}
              label="Password"
              fullWidth
              type="password"
              size="small"
              {...register('password', {
                required: true,
                pattern: /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8}/,
              })}
            />

            <input type="submit" style={{ display: 'none' }} />
            <LoadingButton
              variant="contained"
              fullWidth
              size="large"
              loading={submitting}
              // loadingPosition={'end'}
              onClick={handleSubmit(processSubmit)}
              sx={{ marginTop: 3, marginBottom: 1 }}
            >
              Log in
            </LoadingButton>
            <Typography className="font1" sx={{ marginRight: 0.8 }}>
              Forgot your password?{' '}
              <Link className="link" to="/forgot-password">
                Reset it here
              </Link>
            </Typography>
            <Typography className="font1" sx={{ marginRight: 0.8 }}>
              Not yet registered?{' '}
              <Link className="link" to="/register">
                Sign up
              </Link>
            </Typography>
          </div>
          <Typography sx={{ marginTop: 1 }}>Powered by Ice Breaker</Typography>
        </form>
      </Bounce>
    </div>
  );
}
