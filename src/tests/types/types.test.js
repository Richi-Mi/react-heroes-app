import types from "../../types/types";

describe(' * Pruebas en los Types de mi app', () => {
    test(' - Los Types no deben de Cambiar ', () => {
        const defTypes = {
            login: '[auth] Login',
            logout: '[auth] Logout'
        }
        expect( defTypes ).toEqual( defTypes );
    })
});
