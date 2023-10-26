import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import NotesListPage from '../pages/NotesListPage';
import NotePage from '../pages/NotePage';

function App() {
  return (
    <Router>
      <>
        <h1>This is my first React App</h1>
        <Switch>
          <Route path='/' exact component={NotesListPage} />
          <Route path='/notes' component={NotePage} />
        </Switch>
      </>
    </Router>
  );
}

export default App;
