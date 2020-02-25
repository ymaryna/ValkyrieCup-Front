import React from 'react';
import './App.css';
import NavBar from './components/misc/NavBar';
import { Switch, Route, Redirect } from 'react-router-dom'
import Login from './components/Login';
import Home from './components/Home';
import Register from './components/Register';
import Profile from './components/user/Profile';
import AuthenticatedRoute from './components/misc/AuthenticatedRoute';
import CreateTeam from './components/pages/CreateTeam';
import EditTeam from './components/team/EditTeam';

function App() {
  return (
    <div className="App">
      <NavBar />

      <main className="main">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>

            <Route exact path="/signup">
              <Register />
            </Route>

            <AuthenticatedRoute exact path="/team/create">
              <CreateTeam />
            </AuthenticatedRoute>

            <AuthenticatedRoute exact path="/team/edit">
              <EditTeam />
            </AuthenticatedRoute>

            <AuthenticatedRoute exact path="/profile">
              <Profile />
            </AuthenticatedRoute>

            <Redirect to="/"/>
          </Switch>
        </main>
    </div>
  );
}

export default App;
