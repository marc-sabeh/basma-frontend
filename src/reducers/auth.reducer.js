const init = {
    isLogin: false,
    data: null,
    error:undefined,
    loading: false,
    token: sessionStorage.getItem('token')
}

export const authReducer = (state = init, action) =>{
    switch (action.type){
        case 'LOGIN_START':
            return {...state, loading:true}
        case 'USER_LOADING':
            return {...state, loading:true}
        case 'LOGIN_SUCCESS':
            sessionStorage.setItem('token', action.payload.data.token);
            return {...state, loading:false, isLogin:true, data:action.payload}
        case 'LOGOUT_SUCCESS':
            sessionStorage.removeItem('token');
            return {...state, loading:false, isLogin:false, data:null}
        case 'LOGIN_FAILURE':
            return {...state, loading:false, error:action.payload}
        case 'USER_LOADED':
            return {...state, isLogin: true, loading:false, user:action.payload}
        case 'AUTH_FAILURE':
            return {...state, loading:false, error:action.payload}
        default:
            return state;
    }
}