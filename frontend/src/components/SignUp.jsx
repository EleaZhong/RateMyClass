import React from 'react'
import {
    Button,
    Container as MuiContainer,
    Divider,
    FormControl,
    Paper as MuiPaper,
    styled,
    TextField,
    Typography,
} from '@mui/material'

import { signUp } from '../services/authService'
import ClassAppbar from './ClassAppbar'

function SignUp(props) {

    const Container = styled(MuiContainer)(({theme}) => ({
        display: 'flex',
        justifyContent: 'center',
        paddingTop: theme.spacing(15)
    }))

    const Paper = styled(MuiPaper)(({theme}) => ({
        backgroundColor: theme.palette.primary.light,
        width: theme.spacing(45),

        padding: theme.spacing(5),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
    }))

    const Spacer = styled('div')(({theme}) => ({
        height: theme.spacing(5)
    }))

    const SpacerSmall = styled('div')(({theme}) => ({
        height: theme.spacing(3)
    }))

    const Title = styled(Typography)(({theme}) => ({
        color: theme.palette.primary.main,
    }))

    const nameRef = React.useRef('')
    const usernameRef = React.useRef('')
    const emailRef = React.useRef('')
    const passwordRef = React.useRef('')
    const confirmPasswordRef = React.useRef('')

    // submit SignUp data
    const handleSubmit = async (e) => {
        e.preventDefault()

        const userData = {
            name: nameRef.current.value,
            username: usernameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
        }

        // attempt user sign up

        signUp(userData).catch((error) => {
            console.log(error)
            alert(error.data.msg)
        })
    }

    return (
        <div>
            <ClassAppbar search={true} />
            <Container>
                <div style={{width: '35%'}}>
                    {/* Title */}
                    <Title variant='h3'>
                        Sign Up
                    </Title>
                    <Divider />
                    <SpacerSmall />

                    {/* SignUp Form */}
                    <form onSubmit={handleSubmit}
                        style={{
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center'
                        }}>
                        <FormControl>
                            <TextField
                                variant='outlined'
                                label='Email'
                                inputProps={{sx: {color: 'primary.darkest'}}}
                                inputRef={emailRef}
                            />
                        </FormControl>
                        <SpacerSmall />
                        <FormControl>
                            <TextField
                                variant='outlined'
                                label='Password'
                                inputProps={{sx: {color: 'primary.darkest'}}}
                                inputRef={passwordRef}
                                type='password'
                            />
                        </FormControl>
                        <SpacerSmall />
                        <FormControl>
                            <TextField
                                variant='outlined'
                                label='Confirm Password'
                                inputProps={{sx: {color: 'primary.darkest'}}}
                                inputRef={confirmPasswordRef}
                                type='password'
                            />
                        </FormControl>
                        <SpacerSmall />
                        <Button
                            variant='contained'
                            type='submit'
                        >
                            Submit
                        </Button>
                    </form>
                </div>
            </Container>
        </div>
    )
}

export default SignUp