import { connect } from 'react-redux';
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

export default connect(msp, mdp)(Signup);
