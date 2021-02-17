import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';


function App() {
  return (
    <Router>
    <div className="App">
     <div>
       <Switch>
         <HomePage></HomePage>
         <Route exact path="/" component={HomePage} />
       </Switch>
     </div>
    </div>
  </Router>
  );
}

export default App;
