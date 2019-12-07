import { USER_DATA, UPDATED_USER_DATA, USER_PRESSED,SPECIALITY_PRESSED } from './types'
export const setUsersData = (usersData) => dispatch => (
  dispatch({
    type: USER_DATA,
    payload: usersData
  })
)
export const updateUsersData = (updatedUsersData) => dispatch => (
  dispatch({
    type: UPDATED_USER_DATA,
    payload: updatedUsersData
  })
)
export const setUserPressedData = (userPressedData) => dispatch => (
  dispatch({
    type: USER_PRESSED,
    payload: userPressedData
  })
)
export const setSignUpValidation = (signupIsValid) => dispatch => (
  dispatch({
    type: SIGNUP_VALID,
    payload: signupIsValid
  })
  
)
export const setSpecialityState = (SpecialityState) => dispatch => (
  dispatch({
    type: SPECIALITY_PRESSED,
    payload: !!SpecialityState
  })
  
)