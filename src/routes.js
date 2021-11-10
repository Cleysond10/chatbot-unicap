import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../src/App';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/dashboard'>
          <div>BEM-VINDO, COORDENADOR!</div>
        </Route>
        <Route >
          <h1>ERROR 404: PAGE NOT FOUND</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Router;