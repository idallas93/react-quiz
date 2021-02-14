import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
     <div>
       <Switch>
         <Route path="/">
          {/* add home components */}
         </Route>
       </Switch>
     </div>
    </div>
  </Router>
  );
}

export default App;
