import { connect } from 'react-redux';
import AuthGuard from '../components/AuthGuard';
import { signIn } from '../actionCreators';

const mapStateToProps = (state: any) => {
  const { currentUser, isAuthLoading } = state;
  return {
    isLoading: isAuthLoading,
    currentUser,
  };
};

const AuthContainer = connect(mapStateToProps, {
  signIn,
})(AuthGuard);

export default AuthContainer;
