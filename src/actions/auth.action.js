import axios from 'axios'

export const loginStart = payload => ({
    type: 'LOGIN_START',
});

export const userLoading = payload => ({
    type: 'USER_LOADING',
});

export const userLoaded = payload => ({
    type: 'USER_LOADED',
});


const loginSuccess = payload => ({
    type: 'LOGIN_SUCCESS',
    payload
});

const loginFailure = error => ({
    type: 'LOGIN_FAILURE',
    payload:error
});

const authFailure = error => ({
    type: 'AUTH_FAILURE',
    payload:error
});

const setToken = token => ({
    type: 'SET_TOKEN',
    payload:token
})
export const loginApi = (requestOptions) => dispatch => {
    dispatch(loginStart());
      axios.post('api/auth/login', requestOptions)
          .then(data => {
            dispatch(loginSuccess(data))
            dispatch(setToken(data.token));
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(loginFailure(error.message))
          });
}

export const registerApi = (requestOptions) => dispatch => {
    dispatch(loginStart());
      axios.post('api/auth/register', requestOptions)
          .then(data => {
            dispatch(loginSuccess(data))
            dispatch(setToken(data.token));
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(loginFailure(error.message))
          });
}

export const logoutApi = () => (dispatch, getState) => {
      axios.post('api/auth/logout', tokenConfig(getState))
          .then(data => {
            dispatch({
                type: 'LOGOUT_SUCCESS',
                payload: data.data
            })
          })
          .catch(error =>{
              console.log("logout error", error);
              dispatch(authFailure(error.message))
          });
}


export const loadUser = () => (dispatch, getState) => {
    dispatch(userLoading());

    // if(tokenConfig(getState).token){
      axios.get('api/auth/me', tokenConfig(getState))
          .then(data => {
            dispatch({
                type: 'USER_LOADED',
                payload: data.data
            })
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(authFailure(error.message))
          });
        // }
}

export const tokenConfig =getState => {

    const token = getState().auth.token;

    const config = {
        headers: {
            "Content-Type": "application/json"
        }
    }

    if(token) {
        config.headers['Authorization'] ='Bearer ' + token;
    }

    return config;
}