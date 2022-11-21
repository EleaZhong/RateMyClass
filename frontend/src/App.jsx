// import packages
import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { grey, lightBlue, lightGreen, red } from '@mui/material/colors';

// import components
import SearchClass from './components/SearchClass'
import DisplayClass from './components/DisplayClass'
import ListClass from './components/ListClass'

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
                        <Route path='/' element={<SearchClass />} />
                        <Route path='/class/:id' element={<DisplayClass />} />
                        <Route path='/class' element={<ListClass />} />

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
            main: lightGreen[400],
        },
        secondary: {
            main: lightBlue[400],
        },
        action: {
            main: red[400],
            disabled: grey[400],
        },
        white: {
            main: grey[0],
        }
      },
})