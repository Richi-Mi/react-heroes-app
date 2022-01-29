import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import AuthContext from "../../auth/authContext";
import PrivateRoutes from "../../routers/PrivateRoutes";

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    Navigate: () => <span> Saliendo de Aqui </span>
}))

describe(' * Pruebas en el componente <PrivateRoutes />', () => {

    Storage.prototype.setItem = jest.fn()

    test(' - Debe de mostrar el componente si esta autenticado y guardar el el localStorage', () => {
        
        const value = {
            user: {
                logged: true,
                name: 'Jose Ricardo'
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ value }>
                <MemoryRouter initialEntries={ ['/'] }>
                    <PrivateRoutes>
                        <h1> Private Component  </h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect( wrapper.text().trim() ).toBe('Private Component');
        expect( localStorage.setItem ).toHaveBeenCalledWith('lastPath', '/');

    });
    
    test(' - Debe de bloquear el componente si no esta autenticado', () => {
        const value = {
            user: {
                logged: false,
            }
        }
        
        const wrapper = mount(
            <AuthContext.Provider value={ value }>
                <MemoryRouter initialEntries={ ['/'] }>
                    <PrivateRoutes>
                        <h1> Private Component  </h1>
                    </PrivateRoutes>
                </MemoryRouter>
            </AuthContext.Provider>
        )
        expect( wrapper.text().trim() ).toBe('Saliendo de Aqui');
    });
    

});
