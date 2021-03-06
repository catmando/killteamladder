import React from 'react';
import { connect } from 'react-redux';
import { Link, withRouter } from 'react-router-dom';
import ImageButton from '../general/image_button';

const Login = (props) => {

  return (
    <div id='bottom-nav'>
      <div id='internal-nav'>
        <img src={ window.logo } id='logo' />
        { navButtons(props.history.location.pathname, props.loggedIn) }
      </div>
    </div>
  );

};

const navButtons = (path, loggedIn) => {

  switch (path) {
    case '/login':
    case '/signup':
    case '/match/new':
      return <ImageButton path='/' image={ window.close } />;

    case '/account/edit':
    case '/team/new':
      return <ImageButton path='/account' image={ window.close } />;

    case '/team/:teamId/new':
      // TODO: uh fix this
      return <ImageButton path={ `/team/${teamId}` } image={ window.close } />;

    case '/':
      if (loggedIn) {
        return accountAndMatchButtons();
      } else {
        return authButtons();
      }
      break;

    default:
      return <ImageButton path='/' image={ window.close } />;

  }
};

const accountAndMatchButtons = () => {
  return (
    <div id='nav-button-group'>
      <Link to='/account'>
        <img src={ window.account } className='img-button' />
      </Link>
      <Link to='/match/new'>
        <img src={ window.add } className='img-button' />
      </Link>
    </div>
  );
};

const authButtons = () => {
  return (
    <div id='nav-button-group'>
      <Link className='button nav-button' to='/signup'>Register</Link>
      <Link className='button nav-button' to='/login'>Login</Link>
    </div>
  );
};



const msp = state => {
  const loggedIn = state.session.id !== undefined && state.session.id !== null;

  return {
    loggedIn,
  };
};

export default withRouter(connect(msp)(Login));
