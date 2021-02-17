import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage';
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'



function App() {
  return (
    <Router>
    <div className="App">
     <div>
     <Header></Header>
       <Switch>
         <HomePage></HomePage>
         <Route exact path="/" component={HomePage} />
       </Switch>
     </div>
    </div>
    <Footer></Footer>

  </Router>
  );
}

export default App;
