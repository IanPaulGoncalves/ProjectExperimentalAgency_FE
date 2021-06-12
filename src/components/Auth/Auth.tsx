import React, { useEffect, useCallback } from 'react';
import { silentLogin } from '../../reducers/account/actions';
import { useAppDispatch } from '../../app/hooks';
import { isAuthenticated } from '../../services/authService';

function Auth({ children }) {
  const dispatch = useAppDispatch();
  const initAuth = useCallback(async () => {
    if (isAuthenticated()) {
      await dispatch(silentLogin());
    }
  }, [dispatch]);
  useEffect(() => { initAuth(); }, [initAuth]);
  return children;
}

export default Auth;