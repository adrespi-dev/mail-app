import User from '../Common/models/User';
import { signInAsync } from './authServicets';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_IN_SUCCESS = 'SIGN_IN_SUCCESS';

export const signIn = () => {
  return async (dispatch: any) => {
    dispatch({ type: SIGN_IN });

    const user = await signInAsync();
    dispatch(signInSuccess(user));
  };
};

export const signInSuccess = (user: User) => ({
  type: SIGN_IN_SUCCESS,
  user,
});
