import Main from './Main';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { bindActionCreators } from 'redux';
import * as actions from '../redux/actions';


function mapStateToProps(state) {
  return {
    posts: state.postReducer,
    comments: state.commentReducer
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(actions, dispatch)
}

const App = withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
export default App;