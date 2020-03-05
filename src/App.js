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
import UserProfile from './components/user/UserProfile';
import TeamProfile from './components/team/TeamProfile';
import RainbowSixSiege from './components/pages/RainbowSixSiege';
import Footer from './components/misc/Footer';

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

            <Route exact path="/tournament/rainbow-six-siege">
              <RainbowSixSiege />
            </Route>

            <Route exact path="/user/:id" component={UserProfile}/>

            <Route exact path="/team/profile/:id" component={TeamProfile}/>

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
        <Footer />
    </div>
  );
}

export default App;
