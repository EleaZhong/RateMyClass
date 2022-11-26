import React from 'react'
import {
    Button as MuiButton,
    Container as MuiContainer,
    styled,
    TextField as MuiTextField,
    Typography,
} from '@mui/material'
import { useLocation, useNavigate } from 'react-router-dom'

import ClassAppbar from './ClassAppbar'

import { insert as insertClass } from '../services/classService'

const Button = styled(MuiButton)(({theme}) => ({
    width: '100%'
}))

const Container = styled(MuiContainer)(({theme}) => ({
    display: 'flex',
    justifyContent: 'center',
    paddingTop: '30vh'
}))

const TextField = styled(MuiTextField)(({theme}) => ({
    width: '100%',
}))

const Title = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.main,
}))

const NewClass = (props) => {
    const navigate = useNavigate()

    const classIDRef = React.useRef(useLocation().state.classID)
    const classNameRef = React.useRef('')

    // submit new class data
    const handleSubmit = async (e) => {
        e.preventDefault()

        // attempt user sign up
        try {
            const res = await insertClass(classIDRef.current, classNameRef.current)
            console.log()
            /*if (res) {
                // if insertion successful, navigate to new class page
                navigate('class/' + classIDRef.current)
            }*/
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div style={{display: 'flex', width: '100%', height: '100%'}}>
            <ClassAppbar />

            <Container maxWidth='md'>
                <form style={{width: '60%'}} onSubmit={handleSubmit}>
                    <Title variant='h4'>New Class</Title>
                    <div style={{height: '2vh'}} />
                    <TextField variant='outlined' label='Class ID' inputRef={classIDRef} defaultValue={classIDRef.current} />
                    <div style={{height: '2vh'}} />
                    <TextField variant='outlined' label='Class Name' inputRef={classNameRef} />
                    <div style={{height: '2vh'}} />
                    <div style={{height: '2vh'}} />
                    <Button
                        variant='contained'
                        type='submit'
                    >
                        Create
                    </Button>
                </form>
            </Container>
        </div>
    )
}

export default NewClass