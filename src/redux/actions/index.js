import { GET_API, GET_EMAIL } from '../../components/actionTypes';

export const loginAction = (payload) => ({ type: GET_EMAIL, payload });

export const getCurrency = (payload) => ({ type: GET_API, payload });

export function getApi() {
  return async (dispatch) => {
    const request = await fetch('https://economia.awesomeapi.com.br/json/all');
    const requestJson = await request.json(); //
    return dispatch(getCurrency(requestJson));
  };
}
