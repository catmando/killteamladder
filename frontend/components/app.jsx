import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { AuthRoute,
 ProtectedRoute } from '../util/route_util';
import Login from './auth/login_container';
import Signup from './auth/signup_container';
import Nav from './nav/nav';
import Background from './general/background';
import Main from './main/main_container';
import Account from './account/account_container';
import EditAccount from './account/edit_account_container';
import NewMatch from './match/new_match_container';
import EditMatch from './match/edit_match_container';
import DeleteMatch from './match/delete_match_container';
import NewTeam from './teams/new_team_container';
import EditTeam from './teams/edit_team_container';
import RetireTeam from './teams/retire_team_container';
import Team from './teams/team_container';

export default () => {

  return (
    <>
      <Background />
      <Nav />
      <Switch>
        <AuthRoute exact path='/login' component={ Login } />
        <AuthRoute exact path='/signup' component={ Signup } />
        <ProtectedRoute path='/account/edit' component={ EditAccount } />
        <ProtectedRoute path='/account' component={ Account } />
        <ProtectedRoute path='/match/:matchId/edit' component={ EditMatch } />
        <ProtectedRoute path='/match/:matchId/delete' component={ DeleteMatch } />
        <ProtectedRoute path='/match/new' component={ NewMatch } />
        <ProtectedRoute path='/team/new' component={ NewTeam } />
        <ProtectedRoute path='/team/:teamId/edit' component={ EditTeam } />
        <ProtectedRoute path='/team/:teamId/retire' component={ RetireTeam } />
        <Route path='/team/:teamId' component={ Team } />
        <Route path='/' component={ Main } />
      </Switch>
    </>
  );
};
