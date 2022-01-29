import { mount } from "enzyme";
import { MemoryRouter } from "react-router-dom";
import AuthContext from "../../../auth/authContext";
import Navbar from "../../../components/UI/Navbar";
import types from "../../../types/types";

const mockNavigate = jest.fn()

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useNavigate: () => mockNavigate
}))

describe(' * Pruebas en el componente <Navbar />', () => {

    const name = 'Pedro';
    const mockDispatch = jest.fn();

    const value = {
        user: {
            logged: true,
            name
        },
        dispatch: mockDispatch
    }

    
    const wrapperNav = mount(
        <AuthContext.Provider value={ value }>
            <MemoryRouter initialEntries={ ['/'] }>
                <Navbar />
            </MemoryRouter>
        </AuthContext.Provider>
    );

    beforeEach( () => {
        jest.clearAllMocks()
    })
        
    test(' - Debe de mostrar el componente correctamente', () => {

        expect( wrapperNav ).toMatchSnapshot();
        expect( wrapperNav.find('.text_info').text().trim() ).toBe( name );

    });

    test(' - Debe llamar el logout, dispatch y el navigate con los argumentos requeridos', () => {
        wrapperNav.find('.btn_logout').simulate('click');

        // Llamada del Dispatch
        expect( mockDispatch ).toHaveBeenCalled();
        expect( mockDispatch ).toHaveBeenCalledTimes(1);
        expect( mockDispatch ).toHaveBeenCalledWith({ type: types.logout });

        // Llamada del Navigate
        expect( mockNavigate ).toHaveBeenCalled();
        expect( mockNavigate ).toHaveBeenCalledTimes(1);
        expect( mockNavigate ).toHaveBeenCalledWith('/login', { replace: true })
    });


});
