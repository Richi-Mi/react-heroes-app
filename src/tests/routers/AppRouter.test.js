import { mount } from "enzyme";
import AuthContext from "../../auth/authContext";
import AppRouter from "../../routers/AppRouter";

describe(' * Pruebas sobre el componente <AppRouter /> ', () => {
    
    test(' - Debe de mostrar el Login si no esta autenticado', () => {
        const contextValue = {
            user: {
                logged: false
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('h1').text().trim() ).toBe( "Login Screen" );
    });
    
    test(' - Debe mostrar el componente Home si esta autenticado', () => {
        const contextValue = {
            user: {
                logged: true,
                name: 'Ricardo'
            }
        }
        const wrapper = mount(
            <AuthContext.Provider value={ contextValue }>
                <AppRouter />
            </AuthContext.Provider>
        )
        expect( wrapper ).toMatchSnapshot();
        expect( wrapper.find('.title_home').text().trim() ).toBe('Heroes App');
        expect( wrapper.find('.nav').exists() ).toBe( true );
    });

});
