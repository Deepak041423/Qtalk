import { Link, Stack, Typography } from '@mui/material'
import { Link as RouterLink } from 'react-router-dom'
import React from 'react'
import { RegisterForm } from '../../sections/auth/RegisterForm'
import AuthSocial from '../../sections/auth/AuthSocial'


const Register = () => {
    return (
        <>
            <Stack spacing={2} sx={{ mb: 5, position: 'relative' }}>
                <Typography variant='h4'>Get Started With Qtalk</Typography>

                <Stack direction={'row'} spacing={0.5}>
                    <Typography variant='body2'>Already have an account?</Typography>
                    <Link component={RouterLink} to='/auth/login' variant='subtitle2'>Sign in</Link>
                </Stack>
                {/* Register Form */}
                <RegisterForm/>

                

                <Typography component={'div'} sx={{ color: 'text.secondary', mt: 3, typography: 'caption', textAlign: 'center' }}>
                    {'By Signing up, I agree to '}
                    <Link component={RouterLink} to='https://www.google.com/' underline='always' color='text.primary'>Terms of Service</Link>
                    {' and '}
                    <Link component={RouterLink} to='/auth/register' underline='always' color='text.primary'>Privacy Policy</Link>
                </Typography>

                {/* Auth Social */}
                <AuthSocial />
            </Stack>

        </>
    )
}

export default Register

//9:20