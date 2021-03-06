import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {
  signup,
  clearSessionErrors } from '../../actions/session_actions';
import Signup from './signup';

const msp = state => {
  const errors = state.errors.session;
  const title = 'Register';

  return {
    errors,
    title,
  };
};

const mdp = dispatch => {
  return {
    submitAction : user => dispatch(signup(user)),
    clearErrors: () => dispatch(clearSessionErrors()),
  };
};

export default withRouter(connect(msp, mdp)(Signup));
