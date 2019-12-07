import { USER_DATA, UPDATED_USER_DATA, USER_PRESSED,SIGNUP_VALID ,SPECIALITY_PRESSED} from '../actions/types';
const initialState = {
    usersData: [],
    userPressedData: [],
    updatedUsersData: [],
    signupIsValid:false,
    SpecialityState:false
}
export default function (state = initialState, action) {
    switch (action.type) {
        case USER_DATA:
            return {
                ...state,
                usersData: action.payload,
            }
        case UPDATED_USER_DATA:
            return {
                ...state,
                updatedUsersData: action.payload,
            }
        case USER_PRESSED:
            return {
                ...state,
                userPressedData: action.payload,
            }
            case SIGNUP_VALID:
            return {
                ...state,
                signupIsValid: action.payload,
            }
            case SPECIALITY_PRESSED:
                return {
                    ...state,
                    SpecialityState: action.payload,
                }
        default:
            return state
    }
}