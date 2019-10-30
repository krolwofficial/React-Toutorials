import React from 'react';
import Button from './components/common/Button'
import PasswordInput from './components/common/PasswordInput'
import { ThemeProvider, createGlobalStyle } from 'styled-components'
import LightTheme from './theme/light'
import DarkTheme from './theme/dark'
import PrimaryButton from './components/common/PrimaryButton'
import Spinner from './components/common/Spinner'

// const GlobalStyles = createGlobalStyle`
//   body{
//     font-family: ${props => ( props.theme.id === 'light' ? 'Arial' : 'Times New Roman' )} !important
//   }
// `

const GlobalStyle = createGlobalStyle`
  body {
    color: ${props => (props.theme.id === 'light' ? 'red' : 'green')};
  }
`

const App = () => {
  const [theme, setTheme] = React.useState(LightTheme)
  const [showed, setShowed] = React.useState(false)

  return (
    <ThemeProvider theme={theme}>
      {/* <Button primary onClick={() => setTheme( theme.id === 'light' ? DarkTheme : LightTheme )}>
        Text button
      </Button> */}
      {/* <br />
      <PasswordInput showed={showed} />
      <Button onClick={() => setShowed( !showed )}>
        {showed === true ? 'Hide' : 'Show' }
      </Button> */}
      {/* <PrimaryButton color="primary">
        Primary button
      </PrimaryButton> */}
      {/* <GlobalStyle showed /> */}
      <Spinner />
    </ThemeProvider>
  );
}

export default App;
