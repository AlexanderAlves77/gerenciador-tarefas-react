import { Switch, Route } from 'react-router'
import './styles/app.scss'
import { Login } from './pages/Login'
import { Home } from './pages/Home'
import { useState } from 'react'
import { assertDeclareClass } from '@babel/types'

function App() {
  const [accessToken, setAccessToken] = useState(
    localStorage.getItem('accessToken')
  )

  return (
    <Switch>
      {!accessToken ? (
        <Route path="*">
          <Login setAccessToken={setAccessToken} />
        </Route>
      ) : (
        <Route path="*">
          <Home setAccessToken={setAccessToken} />
        </Route>
      )}
    </Switch>
  )
}

export default App
