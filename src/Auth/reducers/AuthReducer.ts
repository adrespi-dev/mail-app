import { SIGN_IN, SIGN_IN_SUCCESS } from '../actionCreators';

export function authLoadingReducer(isLoading = false, action: any) {
  const { type } = action;
  if (type === SIGN_IN) {
    return true;
  }
  return isLoading;
}

const initialUser = JSON.parse(localStorage.getItem('currentUser')!);
export function authUserReducer(currentUser = initialUser, action: any) {
  const { type } = action;
  if (type === SIGN_IN_SUCCESS) {
    const { user } = action;
    return user;
  }
  return currentUser;
}
