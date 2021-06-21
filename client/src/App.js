import React from 'react'
import NavBar from './components/NavBar'
import Container from '@material-ui/core/Container';
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import Trending from './components/Pages/Trending/Trending'
import Movies from './components/Pages/Movies/Movies'
import Series from './components/Pages/Series/Series'
import Search from './components/Pages/Search/Search'
import Corosel from './components/Corosel'
import './App.css';

function App() {
  return (
    <BrowserRouter>
    <NavBar />
    <Corosel />
    <div className="App">
    <Container>
    <Switch>
     <Route path="/" component={Trending} exact />
     <Route path="/Movies" component={Movies} />
     <Route path="/Series" component={Series} />
     <Route path="/Search" component={Search} />
    </Switch>
    </Container>
    </div>
    </BrowserRouter>
  );
}

export default App;
