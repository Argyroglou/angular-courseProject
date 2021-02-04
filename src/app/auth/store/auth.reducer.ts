import { User } from "../user.model";
import * as AuthActions from "./auth.actions";

export interface State {
  user: User;
  authError: string;
  loading: boolean;
}

const intialState: State = {
  user: null,
  authError: null,
  loading: false
};

export function authReducer(state = intialState, action: AuthActions.AuthActions) {
  console.log(state);
  switch (action.type) {
    case AuthActions.AUTHENTICATE_SUCCESS:
      const user = new User(action.paylod.email, action.paylod.userId, action.paylod.token, action.paylod.expirationDate);
      return {
        ...state,
        authError: null,
        user: user,
        loading: false
      };
    case AuthActions.LOGOUT:
      return {
        ...state,
        user: null
      };
    case AuthActions.LOGIN_START:
      return {
        ...state,
        authError: null,
        loading: true
      };
    case AuthActions.AUTHENTICATE_FAIL:
      return {
        ...state,
        user: null,
        authError: action.paylod,
        loading: false
      };
    default:
      return state;
  }
}
