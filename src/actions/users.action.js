import axios from "axios";

export const  getUsers = () => async dispatch => {
    dispatch(userStart());
      await axios.get('api/number_of_users')
          .then(data => {
            dispatch(userSuccess(data.data))
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(userFailure(error.message))
          });
}
export const  getUsersFilterById = (id) => async dispatch => {
    dispatch(userStart());
      await axios.get('api/number_of_users?id=' + id)
          .then(data => {
            dispatch(userSuccess(data.data))
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(userFailure(error.message))
          });
}

export const  getUsersFilterByName = (name) => async dispatch => {
    dispatch(userStart());
      await axios.get('api/number_of_users?name=' + name)
          .then(data => {
            dispatch(userSuccess(data.data))
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(userFailure(error.message))
          });
}

export const  getUsersFilterByEmail = (email) => async dispatch => {
    dispatch(userStart());
      await axios.get('api/number_of_users?email=' + email)
          .then(data => {
            dispatch(userSuccess(data.data))
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(userFailure(error.message))
          });
}

const userSuccess = payload => ({
    type: 'USER_SUCCESS',
    payload
});
const userFailure = error => ({
    type: 'USER_FAILURE',
    payload:error
});

export const userStart = payload => ({
    type: 'USER_START',
});

const userSuccessRegistration = payload => ({
    type: 'USER_REGISTRATION_SUCCESS',
    payload
});
const userFailureRegistration = error => ({
    type: 'USER_REGISTRATION_FAILURE',
    payload:error
});

export const userStartRegistration = payload => ({
    type: 'USER_REGISTRATION_START',
});


export const  getUsersRegistration = () => async dispatch => {
    dispatch(userStartRegistration());
      await axios.get('api/average_of_users')
          .then(data => {
            dispatch(userSuccessRegistration(data.data))
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(userFailureRegistration(error.message))
          });
}

export const  getUsersRegistrationByPeriod = (period) => async dispatch => {
    dispatch(userStartRegistration());
      await axios.get('api/average_of_users?period=' + period)
          .then(data => {
            dispatch(userSuccessRegistration(data.data))
          })
          .catch(error =>{
              console.log("login error", error);
              dispatch(userFailureRegistration(error.message))
          });
}