import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotesListPage from '../pages/NotesListPage';
import NotePage from '../pages/NotePage';
import Header from './Header';
import '../App.css';

function App() {
  return (
    <Router>
      <div className='container'>
      <div className='app'>
        <Header />
        <Switch>
          <Route path='/' exact component={NotesListPage} />
          <Route path='/notes/:id' component={NotePage} />
        </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
