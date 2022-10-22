import React from 'react'
import {
    Box,
    Typography,
    styled,
} from '@mui/material'

// Home component
export default function Home() {
    return (
        <ExampleBox>
            <ExampleText variant='h5'>Hello there, please rate a class.</ExampleText>
        </ExampleBox>
    )
}

// no need for .css files, can customize css attributes in jsx files
const ExampleBox = styled(Box)(({theme}) => ({
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '60%',
    margin: theme.spacing(15),
    borderRadius: 40,
    backgroundColor: theme.palette.secondary.main,
    transition: '0.25s',
    '&:hover': {
        transition: '0.25s',
        backgroundColor: theme.palette.secondary.light,
    },
}))

const ExampleText = styled(Typography)(({theme}) => ({
    color: theme.palette.primary.main,
}))