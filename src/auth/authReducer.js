import types from "../types/types";

// const state = {
//     nombre: 'Ricardo',
//     logged: true
// }

// const loginAction = {
//     type: types.login,
//     payload: {
//         name: 'Ricardo',
//         email: 'mjoseanakin@gmail.com'
//     }
// }

const authReducer = ( state = {}, action ) => {
    switch( action.type ) {
        case types.login:
            return {
                ...action.payload,
                logged: true
            }
        
        case types.logout:
            return {
                logged: false
            }
        default:
            return state
    }
}
export default authReducer;
