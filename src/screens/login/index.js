import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Login } from './Login.screen';
import { login } from '../../store/actions';

const mapStateToProps = ({ auth }) => ({
  accessToken: auth.accessToken,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login }, dispatch);
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginContainer as Login };
