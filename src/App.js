import Register from './components/Register'
import { Route, Switch } from 'react-router-dom'
import Login from './components/Login'
import Products from './components/Products'

import Checkout from './components/Checkout'
import Thanks from './components/Thanks'


export const config = {
   endpoint: `https://content-qkart-qa-backend.azurewebsites.net/api/v1`,
  
}

function App() {
  return (
    <div className="App">
     
      <Switch>
        <Route path="/register">
     
          <Register />
         
        </Route>
           
        <Route path="/login">
          <Login />
        </Route>
              <Route exact path="/">
          <Products />
        </Route>
       
        <Route path="/checkout">
          <Checkout />
        </Route>
       
        <Route path="/thanks">
          <Thanks />
        </Route>
       
       
        
      </Switch>
     
    </div>
  )
}

export default App
