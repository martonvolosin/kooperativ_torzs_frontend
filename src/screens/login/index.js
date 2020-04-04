import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { Login } from './Login.screen';
import { register, login } from '../../store/actions';

const mapStateToProps = () => ({});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ register, login }, dispatch);
};

const LoginContainer = connect(mapStateToProps, mapDispatchToProps)(Login);

export { LoginContainer as Login };
