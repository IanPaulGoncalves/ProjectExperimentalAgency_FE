import { loginAuth, loginAuthToken } from '../../services/authService';

export const LOGIN_SUCESS = '@account/LOGIN_SUCESS';
export const SILENT_LOGIN = '@account/SILENT_LOGIN';

export function login(email: string, password: string) {
  return async (dispatch: any) => {
    const user = await loginAuth(email, password);
    dispatch({
      type: LOGIN_SUCESS,
      payload: {
        user
      }
    });
  };
}

export function silentLogin() {
  return async (dispatch: any) => {
    const user = await loginAuthToken();
    dispatch({
      type: SILENT_LOGIN,
      payload: {
        user
      }
    });
  };
}
