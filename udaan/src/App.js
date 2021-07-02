import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import './App.css';
import { Grid } from './componants/Grid';
import {Gridparam} from './componants/Gridparam';

function App() {
  return (
    <BrowserRouter>
  <Gridparam/>
    <Switch>
      <Route path="/" component={Grid}/>
    </Switch>
    
    </BrowserRouter>
  );
}

export default App;
