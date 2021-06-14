const init = {
    data: null,
    data_registration:null,
    error:undefined,
    loading: false,
}

export const usersReducer = (state = init, action) =>{
    switch (action.type){
        case 'USER_START':
            return {...state, loading:true}
        case 'USER_SUCCESS':
            return {...state, loading:false, data:action.payload}
        case 'USER_FAILURE':
            return {...state, loading:false, error:action.payload}
        case 'USER_REGISTRATION_START':
            return {...state, loading:true}
        case 'USER_REGISTRATION_SUCCESS':
            return {...state, loading:false, data_registration:action.payload}
        case 'USER_REGISTRATION_FAILURE':
            return {...state, loading:false, error:action.payload}
        default:
            return state;
    }
}