import { connect } from 'react-redux';
import NewMatch from './new_match';
import { withRouter } from 'react-router-dom';
import { getTeams } from '../../actions/team_actions';
import { newMatch } from '../../actions/match_actions';
import { getUser } from '../../actions/user_actions';
import { setPathHistory,
  clearPathHistory
} from '../../actions/ui_actions';

const msp = state => {
  const loggedIn = state.session.id !== undefined;
  let currentUser;
  if (loggedIn) currentUser = state.entities.users[state.session.id];

  const errors = state.errors.match || {};
  const teams = state.entities.teams;

  let cameFromTeamId;
  if (state.ui.history) cameFromTeamId = state.ui.history.team;

  return {
    loggedIn,
    currentUser,
    errors,
    teams,
    cameFromTeamId,
  };
};

const mdp = dispatch => {
  return {
    getTeams: () => dispatch(getTeams()),
    getUser: id => dispatch(getUser(id)),
    newMatch: (match, historyPush) => dispatch(newMatch(match, historyPush)),
    setPathHistory: data => dispatch(setPathHistory(data)),
    clearPathHistory: () => dispatch(clearPathHistory()),
  };
};

export default withRouter(connect(msp, mdp)(NewMatch));
