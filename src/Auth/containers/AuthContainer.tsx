import { connect } from 'react-redux';
import Auth from '../components/Auth';

const mapStateToProps = (state: any) => {
  const { isAuthenticated } = state;
  return {
    isAuthenticated,
  };
};
const AuthContainer = connect(mapStateToProps)(Auth);

export default AuthContainer;
