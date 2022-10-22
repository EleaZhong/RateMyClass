// import packages
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'

// import components
import Home from './components/Home'

// main app component
export default function App() {
    return (
        <div style={{
                width: '100%',
                height: '100%',
                position: 'absolute',
                boxSizing: 'border-box',
                top: 0,
                left: 0,
            }}>

            {/* wrap app in theme */}
            <ThemeProvider theme={theme}>
                <BrowserRouter>
                    <Routes>

                        {/* Routes */}
                        <Route path='/' element={<Home />} />

                    </Routes>
                </BrowserRouter>
            </ThemeProvider>

        </div>
    )
}

// create material-ui theme to be used throughout react app
const theme = createTheme({
    palette: {
        primary: {
            // insert primary colors to use
            // (need to change colors, these are just for example)
            light: '#f9e3f4',
            main: '#ee02ab',
            dark: '#860078',
        },
        secondary: {
            light: '#defabb',
            main: '#02ee45',
            dark: '#008d0c',
        }
    },
})