import { BrowserRouter, Switch, Route } from 'react-router-dom';
import App from '../src/App';
import { Dashboard } from './pages/Dashboard/Dashboard';

const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <App />
        </Route>
        <Route path='/dashboard'>
          <Dashboard />
        </Route>
        <Route >
          <h1>ERROR 404: PAGE NOT FOUND</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  )
}
export default Router;