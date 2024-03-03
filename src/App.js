import { useState } from 'react';
import { Header, Footer } from './Components'
import { Outlet, useNavigate } from 'react-router-dom';
// import Home from './Pages/Home/Home.js'
const App = () => {
    const [isAuthenticated, setAuthenticationStatus] = useState(false)
    const navigate = useNavigate()

    const toggleAuthentication = () => {
        setAuthenticationStatus(!isAuthenticated)
        navigate('/', {replace: true, state: { key: "value" } })
    }

    return ( 
      <>
        <Header isAuthenticated={isAuthenticated} 
          toggleAuthentication={toggleAuthentication}
        />
        <Outlet />
      </>
    )
}

export default App;
