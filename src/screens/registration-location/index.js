import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { RegistrationLocation } from './RegistrationLocation.screen';
import { register } from '../../store/actions';

const mapStateToProps = ({ auth }) => ({
  accessToken: auth.accessToken,
});

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ register }, dispatch);
};

const RegistrationLocationContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(RegistrationLocation);

export { RegistrationLocationContainer as RegistrationLocation };
