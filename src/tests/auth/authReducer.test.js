import authReducer from "../../auth/authReducer";
import types from "../../types/types";

describe(' * Pruebas sobre el Auth Reducer', () => {
    test(' - Debe de retornar el estado por defecto', () => {
        const defaultState = {
            nombre: 'Ricardo',
            logged: true
        }
        const action = {
            type: 'default'
        }
        const state = authReducer( defaultState, action );

        expect( state ).toEqual( defaultState );
    });
    test(' - Debe de colocar y autenticar el "name" del usuario', () => {
        const oldState = {
            logged: false
        }
        const action = {
            type: types.login,
            payload: {
                name: 'Ricardo',
                logged: true
            }
        }
        const newState = authReducer( oldState, action );

        expect( newState ).toEqual({ 
            name: 'Ricardo',
            logged: true
        })
    });
    test(' - Debe de borrar el estado y devolver logged en false', () => {
        const oldState = {
            nombre: 'Ricardo',
            logged: true
        } 
        const action = {
            type: types.logout
        }

        const newState = authReducer( oldState, action );
        expect( newState ).toEqual({ logged: false })
    });
    
});
